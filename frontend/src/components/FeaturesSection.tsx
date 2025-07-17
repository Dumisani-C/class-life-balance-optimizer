import React from "react";
import { motion } from "framer-motion";
import { CalendarClock, HeartPulse, BarChart3 } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <CalendarClock size={36} className="text-indigo-400" />,
      title: "Smart Scheduling",
      description:
        "Plan your work-study and classes with AI-powered time block recommendations tailored to your energy levels.",
    },
    {
      icon: <HeartPulse size={36} className="text-pink-400" />,
      title: "Burnout Detection",
      description:
        "Detect signs of overload early with personalized warnings to protect your mental and physical health.",
    },
    {
      icon: <BarChart3 size={36} className="text-green-400" />,
      title: "Data Insights",
      description:
        "Visualize how you're spending your time so you can make adjustments and build a balanced routine.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6">
      <motion.h3
        className="text-4xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🌟 Key Features
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
