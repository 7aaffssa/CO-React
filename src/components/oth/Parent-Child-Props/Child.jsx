import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>Composant Enfant</h2>
      <p>{props.message}</p> 
    </div>
  );
}

export default Child;
