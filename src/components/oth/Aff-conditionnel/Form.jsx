import React, { useState } from 'react';
import WelcomeMessage from './Bienvenue';
import SignUpMessage from './Inscrire';

function Form() {
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

      <WelcomeMessage isLoggedIn={isLoggedIn} />
      <SignUpMessage isLoggedIn={isLoggedIn} />

      {!isLoggedIn && (
        <button onClick={handleLogin} style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}>
          Se connecter
        </button>
      )}
      {isLoggedIn && (
        <button onClick={handleLogout} style={{ margin: '10px', padding: '10px', cursor: 'pointer' }}>
          Se déconnecter
        </button>
      )}
    </div>
  );
}

export default Form;