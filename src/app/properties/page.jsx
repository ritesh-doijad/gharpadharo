"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  scaleFade,
  fadeUpSoft,
} from "@/utils/motionVariants";

import { mockProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/Filter";

export default function PropertyListingPage() {
  const [filters, setFilters] = useState({
    keyword: "",
    accommodation: "all",
    propertyType: "all",
    furnished: "all",
    independent: "all",
    availableFor: "all",
    priceRange: [1000, 150000],
    amenities: [],
  });

  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const { paginatedProperties, totalPages, totalItems } = useMemo(() => {
    let filtered = mockProperties;

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(keyword) ||
          property.location.toLowerCase().includes(keyword)
      );
    }

    if (filters.accommodation !== "all") {
      filtered = filtered.filter(
        (property) =>
          property.accommodation?.toLowerCase() ===
          filters.accommodation.toLowerCase()
      );
    }

    if (filters.propertyType !== "all") {
      filtered = filtered.filter((property) => {
        const propertyType = property.type?.toLowerCase().replace(" ", "-");
        return propertyType === filters.propertyType;
      });
    }

    if (filters.furnished !== "all") {
      filtered = filtered.filter(
        (property) =>
          property.furnished?.toLowerCase() === filters.furnished.toLowerCase()
      );
    }

    if (filters.independent !== "all") {
      filtered = filtered.filter(
        (property) =>
          property.independent?.toLowerCase() ===
          filters.independent.toLowerCase()
      );
    }

    if (filters.availableFor !== "all") {
      filtered = filtered.filter(
        (property) =>
          property.availableFor?.toLowerCase() ===
          filters.availableFor.toLowerCase()
      );
    }

    if (filters.priceRange[0] !== 1000 || filters.priceRange[1] !== 150000) {
      filtered = filtered.filter(
        (property) =>
          property.price >= filters.priceRange[0] &&
          property.price <= filters.priceRange[1]
      );
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter((property) =>
        filters.amenities.every((amenity) =>
          property.amenities?.some((a) => a.name === amenity)
        )
      );
    }

    const sortedFiltered = [...filtered];
    switch (sortBy) {
      case "price-low":
        sortedFiltered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedFiltered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedFiltered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        sortedFiltered.sort((a, b) => {
          const dateA = new Date(a.createdAt || 0).getTime();
          const dateB = new Date(b.createdAt || 0).getTime();
          return dateB - dateA;
        });
        break;
    }

    const totalItems = sortedFiltered.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProperties = sortedFiltered.slice(startIndex, endIndex);

    return { paginatedProperties, totalPages, totalItems };
  }, [filters, sortBy, currentPage, itemsPerPage]);

  useEffect(() => setCurrentPage(1), [filters, sortBy]);

  const clearAllFilters = useCallback(() => {
    setFilters({
      keyword: "",
      accommodation: "all",
      propertyType: "all",
      furnished: "all",
      independent: "all",
      availableFor: "all",
      priceRange: [1000, 150000],
      amenities: [],
    });
    setSortBy("relevance");
  }, []);

  const hasActiveFilters = useMemo(
    () =>
      filters.keyword ||
      filters.accommodation !== "all" ||
      filters.propertyType !== "all" ||
      filters.furnished !== "all" ||
      filters.independent !== "all" ||
      filters.availableFor !== "all" ||
      filters.priceRange[0] !== 1000 ||
      filters.priceRange[1] !== 150000 ||
      filters.amenities.length > 0,
    [filters]
  );

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [showFilters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="bg-gray-50 p-4 md:p-12 xl:px-36 min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            initial={scaleFade.initial}
            whileInView={scaleFade.animate}
            transition={scaleFade.transition}
            viewport={{ once: true }}
            className={`w-full lg:w-80 xl:w-96 ${
              showFilters
                ? "fixed inset-0 z-50 bg-white overflow-y-auto p-4"
                : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 lg:hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <PropertyFilter
              onFilterChange={setFilters}
              filters={filters}
              clearAllFilters={clearAllFilters}
            />
            {hasActiveFilters && (
              <div className="mt-4">
                <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full">
                  Clear All Filters
                </Button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={scaleFade.initial}
            whileInView={scaleFade.animate}
            transition={scaleFade.transition}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Property Listing</h1>
                <p className="text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} properties
                  {hasActiveFilters && (
                    <span className="ml-2 text-sm text-blue-600">(filtered)</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
                  {hasActiveFilters && (
                    <span className="ml-1 bg-blue-500 text-white text-xs rounded-full w-2 h-2"></span>
                  )}
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {paginatedProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paginatedProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 overflow-x-auto w-full">
                    <div className="flex justify-center min-w-[320px]">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                              }}
                              className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            if (
                              page === 1 ||
                              page === totalPages ||
                              (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage(page);
                                    }}
                                    isActive={currentPage === page}
                                  >
                                    {page}
                                  </PaginationLink>
                                </PaginationItem>
                              );
                            } else if (page === currentPage - 2 || page === currentPage + 2) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationEllipsis />
                                </PaginationItem>
                              );
                            }
                            return null;
                          })}

                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                              }}
                              className={
                                currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={fadeUpSoft.initial}
                whileInView={fadeUpSoft.animate}
                transition={fadeUpSoft.transition}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600 mb-4">
                  {hasActiveFilters
                    ? "Try adjusting your search criteria or filters"
                    : "No properties are currently available"}
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}