import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Gharpadharo */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Gharpadharo</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              As the leading platform connecting property seekers and owners in Uttarakhand, Gharpadharo aims to
              simplify the housing experience with technology-driven solutions.
            </p>
            <Link href="#" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Read more
            </Link>
          </div>

          {/* Properties in Uttarakhand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Properties in Uttarakhand</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Property in Dehradun
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Property in Haridwar
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Property in Nainital
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Property in Mussoorie
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                Property in Roorkee
              </Link>
            </div>
          </div>

          {/* Property Types */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Property Types</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                1RK Properties
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                1BHK Properties
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                2BHK Properties
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white text-sm">
                3BHK Properties
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Gharpadharo HQ, Nanda Ki Chowki-Premnagar, Dehradun, Uttarakhand, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 7903266907</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">gharpadharo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Refund Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Blog
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Properties
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Sales Enquiry
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Login
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Who we are
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Company name and tagline */}
            <div>
              <h2 className="text-2xl font-bold text-white">GharPadharo</h2>
              <p className="text-gray-400 text-sm">Real Estate</p>
            </div>

            {/* Social media icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Disclaimer: Gharpadharo is only an intermediary offering its platform to advertise properties of Seller
              for a
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
