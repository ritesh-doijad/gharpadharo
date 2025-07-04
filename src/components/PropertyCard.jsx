import { MapPin, Bookmark } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PropertyCard = ({ property }) => {
  return (
    <Card className="group w-full max-w-sm overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-2xl hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
          src={property.image || "/placeholder.svg?height=200&width=300"}
          alt={property.title}
          width={400}
          height={200}
          className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {property.badge && (
          <div className="absolute top-2 left-2 z-10">
            <Badge
              className={`${property.badgeColor} text-white text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium shadow`}
            >
              {property.badge}
            </Badge>
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-2 left-2 z-10">
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg shadow border border-white/20 text-xs sm:text-sm">
            <span className="font-semibold">{property.price}</span>
            <span className="ml-1 text-gray-500">/month</span>
          </div>
        </div>

        {/* Bookmark */}
        {property.hasBookmark && (
          <div className="absolute top-2 right-2 z-10">
            <div className="w-8 h-8 bg-white/90 rounded-md flex items-center justify-center shadow border border-white/20 hover:bg-white transition duration-200">
              <Bookmark className="w-4 h-4 text-gray-700 fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardContent className="p-4 sm:p-5">
        {/* Title + Location */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 pr-2">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 leading-tight group-hover:text-gray-700 transition-colors truncate">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mb-3">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
            {property.type}
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap items-center gap-3 py-3 border-t border-gray-50">
          {property.amenities?.map((amenity) => (
            <div
              key={amenity.name}
              className="flex items-center gap-1.5 text-gray-600 text-xs"
            >
              <div className="w-6 h-6 bg-gray-50 rounded-md flex items-center justify-center">
                {amenity.icon && (
                  <amenity.icon className="w-3.5 h-3.5 text-gray-500" />
                )}
              </div>
              <span className="truncate max-w-[70px]">{amenity.name}</span>
            </div>
          ))}
        </div>

        {/* Owner & Date */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 ${property.owner?.avatarColor || "bg-gray-400"} rounded-full flex items-center justify-center text-white text-xs font-bold`}
            >
              {property.owner?.avatar || "?"}
            </div>
            <span className="text-xs sm:text-sm text-gray-900 font-medium truncate">
              {property.owner?.name || "Unknown"}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-full">
            {property.postedDate}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
