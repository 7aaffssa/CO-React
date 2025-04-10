import React, { useState } from 'react';
import Message from './MessageH';

function FormH() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Affichage du message conditionnel */}
      <Message isLoggedIn={isLoggedIn} />

      {/* Boutons pour simuler la connexion/déconnexion */}
      {!isLoggedIn && (
        <button onClick={handleLogin} style={{ margin: '10px' }}>
          Se connecter
        </button>
      )}
      {isLoggedIn && (
        <button onClick={handleLogout} style={{ margin: '10px' }}>
          Se déconnecter
        </button>
      )}
    </div>
  );
}

export default FormH;