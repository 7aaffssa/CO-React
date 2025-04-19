import React from 'react';
import { useSelector } from 'react-redux';

const SimulationHistory = () => {
    const simulations = useSelector(state => state.simulation.history);

    return (
        <div>
            <h2>Historique des Simulations</h2>
            {simulations.length === 0 ? (
                <p>Aucune simulation effectuée.</p>
            ) : (
                <ul>
                    {simulations.map((simulation, index) => (
                        <li key={index}>
                            {`Prix de Base: ${simulation.basePrice} DH, 
                            Frais d'Options: ${simulation.optionsFee} DH, 
                            Taux de Taxe: ${simulation.taxRate * 100}%, 
                            Frais d'Immatriculation: ${simulation.registrationFee} DH, 
                            Prix Total: ${simulation.totalPrice} DH`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SimulationHistory;