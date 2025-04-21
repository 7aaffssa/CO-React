import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const carDetails = {
  'Opel-Astra': {
    marque: 'Opel',
    modele: 'Astra',
    carburant: 'Essence',
    prix: 240000,
    fiche: '2023 - Essence - Boîte manuelle',
  },
  'Audi-A3Sportback': {
    marque: 'Audi',
    modele: 'A3 Sportback',
    carburant: 'Diesel',
    prix: 300000,
    fiche: '2024 - Diesel - Boîte auto',
  },
  'BMW-Serie1': {
    marque: 'BMW',
    modele: 'Serie 1',
    carburant: 'Diesel',
    prix: 320000,
    fiche: '2024 - Diesel - Boîte auto',
  },
  'Mercedes-ClasseA': {
    marque: 'Mercedes',
    modele: 'Classe A',
    carburant: 'Essence',
    prix: 340000,
    fiche: '2024 - Essence - Boîte auto',
  },
  'Toyota-Corolla': {
    marque: 'Toyota',
    modele: 'Corolla',
    carburant: 'Hybride',
    prix: 280000,
    fiche: '2024 - Hybride - Boîte auto',
  },
};

function CarDetail() {
  const { id } = useParams();
  const car = carDetails[id];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (car) {
      let additionalCost = 0;
      switch (car.carburant) {
        case 'Diesel':
          additionalCost = 10000;
          break;
        case 'Hybride':
          additionalCost = 15000;
          break;
        case 'Essence':
          additionalCost = 5000;
          break;
        default:
          break;
      }
      setTotal(car.prix + additionalCost);
    }
  }, [car]);

  if (!car) {
    return <div style={{ padding: '2rem', fontFamily: 'Arial' }}>Voiture non trouvée.</div>;
  }

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid #eee'
      }}>
        <h2 style={{
          marginBottom: '1.5rem',
          color: '#2c3e50',
          fontSize: '1.8rem',
          borderBottom: '1px solid #ddd',
          paddingBottom: '0.5rem'
        }}>
          Détail de la voiture
        </h2>

        <p><strong> Marque:</strong> {car.marque}</p>
        <p><strong> Modèle:</strong> {car.modele}</p>
        <p><strong> Carburant:</strong> {car.carburant}</p>
        <p><strong> Prix de base:</strong> {car.prix.toLocaleString()} DH</p>
        <p><strong> Fiche technique:</strong> {car.fiche}</p>

        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#f4f8f6',
          borderRadius: '8px',
          borderLeft: '5px solid #27ae60',
        }}>
          <p style={{
            margin: 0,
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#27ae60'
          }}>
            Prix total estimé : {total.toLocaleString()} DH
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
