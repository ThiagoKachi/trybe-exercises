import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = props.pokemonsInfo
  return (
    <div className="pokemon-list">
      <div className="poke-infos">
        <h3>{ name }</h3>
        <p>{ type }</p>
        <p>averageWeight: {value} { measurementUnit }</p>
      </div>
      <div className="poke-image">
        <a href={ moreInfo } rel="noreferrer" target="_blank">
          <img src={ image } alt={ name } />
        </a>
      </div>
    </div>
  )
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
  moreInfo: PropTypes.string,
}

export default Pokemon;
