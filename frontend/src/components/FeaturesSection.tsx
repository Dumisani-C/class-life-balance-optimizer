import React from "react";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
        <div>
          <h4 className="text-xl font-semibold">Smart Scheduling</h4>
          <p>Plan your work-study and classes with AI-powered suggestions.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Burnout Detection</h4>
          <p>Analyze your load and receive alerts to avoid overwork.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Data Insights</h4>
          <p>View reports on how you're spending your time to adjust.</p>
        </div>
      </div>
    </section>
  );
};
