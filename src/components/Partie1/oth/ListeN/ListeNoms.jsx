import React from 'react';

const ListeNoms = ({ noms }) => {
  return (
    <div>
      <h1>Liste des Noms</h1>
      <ul>
        {noms.map((nom, index) => (
          <li key={index}>{nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeNoms;