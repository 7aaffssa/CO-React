import React from 'react';
import { useSelector } from 'react-redux';

function SimulationHistory() {
  const simulations = useSelector((state) => state.simulations);

  return (
    <div>
      <h2>Historique des simulations</h2>
      <ul>
        {simulations.map((sim, i) => (
          <li key={i}>
            {sim.marque} {sim.modele} - Total: {sim.total.toFixed(0)} DH
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimulationHistory;
