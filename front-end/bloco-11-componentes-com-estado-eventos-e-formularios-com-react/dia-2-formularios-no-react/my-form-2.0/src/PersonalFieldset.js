import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalFieldset extends Component {
render() {
  const { nameValue, emailValue, handleChange, ageValue } = this.props;
   return (
    <fieldset>
      <legend>Dados Pessoais:</legend>
        <form>
            <label htmlFor="name">
                Nome:
                <input 
                id="name"
                type="text" 
                name="name"
                onChange={ handleChange }
                value={ nameValue }
                />
            </label>
            <br></br>
            <label htmlFor="email">
                E-mail:
                <input 
                id="email"
                type="text" 
                name="email"
                onChange={ handleChange }
                value={ emailValue }
                />
            </label>
            <br></br>
            <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              onChange={ handleChange }
              value={ ageValue }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
        </form>     
    </fieldset>
  );
}
}

PersonalFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
};

export default PersonalFieldset;