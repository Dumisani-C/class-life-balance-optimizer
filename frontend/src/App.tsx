import React from "react";
import { Footer } from "./components/Footer";
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
      <FeaturesSection />
      <Footer />
    </main>
  );
}


export default App;
