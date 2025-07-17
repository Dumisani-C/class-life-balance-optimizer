import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import { FeaturesSection } from "./components/FeaturesSection";
import { SmartSchedulerForm } from "./components/SmartSchedulerForm";

function App() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-x-hidden">

      {/* ✨ Floating Stars */}
      <div className="absolute inset-0 z-0 animate-stars pointer-events-none" />

      {/* 🫧 Morphing Gradient Blobs */}
      <div className="morphing-blob absolute w-[500px] h-[500px] bg-purple-500 opacity-30 top-[-100px] left-[-100px] blur-3xl rounded-full animate-blob animation-delay-2000" />
      <div className="morphing-blob absolute w-[400px] h-[400px] bg-blue-500 opacity-20 bottom-[200px] right-[-120px] blur-3xl rounded-full animate-blob" />
      <div className="morphing-blob absolute w-[350px] h-[350px] bg-pink-500 opacity-30 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full animate-blob animation-delay-4000" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />

        <section className="scroll-section backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mx-auto my-10 max-w-6xl p-6">
          <HeroSection />
        </section>

        <section className="scroll-section backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mx-auto my-10 max-w-6xl p-6">
          <FeaturesSection />
        </section>

        <section className="scroll-section backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mx-auto my-10 max-w-6xl p-6">
          <SmartSchedulerForm />
        </section>

        <section className="scroll-section backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mx-auto my-10 max-w-6xl p-6">
          <AnalyticsDashboard />
        </section>

        <section className="scroll-section backdrop-blur-md bg-white/5 border border-white/10 rounded-xl mx-auto my-10 max-w-6xl p-6">
          <FeaturesSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default App;
