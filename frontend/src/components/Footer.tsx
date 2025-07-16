import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
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
    </footer>
  );
}
