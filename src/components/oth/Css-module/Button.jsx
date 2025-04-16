import React from 'react';
import './Button.css';


function Button() {
  return (
    <div className="card">
      <h2 className="title">Bienvenue !</h2>

      <p className="paragraph">
         Button|CSS Module
      </p>

      <input
        type="text"
        placeholder="Entrez votre nom"
        className="input"
      />

      <button className="button">Envoyer</button>
    </div>
  );
}

export default Button;