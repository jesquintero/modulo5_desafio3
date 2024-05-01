import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/Navbar";
import Card from "../components/Card";
import InputFinder from "../components/InputFinder";

const Pokemon = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const navigate = useNavigate();


  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    console.log("Pokemon seleccionado en Pokemon:", pokemon); 
  };

  const goBack = () => {
    navigate('/finder');
    }

  return (
    <>
      <NavBar />
      <div className=" container text-center">
      <InputFinder  onPokemonSelect={handlePokemonSelect} />
      {selectedPokemon && Object.keys(selectedPokemon).length > 0 ? (
        <div>
          <h2>Detalles del Pokemon:</h2>
          <Card pokemon={selectedPokemon} />
          <button onClick={goBack} className='btn btn-secondary btn-md m-3'>
            Regresar
          </button>
        </div>
      ) : null}
      </div>
    </>
  );
};

export default Pokemon;