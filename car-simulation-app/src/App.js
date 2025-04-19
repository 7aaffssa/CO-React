import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import CarSimulation from './components/CarSimulation';
import SimulationHistory from './components/SimulationHistory';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CarList} />
          <Route path="/car/:id" component={CarDetail} />
          <Route path="/simulation" component={CarSimulation} />
          <Route path="/history" component={SimulationHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;