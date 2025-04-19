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
    const car = cars.find(
      c => `${c.marque}-${c.modele}` === e.target.value
    );
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
    <div style={{ padding: 20, fontFamily: 'Arial', maxWidth: 600, margin: 'auto' }}>
      <h2 style={{ color: '#333' }}>Simulation d'achat</h2>

      <label>Choisir une voiture :</label>
      <select onChange={handleChange} style={{ marginBottom: 10, display: 'block', padding: 5 }}>
        <option value="">-- Sélectionnez --</option>
        {cars.map(car => (
          <option key={`${car.marque}-${car.modele}`} value={`${car.marque}-${car.modele}`}>
            {car.marque} {car.modele}
          </option>
        ))}
      </select>

      {selectedCar && (
        <>
          <label>Modèle :</label>
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} style={{ display: 'block', padding: 5 }}>
            {cars.map(car => (
              <option key={car.modele} value={car.modele}>{car.modele}</option>
            ))}
          </select>

          <label>Type de carburant :</label>
          <select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} style={{ display: 'block', padding: 5 }}>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybride">Hybride</option>
            <option value="Électrique">Électrique</option>
          </select>

          <div style={{ marginTop: 10 }}>
            <label><input type="checkbox" name="toit" onChange={handleOptionChange} /> Toit ouvrant</label><br />
            <label><input type="checkbox" name="gps" onChange={handleOptionChange} /> GPS</label><br />
            <label><input type="checkbox" name="led" onChange={handleOptionChange} /> Phares LED</label><br />
            <label><input type="checkbox" name="camera" onChange={handleOptionChange} /> Caméra de recul</label>
          </div>

          {result && (
            <div style={{ marginTop: 20, backgroundColor: '#f9f9f9', padding: 15, borderRadius: 8, boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <p>Prix de base : {result.base.toLocaleString()} DH</p>
              <p>Frais options : {result.optionsCost.toLocaleString()} DH</p>
              <p>Supplément modèle : {result.modelCost.toLocaleString()} DH</p>
              <p>Supplément carburant : {result.fuelCost.toLocaleString()} DH</p>
              <p>Taxe (10%) : {result.tax.toLocaleString()} DH</p>
              <p>Immatriculation : {result.immatriculation.toLocaleString()} DH</p>
              <strong>Total : {result.total.toLocaleString()} DH</strong>
            </div>
          )}

          <div style={{ marginTop: 15 }}>
            <button onClick={enregistrer} style={{ marginRight: 10, padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: 5 }}>
              Enregistrer simulation
            </button>
            <button onClick={() => navigate(-1)} style={{ padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: 5 }}>
              Retour
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CarSimulation;
