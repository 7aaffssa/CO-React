import React, { Component } from "react";

class CompteurClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
    };
  }

  incrementer = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };
  decrementer = () => {
    this.setState({ compteur: this.state.compteur - 1 });
  };

  render() {
    return (
      <div>
        <h2>CLASS : {this.state.compteur}</h2>
        <button onClick={this.incrementer}>Incrémenter</button>
        
        <button onClick={this.decrementer}>decrémenter</button>
      </div>
    );
  }
}

export default CompteurClass;
