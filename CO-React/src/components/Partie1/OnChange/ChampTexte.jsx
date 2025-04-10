import React, { useState } from 'react';

function TexteSaisi() {
  const [texte, setTexte] = useState('');

  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <div>
      <label>
        Saisissez du texte:
        <input
          type="text"
          value={texte}
          onChange={handleChange} 
        />
      </label>
      <p>Texte saisi: {texte}</p> 
    </div>
  );
}

export default TexteSaisi;
