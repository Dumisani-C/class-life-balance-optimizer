import React, { useState } from "react";

export function SmartSchedulerForm() {
  const [formData, setFormData] = useState({
    classes: "",
    work: "",
    sleep: 8,
    wellness: "15min"
  });

  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate result
    setResult(`Your schedule includes:
• Classes: ${formData.classes}
• Work: ${formData.work}
• Sleep Goal: ${formData.sleep} hrs
• Breaks: ${formData.wellness}`);
  };

  return (
    <section className="py-16 px-4 text-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🎯 Smart Scheduler</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="classes"
          placeholder="Class hours (e.g. Mon-Fri 9am-11am)"
          value={formData.classes}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <input
          type="text"
          name="work"
          placeholder="Work-study hours (e.g. Mon/Wed/Fri 1pm-4pm)"
          value={formData.work}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <input
          type="number"
          name="sleep"
          placeholder="Sleep goal (hours)"
          value={formData.sleep}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <select
          name="wellness"
          value={formData.wellness}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        >
          <option value="15min">Short breaks (15min)</option>
          <option value="30min">Medium breaks (30min)</option>
          <option value="1hr">Long breaks (1hr)</option>
        </select>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded font-bold w-full"
        >
          Generate Schedule
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-900 p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">🗓️ Optimized Schedule:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </section>
  );
}
