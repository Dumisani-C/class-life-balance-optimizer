import React from "react";
import { motion } from "framer-motion";
import { HeroParticles } from "./HeroParticles";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
      <HeroParticles />

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
      >
        We help students find{" "}
        <motion.span
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(147,51,234,0.6)]"
        >
          balance
        </motion.span>{" "}
        in life.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl text-lg text-gray-300"
      >
        Smart scheduling, burnout detection, and data-driven insights to help you thrive — not just survive.
      </motion.p>
    </section>
  );
};
