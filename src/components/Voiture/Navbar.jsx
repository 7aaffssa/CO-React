// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-around'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil🏠</Link>
      <Link to="/list" style={{ color: 'white', textDecoration: 'none' }}>Liste des Voitures📋</Link>
      <Link to="/simulation" style={{ color: 'white', textDecoration: 'none' }}>Simulation🛠️</Link>
      <Link to="/history" style={{ color: 'white', textDecoration: 'none' }}>Historique🕒</Link>
    </nav>
  );
};

export default Navbar;
