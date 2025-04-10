// src/components/Counter.jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span data-testid="counter-value">{count}</span>
      <button 
        data-testid="increment-button" 
        onClick={() => setCount(count + 1)}
      >
        Incrémenter
      </button>
    </div>
  );
};

export default Counter;