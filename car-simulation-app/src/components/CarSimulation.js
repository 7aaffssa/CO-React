import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSimulation } from '../redux/actions/simulationActions';

const CarSimulation = () => {
    const [basePrice, setBasePrice] = useState(0);
    const [optionsCost, setOptionsCost] = useState(0);
    const [taxRate, setTaxRate] = useState(0);
    const [registrationFee] = useState(5000);
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        const total = (basePrice + optionsCost) * (1 + taxRate) + registrationFee;
        setTotalPrice(total);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const simulationData = {
            basePrice,
            optionsCost,
            taxRate,
            registrationFee,
            totalPrice
        };
        dispatch(addSimulation(simulationData));
    };

    return (
        <div>
            <h2>Car Simulation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Base Price (DH): </label>
                    <input type="number" value={basePrice} onChange={(e) => setBasePrice(Number(e.target.value))} />
                </div>
                <div>
                    <label>Options Cost (DH): </label>
                    <input type="number" value={optionsCost} onChange={(e) => setOptionsCost(Number(e.target.value))} />
                </div>
                <div>
                    <label>Tax Rate (e.g., 0.10 for 10%): </label>
                    <input type="number" step="0.01" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
                </div>
                <button type="button" onClick={calculateTotalPrice}>Calculate Total Price</button>
                <div>
                    <h3>Total Price: {totalPrice} DH</h3>
                </div>
                <button type="submit">Save Simulation</button>
            </form>
        </div>
    );
};

export default CarSimulation;