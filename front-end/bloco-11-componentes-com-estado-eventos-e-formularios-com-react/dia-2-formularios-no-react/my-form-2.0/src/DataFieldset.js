import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFieldset extends Component {
  render() {
    const { anedocteValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label htmlFor="anedocte">
          Anedota:
          <textarea
            id="anedocte"
            name="anedocte"
            onChange={ handleChange }
            value={ anedocteValue }
          />
          { !anedocteValue.length ? ' -campo vazio- ' : ' -ok- '}
        </label>
        <br></br>
        <input type="file" />
      </fieldset>
    );
  }
}
DataFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  anedocteValue: PropTypes.string.isRequired,
};
export default DataFieldset;