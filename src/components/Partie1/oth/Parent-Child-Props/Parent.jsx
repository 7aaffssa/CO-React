import React from 'react';
import Child from './Child';
function Parent() {
  const message = "Bonjour, je suis ton parent"; // Message à passer à l'enfant

  return (
    <div>
      <h1>Composant Parent</h1>
      <Child message={message} /> 
    </div>
  );
}

export default Parent;
