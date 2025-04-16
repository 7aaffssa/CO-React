import React, { useState } from "react";

function CompteurFunction() {
  const [compteur, setCompteur] = useState(0);

  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  const decrementer = () => {
    setCompteur(compteur - 1);
  };

  return (
    <div>
      <h2>FUNCTION : {compteur}</h2>
      <button onClick={incrementer}>Incrémenter</button>
      <button onClick={decrementer}>decrementer</button>
    </div>
  )
}

export default CompteurFunction;
