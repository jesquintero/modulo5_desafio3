
import React, { createContext, useContext, useState, useEffect } from "react";

export const PokeContext = createContext();

export const usePokemon = () => useContext(PokeContext);

export const PokeProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); 

  useEffect(() => {
    const getPokemon = async (q) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${q}`
        );
        const data = await response.json();
        const pokemones = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
              name: data.name,
              img: data.sprites.other.showdown.front_default,
              stats: data.stats,
              type: data.types,
            };
          })
        );
        setPokemonList(pokemones);
      } catch (error) {
        console.error("Error obteniendo los Pokemon:", error);
      }
    };

    getPokemon(10);
  }, []);

  return (
    <PokeContext.Provider value={{ pokemonList, searchResult, setSearchResult, selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContext;