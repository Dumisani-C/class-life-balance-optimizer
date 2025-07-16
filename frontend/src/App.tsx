import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { SmartSchedulerForm } from "./components/SmartSchedulerForm"; // 👈 Add this

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SmartSchedulerForm /> 
    </main>
  );
}

export default App;
