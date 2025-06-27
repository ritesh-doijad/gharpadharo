"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"

export default function PropertyFilter({ onFilterChange }) {
  const [keyword, setKeyword] = useState("")
  const [accommodation, setAccommodation] = useState("all")
  const [propertyType, setPropertyType] = useState("all")
  const [furnished, setFurnished] = useState("all")
  const [independent, setIndependent] = useState("all")
  const [availableFor, setAvailableFor] = useState("all")
  const [priceRange, setPriceRange] = useState([1000, 150000])
  const [selectedAmenities, setSelectedAmenities] = useState([])

  useEffect(() => {
    onFilterChange({
      keyword,
      accommodation,
      propertyType,
      furnished,
      independent,
      availableFor,
      priceRange,
      amenities: selectedAmenities,
    })
  }, [
    keyword,
    accommodation,
    propertyType,
    furnished,
    independent,
    availableFor,
    priceRange,
    selectedAmenities,
    onFilterChange,
  ])

  const handleAmenityChange = (amenity, checked) => {
    const updated = checked ? [...selectedAmenities, amenity] : selectedAmenities.filter((item) => item !== amenity)
    setSelectedAmenities(updated)
  }

  const handleClearAll = () => {
    setKeyword("")
    setAccommodation("all")
    setPropertyType("all")
    setFurnished("all")
    setIndependent("all")
    setAvailableFor("all")
    setPriceRange([1000, 150000])
    setSelectedAmenities([])
  }

  const formatPrice = (price) => {
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`
    if (price >= 1000) return `₹${(price / 1000).toFixed(0)}K`
    return `₹${price}`
  }

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-xl font-semibold mb-6">Advanced Search</h2>

      <div className="space-y-2">
        {/* Keyword */}
        <div>
          <Label htmlFor="keyword" className="text-sm text-gray-600 mb-2 block">
            Keyword
          </Label>
          <Input
            id="keyword"
            placeholder="Search by name, location, etc."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Accommodation */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Accommodation</Label>
          <Select value={accommodation} onValueChange={setAccommodation}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pg">PG</SelectItem>
              <SelectItem value="hostel">Hostel</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="room">Room</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="1-room">1 Room</SelectItem>
              <SelectItem value="2-room">2 Room</SelectItem>
              <SelectItem value="3-room">3 Room</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Furnished */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Furnished</Label>
          <Select value={furnished} onValueChange={setFurnished}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="furnished">Furnished</SelectItem>
              <SelectItem value="unfurnished">Unfurnished</SelectItem>
              <SelectItem value="semi-furnished">Semi Furnished</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Independent */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Independent</Label>
          <Select value={independent} onValueChange={setIndependent}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="independent">Independent</SelectItem>
              <SelectItem value="shared">Shared</SelectItem>
              <SelectItem value="builder-floor">Builder Floor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Available For */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Available For</Label>
          <Select value={availableFor} onValueChange={setAvailableFor}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="boys">Boys</SelectItem>
              <SelectItem value="girls">Girls</SelectItem>
              <SelectItem value="family">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-4 block">Price Range</Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={150000}
              min={1000}
              step={1000}
              className="w-full mb-4"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Amenities</Label>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              {["Parking", "WiFi", "Almirah", "CCTV", "Security", "Wash"].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={(checked) => handleAmenityChange(amenity, !!checked)}
                  />
                  <Label htmlFor={amenity} className="text-sm font-normal">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              {["AC", "Refrigerator", "Bed", "Housekeeping", "Drinking Water"].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={(checked) => handleAmenityChange(amenity, !!checked)}
                  />
                  <Label htmlFor={amenity} className="text-sm font-normal">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search Button */}
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>

        {/* Clear All */}
        <div className="text-center">
          <button onClick={handleClearAll} className="text-sm text-gray-600 hover:text-gray-800 underline">
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}
