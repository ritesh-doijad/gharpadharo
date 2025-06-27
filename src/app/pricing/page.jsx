"use client"
import { motion } from "framer-motion";
import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { scaleFade, slideUp } from "@/utils/motionVariants";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    setIsDialogOpen(true)
  }

  const calculateBilling = (baseAmount) => {
    const gst = Math.round(baseAmount * 0.18 * 100) / 100
    const platformFee = 12
    const total = baseAmount + gst + platformFee
    return { baseAmount, gst, platformFee, total }
  }

  const plans = [
    {
      name: "FREE",
      title: "Free",
      price: null,
      description: "The perfect way to get started and get used to our platform.",
      features: [
        { text: "Account creation", included: true },
        { text: "1 room free listing", included: true },
        { text: "90 days validity", included: true },
        { text: "Verified Owner Badge", included: true, strikethrough: true },
        { text: "Multiple address", included: true, strikethrough: true },
        { text: "Top position in search list", included: true, strikethrough: true },
        { text: "Priority Support", included: true, strikethrough: true },
        { text: "Commission-Free Payments", included: true, strikethrough: true },
        { text: "Early Access to New Features", included: true, strikethrough: true },
      ],
      buttonText: "Start for Free",
      buttonVariant: "default",
      popular: false,
    },
    {
      name: "PRO",
      title: "₹499",
      subtitle: "/month",
      price: 499,
      description: "The perfect way to get started and get used to our platform.",
      features: [
        { text: "Account creation", included: true },
        { text: "10 room free listing", included: true },
        { text: "180 days validity", included: true },
        { text: "Verified Owner Badge", included: true },
        { text: "Single address", included: true },
        { text: "Top position in search list for 6 days", included: true },
        { text: "Priority Support", included: true },
        { text: "Commission-Free Payments", included: true },
        { text: "Early Access to New Features", included: true },
      ],
      buttonText: "Upgrade Plan",
      buttonVariant: "secondary",
      popular: true,
    },
    {
      name: "PREMIUM",
      title: "₹999",
      subtitle: "/month",
      price: 999,
      description: "The perfect way to get started and get used to our platform.",
      features: [
        { text: "Account creation", included: true },
        { text: "Unlimited listing", included: true },
        { text: "180 days validity", included: true },
        { text: "Verified Owner Badge", included: true },
        { text: "Multiple address", included: true },
        { text: "Top position in search list for 10 days", included: true },
        { text: "Priority Support", included: true },
        { text: "Commission-Free Payments", included: true },
        { text: "Early Access to New Features", included: true },
      ],
      buttonText: "Upgrade Plan",
      buttonVariant: "default",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div  initial={scaleFade.initial}
              whileInView={scaleFade.animate}
              transition={scaleFade.transition}
              viewport={{ once: false }}  className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We've got a pricing plan
            <br />
            that's perfect for you
          </h1>
          <p className="text-gray-500 text-lg mb-8">Cost-Effective, Full Service, Fully Secure</p>
          <p className="text-gray-700 font-medium">This pricing information is for owners only.</p>
        </motion.div>

      <motion.div  initial={slideUp.initial}
              whileInView={slideUp.animate}
              transition={slideUp.transition}
              viewport={{ once: false }} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative min-h-[700px] flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-500 shadow-2xl scale-105 transform"
                  : "bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              } rounded-2xl `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-white text-blue-600 px-6 py-2 font-semibold text-sm rounded-full shadow-lg">
                    Popular
                  </Badge>
                </div>
              )}

              <CardHeader className=" pb-4 pt-12">
                <div
                  className={`pl-4 text-xl font-bold  uppercase mb-2 ${
                    plan.popular ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {plan.name}
                </div>
                <div className="pl-4 mb-2">
                  <span className="text-4xl font-bold">{plan.title}</span>
                </div>
                <p className={`pl-4 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <hr className="opacity-70"/>
              </CardHeader>

              <CardContent className="px-8 flex-grow">
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check
                        className={`w-6 h-6 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-green-500"}`}
                      />
                      <span
                        className={`text-base leading-relaxed ${
                          feature.strikethrough
                            ? plan.popular
                              ? "line-through text-blue-200 opacity-75"
                              : "line-through text-gray-400"
                            : plan.popular
                              ? "text-white"
                              : "text-gray-700"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-8 pb-8 pt-6">
                <Button
                  className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-200 ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                      : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Billing Summary</DialogTitle>
            </DialogHeader>

            {selectedPlan && selectedPlan.price && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Amount</span>
                    <span className="font-medium">₹{selectedPlan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-medium">₹{calculateBilling(selectedPlan.price).gst}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee</span>
                    <span className="font-medium">₹{calculateBilling(selectedPlan.price).platformFee}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{calculateBilling(selectedPlan.price).total}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="lg">
                    Start Using {selectedPlan.name}
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-500 hover:text-gray-700"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {selectedPlan && !selectedPlan.price && (
              <div className="space-y-4">
                <p className="text-gray-600 text-center py-4">
                  You're about to start with the Free plan. No payment required!
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="lg">
                    Start for Free
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-500 hover:text-gray-700"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
