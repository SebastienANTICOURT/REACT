import "./NavBar.css";


const NavBar = ({pokeprops, pokelist}) => {
  const [pokemonCount, setPokemonCount] = pokeprops;
console.log(pokemonCount);

  const handleClickSuivant = () =>
   setPokemonCount (
    pokemonCount < pokelist.length - 1 ? pokemonCount +1 : pokemonCount
   );
   const handleClickPrecedent = () =>
   setPokemonCount (
    pokemonCount> 0 ? pokemonCount - 1 : pokemonCount
   );

   const Pokemon = pokelist[pokemonCount];
  
     return(     
        <div>
        {pokemonCount > 0? (
          <button onClick={handleClickPrecedent}>Precedent</button>
        ) : undefined}
        {pokemonCount < pokelist.length -1 ? (
          <button onClick = {handleClickSuivant}>Suivant</button>
        ) : undefined}
        </div>
        );
};

      export default NavBar;
