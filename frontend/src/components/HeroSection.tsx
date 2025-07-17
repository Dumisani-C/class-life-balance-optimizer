import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="py-24 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Class-Life Balance Optimizer</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Helping students stay sane and succeed with smart scheduling, burnout detection, and data insights.
      </p>
    </motion.section>
  );
};
