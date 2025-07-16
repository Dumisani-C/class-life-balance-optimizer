import React from "react";

export const HeroSection = () => {
  return (
    <section className="text-center py-32 text-white">
      <h2 className="text-4xl md:text-6xl font-bold">
        Balance Your <span className="text-indigo-400">Class</span> and{" "}
        <span className="text-teal-300">Life</span> with Confidence
      </h2>
      <p className="mt-6 text-lg md:text-xl">
        Built to help Berea students thrive in school, work, and well-being.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
          Try It Now
        </button>
        <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>
    </section>
  );
};
