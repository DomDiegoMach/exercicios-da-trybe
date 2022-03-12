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
    
    email: '',
  };
  this.handleChange = this.handleChange.bind(this);  
} 

/*
handleChange(event) {
  this.setState({
    estadoFavorito: event.target.value,
  });
}
*/
//O Comitado acima é equivalente ao que está aqui
handleChange({ target } ) {
  this.setState({
    // estadoFavorito: target.value,
    email: target.value,
  })
  // console.log(this.state.estadoFavorito.length);
  console.log(this.state.email.length);
};

render(){
  const { email } = this.props;
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
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
        </label>
        <br></br>
            <label htmlFor="anecdote">
              Anedota:
              <textarea id="anecdote" name="anecdote" />
            </label>
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