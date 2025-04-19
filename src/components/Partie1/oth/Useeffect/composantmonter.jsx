import React, { useEffect} from 'react';

const ComponentMonter = () => {

  useEffect(() => {
    console.log('Le composant est monté !');
  }, []); 

  return (
    <div>
    </div>
  );
};

export default ComponentMonter;