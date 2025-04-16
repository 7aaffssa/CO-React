import React from 'react';

function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Bienvenue !</h2>;
  } else {
    return <h2>Veuillez vous inscrire.</h2>;
  }
}

export default Message;
