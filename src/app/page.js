'use client';

import { motion } from 'framer-motion';
import CustomersReview from '@/components/CustomersReview';
import HeroSection from '@/components/HeroSection';
import PropertiesList from '@/components/PropertiesList';
import PropertyBanner from '@/components/PropertyBanner';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import {
  slideUp,
  slideLeft,
  slideRight,
  scaleFade,
  fadeUpSoft,
} from '@/utils/motionVariants';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 space-y-16">
      {/* HeroSection - Slide Up */}
      <motion.div
        initial={slideUp.initial}
        whileInView={slideUp.animate}
        transition={slideUp.transition}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      {/* PropertiesList - Scale + Fade */}
      <motion.div
        initial={scaleFade.initial}
        whileInView={scaleFade.animate}
        transition={scaleFade.transition}
        viewport={{ once: true }}
      >
        <PropertiesList />
      </motion.div>

      {/* WhyChooseUsSection - Slide Left */}
      <motion.div
        initial={slideLeft.initial}
        whileInView={slideLeft.animate}
        transition={slideLeft.transition}
        viewport={{ once: true }}
      >
        <WhyChooseUsSection />
      </motion.div>

      {/* CustomersReview - Slide Right */}
      <motion.div
        initial={scaleFade.initial}
            whileInView={scaleFade.animate}
            transition={scaleFade.transition}
            viewport={{ once: true }}
      >
        <CustomersReview />
      </motion.div>

      {/* PropertyBanner - Fade Up Soft */}
      <motion.div
        initial={fadeUpSoft.initial}
        whileInView={fadeUpSoft.animate}
        transition={fadeUpSoft.transition}
        viewport={{ once: true }}
      >
        <PropertyBanner />
      </motion.div>
    </div>
  );
}
