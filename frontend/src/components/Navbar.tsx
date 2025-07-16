import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent text-white">
      <h1 className="text-2xl font-bold">Class-Life Balance Optimizer</h1>
      <div className="space-x-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#scheduler" className="hover:underline">Scheduler</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
};
