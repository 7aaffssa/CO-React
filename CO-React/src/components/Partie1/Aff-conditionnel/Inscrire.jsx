import React from 'react';

function SignUpMessage({ isLoggedIn }) {
  if (isLoggedIn) return null; 

  return <h2>Veuillez vous inscrire.</h2>;
}

export default SignUpMessage;