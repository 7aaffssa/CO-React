import React from 'react';

function WelcomeMessage({ isLoggedIn }) {
  if (!isLoggedIn) return null; // Ne rend rien si l'utilisateur n'est pas connecté

  return <h2>Bienvenue !</h2>;
}

export default WelcomeMessage;