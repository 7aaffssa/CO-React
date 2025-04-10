import React, { useState } from 'react';

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  return (
    <div>
      <form>
        <label>
          Nom:
          <input
            type="text" name="nom" value={formData.nom} onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email" name="email" value={formData.email} onChange={handleChange} 
          />
        </label>
      </form>c

      <h3>Valeurs saisies:</h3>
      <p>Nom: {formData.nom}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default Formulaire;
