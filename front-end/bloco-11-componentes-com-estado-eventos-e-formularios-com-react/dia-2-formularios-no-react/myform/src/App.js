import React from 'react';
import './App.css';

/**
1 - Crie um formulário com um campo select , 
dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, 
ou seja, elementos do formulário controlados pelo Estado
 */

class App extends React.Component{
constructor(){
  super();
  this.state = {
    // estadoFavorito: '',
    name: '',
    email: '',
    age: '',
    anecdote: '',
    terms: false,
  };
  this.handleChange = this.handleChange.bind(this);  
} 

handleChange({ target } ) {
//  const { name, value } = target;
const { name } = target;
// const { value } = (target.type === 'checkbox') ? target.checked : target.value;
// No caso loga acima, o destructuring vai dar merda. Ainda não sei o porquê.
const value = (target.type === 'checkbox') ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
};

render(){
  const { name, email, age, anecdote, terms  } = this.state;
return (
    <div className="App">
      <header>
        <h1> Formulário - Prática</h1>
        <h2>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h2>
      </header>
      <main>
      <form>
      <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange = { this.handleChange }
                value = { name }
              />
            </label>
        <br></br>
        <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
        <br></br>
        <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                onChange={this.handleChange}
                value={ age }
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
        </label>
        <br></br>
            <label htmlFor="anecdote">
              Anedota:
              <textarea 
              id="anecdote" 
              name="anecdote"
              onChange={ this.handleChange }
              value={ anecdote} 
              />
            </label>
            <br></br>
            <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                onChange={ this.handleChange }
                value={ terms }
              />
              Concordo com termos e acordos
            </label>
            <br></br>
            <input type="file" />
        </form>
      </main>
    </div>
  );
 }
}
export default App;

/**
  import React, { Component } from 'react';

  class Form extends Component {
    constructor() {
      super();

      this.state = {
        email: '',
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
        email: event.target.value,
      });
    }

    render() {
      const { email } = this.state;

      return (
        <div>
          <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
          <form className="form">

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>

            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>

            <label htmlFor="anecdote">
              Anedota:
              <textarea id="anecdote" name="anecdote" />
            </label>

          </form>
        </div>
      );
    }
  }

  export default Form;
 */