import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some styles for the Navbar

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/car-list">Liste de Voitures</Link>
                </li>
                <li>
                    <Link to="/simulation">Simulation</Link>
                </li>
                <li>
                    <Link to="/simulation-history">Historique des Simulations</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;