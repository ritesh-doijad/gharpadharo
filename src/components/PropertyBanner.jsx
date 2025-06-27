import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function PropertyBanner() {
  return (
    <div className="w-full p-3 my-15 lg:px-30">
      {/* Main Banner Card */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between bg-[#f3f6fd] rounded-3xl shadow-2xl w-full h-80 relative">
        
        {/* Left Text Content */}
        <div className="max-w-lg p-8 md:p-12 flex flex-col justify-center items-center">
          <p className="text-sm font-semibold text-blue-600 uppercase">
            Become Partners
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mt-2 text-center">
            List your Properties on{" "}
            <span className="text-primary font-bold">GharPadharo</span>, join us now!
          </h2>
          <Button className="bg-[#1A5CFF] hover:bg-blue-700 mt-6 text-white px-6 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 transition-colors">
            Add your property
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Image - Cutout effect */}
        <div className="right-0 hidden lg:block relative -top-5 w-full lg:w-[617px] h-[360px] mt-10 lg:mt-0">
          <Image
            src="/images/home-cutout.webp"
            alt="Modern house with red and white exterior"
            fill
            className=""
            priority
          />
        </div>
      </div>
    </div>
  );
}
