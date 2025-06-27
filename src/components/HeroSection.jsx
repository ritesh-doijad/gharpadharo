import React from "react";
import { Search, Home, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-20 sm:pb-20">
      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 min-h-[80vh]">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
            Find Your
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Room
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            Discover thousands of verified properties with our smart search.
            Your ideal home is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-sm sm:text-base rounded-xl">
              Explore Properties
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs mx-auto lg:mx-0">
            {[
              { number: "10K+", label: "Properties" },
              { number: "5K+", label: "Happy Customers" },
              { number: "50+", label: "Cities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg sm:text-xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full max-w-md rounded-3xl shadow-xl transition-all hover:scale-[1.02]">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-6 sm:p-8">
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Quick Search
              </h3>
              <Badge className="bg-green-100 text-green-700 border border-green-200 text-xs sm:text-sm">
                Live
              </Badge>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search location, property type..."
                  className="pl-12 h-12 text-sm sm:text-base border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              {/* Select Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="h-12 w-full border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm">
                    <Home className="w-4 h-4 mr-2 text-gray-500" />
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Apartment</SelectItem>
                    <SelectItem value="pg">PG</SelectItem>
                    <SelectItem value="hostel">Hostel</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="h-12 w-full border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <SelectValue placeholder="For" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="boys">Boys</SelectItem>
                    <SelectItem value="girls">Girls</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="w-full h-12 text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg">
                🔍 Search Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
