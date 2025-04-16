import React from 'react';
import  './Card.css';

function Card() {
  return (
    <div className="card">
      <h2 className="title">Bienvenue !</h2>
      <p className="paragraph">Card|CSS Modules.</p>
      <input type="text" placeholder="Entrez votre nom" className="input" />
      <button className="button">Envoyer</button>
    </div>
  );
}

export default Card;