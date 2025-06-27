"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp, fadeUpSoft, scaleFade } from "@/utils/motionVariants";

export default function AboutPage() {
  const founders = [
    {
      name: "Kumar Anshuman",
      title: "Founder",
      image: "/aboutpageimages/anshuman.webp",
    },
    {
      name: "Shriram Singh",
      title: "Co-Founder",
      image: "/aboutpageimages/ram.webp",
    },
  ];

  const teamMembers = [
    {
      name: "Shubham Chamoli",
      role: "Technical Head",
      image: "/aboutpageimages/techhead.webp",
    },
    {
      name: "Anshika Bisht",
      role: "HR & Growth",
      image: "/aboutpageimages/anshika.webp",
    },
    {
      name: "Siddharth Kumar Kothiyal",
      role: "Tech Lead",
      image: "/aboutpageimages/sid.webp",
    },
    {
      name: "Rishab",
      role: "Test Lead",
      image: "/aboutpageimages/rishab.webp",
    },
    {
      name: "Neha Negi",
      role: "SMM Intern",
      image: "/aboutpageimages/neha.webp",
    },
    {
      name: "Meena Negi",
      role: "SMM Intern",
      image: "/aboutpageimages/meena.webp",
    },
    {
      name: "Pritam Mandal",
      role: "Full stack developer Intern",
      image: "/aboutpageimages/pritam.webp",
    },
  ];

  return (
    <div className="min-h-screen w-full mt-10 bg-gradient-to-b from-white to-gray-50">
      {/* Company Header */}
      <motion.div
        initial={slideUp.initial}
        whileInView={slideUp.animate}
        transition={slideUp.transition}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:py-24"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Our Company
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Your trusted platform for seamless room renting. Whether you're a tenant looking for the perfect place or a
            host wanting to connect with reliable renters, Gharpadharo simplifies the journey.
          </p>
        </div>
      </motion.div>

      {/* Founders Section */}
      <motion.div
        initial={fadeUpSoft.initial}
        whileInView={fadeUpSoft.animate}
        transition={fadeUpSoft.transition}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Meet the two passionate individuals who founded Gharpadharo with a mission to make room renting seamless and
            enjoyable for everyone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-16">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              initial={scaleFade.initial}
              whileInView={scaleFade.animate}
              transition={{ ...scaleFade.transition, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{founder.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{founder.title}</p>
              <div className="flex justify-center">
                <div className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={fadeUpSoft.initial}
        whileInView={fadeUpSoft.animate}
        transition={fadeUpSoft.transition}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Amazing Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the passionate individuals behind our success. Together, we're building something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-12 justify-items-center max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={scaleFade.initial}
                whileInView={scaleFade.animate}
                transition={{ ...scaleFade.transition, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 ring-4 ring-gray-100 group-hover:ring-blue-200">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{member.name}</h4>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">{member.role}</p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex justify-center">
                    <div className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* USP Section */}
      <motion.div
        initial={slideUp.initial}
        whileInView={slideUp.animate}
        transition={slideUp.transition}
        viewport={{ once: true }}
        className="container bg-gray-50 mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-8">Our Unique Advantages</h2>
        </div>

        <div className="max-w-3xl bg-white hover:scale-105 transition-transform ease-in-out duration-200 mx-auto">
          <div className="grid shadow-xl p-5 rounded-2xl gap-6">
            {[
              "India's first secure trading portal based on real-time data",
              "No brokerage or hidden charges",
              "Free on-boarding of new profiles",
              "Aiming to build a system that easily provides real-time details about properties and rentals",
            ].map((usp, index) => (
              <div key={index} className="flex gap-5">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{usp}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={fadeUpSoft.initial}
        whileInView={fadeUpSoft.animate}
        transition={fadeUpSoft.transition}
        viewport={{ once: true }}
        className="py-16 px-4 mx-auto max-w-screen-xl my-10"
      >
        <div className="bg-gradient-to-r shadow-2xl from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-white/95 leading-relaxed text-lg sm:text-xl">
              At Gharpadharo, we're committed to revolutionizing the room rental landscape by providing accessible,
              transparent, and innovative solutions. We empower individuals to find their perfect living spaces with
              confidence through cutting-edge technology, making the world of room rentals more inclusive and rewarding
              for everyone.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
