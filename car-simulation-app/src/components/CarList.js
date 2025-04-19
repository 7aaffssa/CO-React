import React from 'react';

const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', fuelType: 'Petrol' },
    { id: 2, brand: 'Honda', model: 'Civic', fuelType: 'Petrol' },
    { id: 3, brand: 'Tesla', model: 'Model 3', fuelType: 'Electric' },
    { id: 4, brand: 'Ford', model: 'Focus', fuelType: 'Diesel' },
];

const CarList = () => {
    return (
        <div>
            <h2>Available Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.brand} {car.model} - {car.fuelType}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;