import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function PropertyBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f3f6fd] rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left - Text */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 py-10 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm font-semibold text-blue-600 uppercase">
            Become Partners
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mt-2">
            List your Properties on{" "}
            <span className="text-primary font-bold">GharPadharo</span>, join us now!
          </h2>
          <Button className="bg-[#1A5CFF] hover:bg-blue-700 mt-6 text-white px-6 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 transition-colors">
            Add your property
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 hidden md:block relative h-64 sm:h-72 md:h-80 lg:h-96">
          <Image
            src="/images/home-cutout.webp"
            alt="Modern house with red and white exterior"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
