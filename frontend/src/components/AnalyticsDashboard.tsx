import React from "react";
import { motion } from "framer-motion";

const AnalyticsDashboard = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          📊 Your Weekly Insights
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          See how you're balancing class and work this week.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Hours Worked</h3>
            <p className="text-3xl font-bold text-green-400">15.5h</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Classes Attended</h3>
            <p className="text-3xl font-bold text-blue-400">10</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Free Time</h3>
            <p className="text-3xl font-bold text-yellow-400">12.2h</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
