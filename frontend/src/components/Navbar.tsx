import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent text-black dark:text-white">
      <h1 className="text-2xl font-bold">Class-Life Balance Optimizer</h1>
      
      <div className="flex items-center gap-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#scheduler" className="hover:underline">Scheduler</a>
        <a href="#contact" className="hover:underline">Contact</a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};


