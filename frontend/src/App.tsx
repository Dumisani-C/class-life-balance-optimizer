import React, { useEffect, useState } from "react";
import { getGeneratedPlan } from "./api";

interface Plan {
  day: string;
  tasks: string[];
}

const App = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchPlan = async () => {
      try {
        const data = await getGeneratedPlan();
        console.log("✅ Suggestion:", data.suggestion);

        const suggestion: string = data.suggestion;

        if (!suggestion || suggestion.trim() === "") {
          console.warn("⚠️ Empty suggestion received.");
          return;
        }

        const parsedPlan: Plan[] = suggestion
          .split("\n")
          .filter(line => line.includes(":"))
          .map(line => {
            const [day, tasksStr] = line.split(":");
            const tasks = tasksStr
              ? tasksStr.split(",").map(task => task.trim())
              : [];
            return { day: day.trim(), tasks };
          });

        if (isMounted) {
          setPlans(parsedPlan);
        }
      } catch (err) {
        console.error("❌ Failed to fetch:", err);
      }
    };

    fetchPlan();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Generated Plans</h1>
      {plans.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {plans.map((plan, index) => (
            <li key={index}>
              <strong>{plan.day}</strong>
              <ul>
                {plan.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
