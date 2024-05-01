import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokeContext } from '../context/PokeContext';

const InputFinder = ({ onPokemonSelect }) => { 
  const { pokemonList } = useContext(PokeContext);
  const navigate = useNavigate(); 

  const handlePokemonSelect = (e) => {
    const selectedPokemonName = e.target.value;
    const selectedPokemon = pokemonList.find(pokemon => pokemon.name === selectedPokemonName);
    navigate(`/pokemon/${selectedPokemonName}`);
    onPokemonSelect(selectedPokemon);
  };

  return (
    <div>
      <select onChange={handlePokemonSelect}>
        <option value="">Selecciona un Pokemon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputFinder;