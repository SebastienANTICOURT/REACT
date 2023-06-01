
 
function PokemonCard({pokemon}) {

return  (
<figure>   
 {pokemon.imgSrc != null? (< img src={pokemon.imgSrc} alt={pokemon.name} />
 ) : (
    <p>???</p>
 )}
 <figcaption>{pokemon.name}</figcaption>
</figure>
);
}


/*dans le return {} si js sinon ca marche pas*/
export default PokemonCard;