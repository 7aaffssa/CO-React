import React from 'react';

function Card_inline() {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '300px',
        margin: '50px auto',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Bienvenue !</h2>

      <input
        type="text"
        placeholder="Entrez votre nom"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #aaa',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }}
      />

      <button 
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Envoyer
      </button>
    </div>
  );
}

export default Card_inline;