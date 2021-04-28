import React from 'react';

import PokemonsInfos from '../data'
import Pokemon from './Pokemon';

function Pokedex() {
  return (
    PokemonsInfos.map(poke => <Pokemon key={poke.id} pokemonsInfo={poke} />)
  )
}

export default Pokedex;
