import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10 px-6 mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Class-Life Balance Optimizer</h3>
          <p className="text-sm text-gray-400">
            Helping Berea students achieve academic success without burning out.
          </p>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} ClassLifeBalance. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
