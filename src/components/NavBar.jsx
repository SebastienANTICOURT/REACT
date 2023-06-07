import { useEffect } from "react";
import "./NavBar.css";
import { object } from "prop-types";


const NavBar = ({pokeprops, pokelist}) => {
  const [pokemonCount, setPokemonCount] = pokeprops;


  const handleClickPokemon = (pokemonIndex) => {
   setPokemonCount(pokemonIndex);
  };

   
     return(     
   <div>
  {pokelist.map((pokemon, pokemonIndex) => (
  <button key={pokemonIndex} onClick={() => handleClickPokemon(pokemonIndex)}>{pokemon.name}</button>))}
    </div>
        );
};

      export default NavBar;
