import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { marque: 'Opel', modele: 'Astra', carburant: 'Essence', prix: 240000 },
  { marque: 'Audi', modele: 'A3 Sportback', carburant: 'Diesel', prix: 300000 },
  { marque: 'BMW', modele: 'Serie 1', carburant: 'Diesel', prix: 320000 },
  { marque: 'Mercedes', modele: 'Classe A', carburant: 'Essence', prix: 340000 },
  { marque: 'Toyota', modele: 'Corolla', carburant: 'Hybride', prix: 280000 },
];

function CarList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste des voitures disponibles :</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Type du carburant</th>
            <th>Prix de base</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.marque}</td>
              <td>{car.modele}</td>
              <td>{car.carburant}</td>
              <td>{car.prix.toLocaleString()} DH</td>
              <td>
                <Link to={`/car/${car.marque}-${car.modele.replace(/\s+/g, '')}`}>
                  <button>Détails</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  marginTop: '20px',
  border: '1px solid #ddd',
};

export default CarList;
