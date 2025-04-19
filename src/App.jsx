// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Voiture/Home';
import CarList from './components/Voiture/CarList';
import CarSimulation from './components/Voiture/CarSimulation';
import SimulationHistory from './components/Voiture/SimulationHistory';
import CarDetail from './components/Voiture/CarDetail';
import Navbar from './components/Voiture/Navbar';

function App() {
  return (
    <Router>
      <Navbar>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/list">Liste de Voitures</Link></li>
          <li><Link to="/simulate">Simulation</Link></li>
          <li><Link to="/history">Historique</Link></li>
          
        </ul>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<CarList />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/simulation" element={<CarSimulation />} />
        <Route path="/history" element={<SimulationHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
