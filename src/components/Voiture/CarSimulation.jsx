import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSimulation } from './redux/simulationSlice';
import { useNavigate } from 'react-router-dom';

const cars = [
  { marque: 'Opel', modele: 'Astra', carburant: 'Essence', prix: 240000 },
  { marque: 'Audi', modele: 'A3 Sportback', carburant: 'Diesel', prix: 300000 },
  { marque: 'BMW', modele: 'Serie 1', carburant: 'Diesel', prix: 320000 },
  { marque: 'Mercedes', modele: 'Classe A', carburant: 'Essence', prix: 340000 },
  { marque: 'Toyota', modele: 'Corolla', carburant: 'Hybride', prix: 280000 },
];

const options = {
  toit: 10000,
  gps: 5000,
  led: 3000,
  camera: 2000,
};

const modelAdjustments = {
  'A3 Sportback': 15000,
  'Astra': 8000,
  '208': 5000,
};

const fuelAdjustments = {
  'Essence': 0,
  'Diesel': 5000,
  'Hybride': 10000,
  'Électrique': 15000,
};

function CarSimulation() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const car = cars.find(c => `${c.marque}-${c.modele}` === e.target.value);
    setSelectedCar(car);
    setSelectedModel(car.modele);
    setSelectedFuel(car.carburant);
  };

  const handleOptionChange = (e) => {
    const option = e.target.name;
    setSelectedOptions(prev =>
      e.target.checked ? [...prev, option] : prev.filter(o => o !== option)
    );
  };

  useEffect(() => {
    if (selectedCar) {
      const base = selectedCar.prix;
      const optionsCost = selectedOptions.reduce((sum, key) => sum + options[key], 0);
      const modelCost = modelAdjustments[selectedModel] || 0;
      const fuelCost = fuelAdjustments[selectedFuel] || 0;
      const tax = (base + optionsCost + modelCost + fuelCost) * 0.1;
      const immatriculation = 5000;
      const total = base + optionsCost + modelCost + fuelCost + tax + immatriculation;

      setResult({
        base,
        optionsCost,
        modelCost,
        fuelCost,
        tax,
        immatriculation,
        total,
      });
    }
  }, [selectedCar, selectedOptions, selectedModel, selectedFuel]);

  const enregistrer = () => {
    if (result) {
      dispatch(addSimulation({ ...selectedCar, ...result }));
      alert('Simulation enregistrée !');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🚘 Simulation d'achat de voiture</h2>

      <label style={labelStyle}>Choisir une voiture :</label>
      <select onChange={handleChange} style={selectStyle}>
        <option value="">-- Sélectionnez --</option>
        {cars.map(car => (
          <option key={`${car.marque}-${car.modele}`} value={`${car.marque}-${car.modele}`}>
            {car.marque} {car.modele}
          </option>
        ))}
      </select>

      {selectedCar && (
        <>
          <label style={labelStyle}>Modèle :</label>
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} style={selectStyle}>
            {cars.map(car => (
              <option key={car.modele} value={car.modele}>{car.modele}</option>
            ))}
          </select>

          <label style={labelStyle}>Type de carburant :</label>
          <select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} style={selectStyle}>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybride">Hybride</option>
            <option value="Électrique">Électrique</option>
          </select>

          <div style={{ marginTop: 10 }}>
            <label style={checkboxStyle}><input type="checkbox" name="toit" onChange={handleOptionChange} /> Toit ouvrant</label><br />
            <label style={checkboxStyle}><input type="checkbox" name="gps" onChange={handleOptionChange} /> GPS</label><br />
            <label style={checkboxStyle}><input type="checkbox" name="led" onChange={handleOptionChange} /> Phares LED</label><br />
            <label style={checkboxStyle}><input type="checkbox" name="camera" onChange={handleOptionChange} /> Caméra de recul</label>
          </div>

          {result && (
            <div style={resultBoxStyle}>
              <p> Prix de base : <strong>{result.base.toLocaleString()} DH</strong></p>
              <p> Options : <strong>{result.optionsCost.toLocaleString()} DH</strong></p>
              <p> Supplément modèle : <strong>{result.modelCost.toLocaleString()} DH</strong></p>
              <p> Supplément carburant : <strong>{result.fuelCost.toLocaleString()} DH</strong></p>
              <p> Taxe (10%) : <strong>{result.tax.toLocaleString()} DH</strong></p>
              <p> Immatriculation : <strong>{result.immatriculation.toLocaleString()} DH</strong></p>
              <h3 style={{ color: '#2980b9' }}>💳 Total : {result.total.toLocaleString()} DH</h3>
            </div>
          )}

          <div style={{ marginTop: 15 }}>
            <button onClick={enregistrer} style={saveButtonStyle}>💾 Enregistrer</button>
            <button onClick={() => navigate(-1)} style={backButtonStyle}>🔙 Retour</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CarSimulation;

// 🎨 Styles
const containerStyle = {
  padding: '2rem',
  fontFamily: "'Segoe UI', sans-serif",
  maxWidth: '650px',
  margin: 'auto',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  color: '#2c3e50',
};

const titleStyle = {
  color: '#2c3e50',
  borderBottom: '3px solid #3498db',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
};

const labelStyle = {
  marginTop: '1rem',
  fontWeight: 'bold',
  display: 'block',
};

const selectStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginBottom: '1rem',
};

const checkboxStyle = {
  display: 'block',
  marginTop: '8px',
};

const resultBoxStyle = {
  marginTop: '20px',
  backgroundColor: '#ecf6fd',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #bcdffb',
};

const saveButtonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '6px',
  cursor: 'pointer',
  marginRight: '10px',
};

const backButtonStyle = {
  backgroundColor: '#95a5a6',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '6px',
  cursor: 'pointer',
};
