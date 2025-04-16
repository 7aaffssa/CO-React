import React, { useState } from 'react';

function Formulaire() {
  const [nom, setNom] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Nom saisi: ${nom}`); 
  };

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={handleChange} 
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Formulaire;
