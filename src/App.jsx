import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"

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
/*Déclaration d'un state pour stocker l'index du pokemon affiche, initialisé à 0*/ 
  const [pokemonCount, setPokemonCount] = useState(0);

  return(
  <div>
    <NavBar pokeprops={[pokemonCount, setPokemonCount]}
            pokelist= {pokemonList}/>
    <img src={pokemonList[pokemonCount].imgSrc} alt={pokemonList[pokemonCount].name} /> 
  </div>
    );
    };

export default App;