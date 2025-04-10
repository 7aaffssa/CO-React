import React, { useState } from 'react';

const FormFunction = () => {
  const [nom, setNom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue, ${nom}!`);
    setNom(''); // Clear the input field
  };

  return (
    <div >
       <h2>Formulaire Function</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Votre nom"
      />
      <button type="submit">Valider</button>
    </form></div>
  );
};

export default FormFunction;
