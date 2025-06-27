"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { LogIn, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ShadCN Sheet components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "https://blog.gharpadharo.com/" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">
      <div className="w-full px-4 py-3 md:px-5 md:py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.webp"
                alt="GharPadharo Logo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="font-semibold text-lg ml-2">GharPadharo</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-md font-medium transition-colors ${
                    pathname === link.href
                      ? "text-black"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            {/* Login/Register Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white transition-colors flex items-center gap-1">
                  <LogIn className="w-4 h-4" />
                  <span className="inline sm:hidden">Login</span>
                  <span className="hidden sm:inline">Login / Register</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>Login to your account</DialogTitle>
                  <DialogDescription>
                    Enter your credentials below.
                  </DialogDescription>
                </DialogHeader>
                <form className="mt-4 flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-md px-4 py-2"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Login
                  </Button>
                </form>
              </DialogContent>
            </Dialog>


            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6 text-gray-700" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[250px] sm:w-[300px] px-6 py-4"
                >
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span
                          className={`block text-md font-medium ${
                            pathname === link.href
                              ? "text-black"
                              : "text-gray-700 hover:text-purple-600"
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    ))}
    
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
