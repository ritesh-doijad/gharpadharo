"use client";
import React, { useState } from "react";
import { Wifi, BedDouble, Droplet } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";

const PropertiesList = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const dummyProperties = [
    {
      id: 1,
      title: "Modern PG in Pune",
      location: "Kothrud, Pune",
      image: "/images/property1.webp",
      price: "₹6,500",
      badge: "PG",
      badgeColor: "bg-purple-600",
      type: "Pg",
      hasBookmark: true,
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Water", icon: Droplet },
        { name: "Double Bed", icon: BedDouble },
      ],
      owner: {
        name: "Ravi",
        avatar: "R",
        avatarColor: "bg-green-600",
      },
      postedDate: "June 20, 2025",
    },
    {
      id: 2,
      title: "Girls Hostel in Mumbai",
      location: "Andheri East, Mumbai",
      image: "/images/property2.webp",
      price: "₹8,000",
      badge: "Hostel",
      badgeColor: "bg-blue-600",
      type: "Hostel",
      hasBookmark: false,
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Bed", icon: BedDouble },
      ],
      owner: {
        name: "Anjali",
        avatar: "A",
        avatarColor: "bg-pink-500",
      },
      postedDate: "June 21, 2025",
    },
    {
      id: 3,
      title: "1BHK Flat for Students",
      location: "Baner, Pune",
      image: "/images/property3.webp",
      price: "₹12,000",
      badge: "Flat",
      badgeColor: "bg-yellow-600",
      type: "Flat",
      hasBookmark: true,
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Water", icon: Droplet },
      ],
      owner: {
        name: "Soham",
        avatar: "S",
        avatarColor: "bg-indigo-500",
      },
      postedDate: "June 22, 2025",
    },
  ];

  const filteredProperties = dummyProperties.filter((property) =>
    activeFilter === "All"
      ? true
      : property.type.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 sm:mb-12 gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Discover Latest <br className="hidden sm:block" />
              Properties
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {["All", "Apartment", "PG", "Hostel"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                } transition-all duration-200 text-sm px-4 py-2`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesList;
