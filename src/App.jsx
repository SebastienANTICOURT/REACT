import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"


  const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const [pokemonCount, setPokemonCount] = useState(0);

  const handleClickSuivant = () =>
   setPokemonCount (
    pokemonCount < pokemonList.length - 1 ? pokemonCount +1 : pokemonCount
   );
   const handleClickPrecedent = () =>
   setPokemonCount (
    pokemonCount> 0 ? pokemonCount - 1 : pokemonCount
   );

   const Pokemon = pokemonList[pokemonCount];

   return(
    <div>
      <img src={Pokemon.imgSrc} alt={Pokemon.name} />
    <div>
    {pokemonCount > 0? (
      <button onClick={handleClickPrecedent}>Precedent</button>
    ) : undefined}
    {pokemonCount < pokemonList.length -1 ? (
      <button onClick = {handleClickSuivant}>Suivant</button>
    ) : undefined}
    </div>
    </div>
    );
    };


 
export default App;
