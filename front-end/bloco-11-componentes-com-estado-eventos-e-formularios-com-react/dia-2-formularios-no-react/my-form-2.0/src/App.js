import React from 'react';
import PersonalFieldset from './PersonalFieldset';
import DataFieldset from './DataFieldset.js';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    name: '',
    email: '',
    age: '',
    anedocte: '',
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange({ target }) {
  const { name } = target;
  const value = (target.type === 'checkbox') ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
}

render() {
const { name, email, age, anedocte } = this.state;
  return (
    <div className="App">
         <h1>
          Formulário 2.0
        </h1>
        <PersonalFieldset 
        nameValue = { name }
        emailValue = { email }
        ageValue = { age }
        handleChange = {this.handleChange}
        />
        <br></br>
        <DataFieldset 
        anedocteValue = { anedocte }
        handleChange = { this.handleChange }
        />
    </div>
  );
}
}
export default App;
