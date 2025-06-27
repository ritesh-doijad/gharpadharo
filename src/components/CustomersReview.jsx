import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function CustomersReview() {
  const reviews = [
    {
      id: 1,
      name: "Sheryl Berge",
      text: "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Leland Kiehm",
      text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Peter Renolds",
      text: "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600">
            See what our customers are saying about us
          </p>
        </div>

        <Marquee speed={40} pauseOnHover gradient={false}>
          <div className="flex space-x-8 py-5 sm:gap-2 md:gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-white shadow-md border mx-1  border-gray-200 w-96 "
              >
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <p className="text-gray-700 text-md leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="font-medium text-gray-900 text-sm">
                        {review.name}
                      </p>
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-sm">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
