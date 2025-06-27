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
    <section className="bg-white pt-12 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            See what our customers are saying about us
          </p>
        </div>

        <Marquee speed={40} pauseOnHover gradient={false}>
          <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 py-5">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-white shadow-md border border-gray-200 w-80 sm:w-96 mx-1"
              >
                <CardContent className="p-5 sm:p-6 h-full flex flex-col justify-between">
                  {/* Review text */}
                  <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                    {review.text}
                  </p>

                  {/* Stars + Reviewer */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-1">{renderStars(review.rating)}</div>
                    <div className="flex items-center space-x-3">
                      <p className="font-medium text-gray-900 text-sm truncate max-w-[100px]">
                        {review.name}
                      </p>
                      <Avatar className="w-9 h-9 sm:w-10 sm:h-10">
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-xs sm:text-sm">
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
    </section>
  );
}
