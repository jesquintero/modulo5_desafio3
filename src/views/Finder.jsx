
import { useNavigate } from "react-router-dom";
import InputFinder from "../components/InputFinder";
import NavBar from "../components/Navbar";
import { usePokemon } from '../context/PokeContext';

const Finder = () => {
  const navigate = useNavigate();
  const { setSearchResult } = usePokemon();

  const handlePokemonSelect = async (selectedPokemon) => {
    try {
      const pokemonName = selectedPokemon.name;
      const pokemonData  = await (pokemonName);
      if (pokemonData ) {
        setSearchResult(pokemonData );
        navigate(`/pokemon/${pokemonName}`);
      } else {
        console.log("No se encontraron resultados para:", pokemonName);
      }
    } catch (error) {
      console.error("Error al buscar Pokemon:", error);
    }
  };
  
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Selecciona un Pokemon</h1>
        <InputFinder onPokemonSelect={handlePokemonSelect} />
      </div>
    </>
  );
};

export default Finder;