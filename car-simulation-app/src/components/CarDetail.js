import React from 'react';

const CarDetail = ({ car }) => {
    if (!car) {
        return <div>Select a car to see the details.</div>;
    }

    return (
        <div className="car-detail">
            <h2>{car.brand} {car.model}</h2>
            <p><strong>Type de carburant:</strong> {car.fuelType}</p>
            <h3>Fiche technique:</h3>
            <ul>
                <li><strong>Puissance:</strong> {car.power} ch</li>
                <li><strong>Couple:</strong> {car.torque} Nm</li>
                <li><strong>Consommation:</strong> {car.consumption} L/100km</li>
                <li><strong>Émissions CO2:</strong> {car.co2} g/km</li>
            </ul>
        </div>
    );
};

export default CarDetail;