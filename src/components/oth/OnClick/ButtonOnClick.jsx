import React from 'react';

function ButtonComponent() {
  const handleClick = () => {
    alert("Bouton cliqué !");
  };

  return (
    <button onClick={handleClick}>Cliquez-moi</button>
  );
}

export default ButtonComponent;
