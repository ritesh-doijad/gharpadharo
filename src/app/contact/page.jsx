"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";
import { slideUp, slideRight, scaleFade } from "@/utils/motionVariants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("The Message is sent successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      {/* Hero Section with Slide Up Animation */}
      <motion.div
        initial={scaleFade.initial}
        whileInView={scaleFade.animate}
        transition={scaleFade.transition}
        viewport={{ once: true }}
        className="container mx-auto mb-8"
      >
        <div className="relative shadow-2xl h-48 md:h-56 rounded-4xl overflow-hidden">
          <img
            src="/images/contact.webp"
            alt="Contact Us - Modern architectural interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Main Contact Section */}
      <motion.div
        initial={scaleFade.initial}
        whileInView={scaleFade.animate}
        transition={scaleFade.transition}
        viewport={{ once: true }}
        className="container mx-auto bg-white shadow-2xl rounded-4xl mt-12 px-4 sm:px-6 md:px-10 py-10 md:py-20"
      >
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form with Scale Fade */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Drop Us A Line
              </h2>
              <p className="text-gray-600">
                Feel free to connect with us through our online channels for
                updates, news, and more.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-blue-600" />
                    Full Name:
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    Email Address:
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    Phone Number:
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="ex 012345678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    Subject:
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter Keyword"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Your Message:
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 resize-none border-gray-200 rounded-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Sidebar with Slide Right */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address:
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gharpadharo HQ, Nanda Ki Chowki-Premnagar,
                      <br />
                      Dehradun,
                      <br />
                      Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone:</h4>
                    <p className="text-gray-600 text-sm">+91 7903269007</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email:</h4>
                    <p className="text-gray-600 text-sm break-all">
                      gharpadharo@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
