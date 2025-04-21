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
    <div style={containerStyle}>
      <h2 style={titleStyle}>🚗 Liste des voitures disponibles</h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Marque</th>
              <th style={thStyle}>Modèle</th>
              <th style={thStyle}>Carburant</th>
              <th style={thStyle}>Prix de base</th>
              <th style={thStyle}>Détails</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
                <td style={tdStyle}>{car.marque}</td>
                <td style={tdStyle}>{car.modele}</td>
                <td style={tdStyle}>{car.carburant}</td>
                <td style={tdStyle}>{car.prix.toLocaleString()} DH</td>
                <td style={tdStyle}>
                  <Link to={`/car/${car.marque}-${car.modele.replace(/\s+/g, '')}`}>
                    <button style={buttonStyle}>Détails</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '2rem',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#f7f9fa',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '1.8rem',
  marginBottom: '1.5rem',
  color: '#34495e',
  borderBottom: '3px solid #3498db',
  paddingBottom: '0.5rem',
  maxWidth: '600px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: '700px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
  overflow: 'hidden',
};

const thStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  textAlign: 'left',
  padding: '12px',
};

const tdStyle = {
  padding: '12px',
  textAlign: 'left',
  color: '#2c3e50',
};

const evenRowStyle = {
  backgroundColor: '#ecf0f1',
};

const oddRowStyle = {
  backgroundColor: '#ffffff',
};

const buttonStyle = {
  backgroundColor: '#27ae60',
  color: '#fff',
  border: 'none',
  padding: '8px 14px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#219150',
};

export default CarList;
