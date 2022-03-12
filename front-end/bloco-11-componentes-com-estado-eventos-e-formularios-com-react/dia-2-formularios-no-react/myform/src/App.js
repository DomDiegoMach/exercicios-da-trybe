import React from 'react';
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';
import './App.css';

class App extends React.Component{
constructor(){
  super();
  this.state = {
    name: '',
    email: '',
    age: '',
    anecdote: '',
    terms: false,
    formularioComErros: true,
  };
  this.handleChange = this.handleChange.bind(this);  
} 

handleError() {
  const { name, email, age, anecdote, terms } = this.state;

  const errorCases = [
    !name.length,
    !email.match(/^\S+@\S+$/i),
    !age.length,
    !anecdote.length,
    !terms,
  ];
  const formularioPreenchido = errorCases.every((error) => error !== true);

  this.setState({
    formularioComErros: !formularioPreenchido,
  })
};

/*
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
*/

handleChange({ target }) {
  const { name } = target;
  const value = (target.type === 'checkbox') ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, () => { this.handleError(); });
}

render(){
  const { name, email, age, anecdote, terms, formularioComErros  } = this.state;
  // const { handleChange } = this;//nada - fora
return (
    <div className="App">
      <header>
        <h1> Formulário - Prática</h1>
        <h2>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h2>
      </header>
    <form>
     <PersonalFieldset 
     nameValue={ name }
     emailValue={ email} 
     ageValue={ age }
     handleChange={ this.handleChange }
     />
     <br></br>
     <DataFieldset 
     anecdoteValue={ anecdote }
     handleChange={ this.handleChange }
     />
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
        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
    </div>
  );
 }
}
export default App;

/**
 import React, { Component } from 'react';
  import DataFieldset from './DataFieldset';
  import PersonalFieldset from './PersonalFieldset';

  class Form extends Component {
    constructor() {
      super();

      this.state = {
        name: '',
        email: '',
        age: '',
        anecdote: '',
        terms: false,
        formularioComErros: true,
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleError() {
      const { name, email, age, anecdote, terms } = this.state;

      const errorCases = [
        !name.length,
        !email.match(/^\S+@\S+$/i),
        !age.length,
        !anecdote.length,
        !terms,
      ];

      const formularioPreenchido = errorCases.every((error) => error !== true);

      this.setState({
        formularioComErros: !formularioPreenchido,
      });
    }

    handleChange({ target }) {
      const { name } = target;
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, () => { this.handleError(); });
    }

    render() {
      const { name, email, age, anecdote, terms, formularioComErros } = this.state;

      return (
        <div>
          <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
          <form className="form">
            <PersonalFieldset
              nameValue={ name }
              emailValue={ email }
              ageValue={ age }
              handleChange={ this.handleChange }
            />

            <DataFieldset anecdoteValue={ anecdote } handleChange={ this.handleChange } />

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
          </form>
          { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
        </div>
      );
    }
  }

  export default Form;
 */