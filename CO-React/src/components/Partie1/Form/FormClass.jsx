
import React, { Component } from 'react';

class Forme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ nom: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.nom.trim()) {
      this.setState({ message: `Bienvenue, ${this.state.nom}` });
      this.setState({ nom: '' }); 
    }
  };

  render() {
    return (
      <div>
        <h2>Formulaire Class</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="nom" value={this.state.nom} onChange={this.handleChange} placeholder="Votre nom" />
          <button type="submit">Valider</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default Forme;
