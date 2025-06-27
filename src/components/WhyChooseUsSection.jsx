import { ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Easy Search",
    description: "Find your ideal room with our user-friendly search tools.",
  },
  {
    title: "Affordable Prices",
    description: "Get the best deals without compromising on quality.",
  },
  {
    title: "Verified Listings",
    description: "All rooms and properties are thoroughly verified for safety.",
  },
  {
    title: "24/7 Support",
    description: "Our team is always here to assist you, anytime, anywhere.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center overflow-hidden">
              <div className="relative w-[70%] h-[70%] mt-20 sm:mt-28 lg:mt-36">
                <Image
                  src="/images/building-cutout.webp"
                  alt="Modern Building"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                It's our job to make sure that you get the best possible deal on the property.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-1 text-purple-600">
                    <ArrowRight />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
