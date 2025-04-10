import React, { useState } from 'react';

function ValidationChamp() {
  const [texte, setTexte] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (texte.trim() === '') {
      setMessage('Le champ est vide.');
    } else {
      setMessage('Le champ est rempli.');
    }
  };

  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <div>
      <label> 
        Saisissez quelque chose:
        <input
          type="text" value={texte} onChange={handleChange} 
        />
      </label>
      <button onClick={handleClick}>Valider</button>
      <p>{message}</p> 
    </div>
  );
}

export default ValidationChamp;
