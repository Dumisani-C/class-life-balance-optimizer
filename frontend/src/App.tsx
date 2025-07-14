import { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
  api.get('/plans/')
    .then((res) => {
      console.log('Fetched plans:', res.data);
      setPlans(res.data);
    })
    .catch((err) => {
      console.error('Failed to fetch plans:', err);
    });
}, []);


  return (
    <div>
      <h1>Generated Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>{JSON.stringify(plan)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
