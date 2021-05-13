import { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContext";
import { goToDetailsPage } from "../../router/coordinator";

const PokemonCard = ({ pokemon, GoPokedex }) => {
  const history = useHistory();
  const {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    setShowComparate,
    cardCompare,
    setCardCompare
  } = useContext(GlobalStateContext);

  const addToPokedex = () => {
    const pokeNew = pokemons.findIndex((item) => item.name === pokemon.name);
    const newPokeList = [...pokemons];
    newPokeList.splice(pokeNew, 1);
    const orderedPokemons = newPokeList.sort((a, b) => {
      return a.id - b.id;
    });
    const newPokedexList = [...pokedex, pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });
    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };
  const removePokedex = () => {
    const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name);
    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });
    const newPokemonsList = [...pokemons, pokemon];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });
    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const compare = () => {
    const newPokedexList = [...cardCompare, pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });
    setCardCompare(orderedPokedex);
    cardCompare.length >= 1 && setShowComparate(true);
  };

  return (
    <div className="cardPokemon">
      <p>{pokemon.name}</p>
      <img
        src={pokemon && pokemon.sprites.other["official-artwork"].front_default}
        alt={`imagem do pokemon ${pokemon.name}`}
      />
      <div>
        <button onClick={GoPokedex ? removePokedex : addToPokedex}>
          {GoPokedex ? "REMOVER" : "PEGAR"}
        </button>
        <button
          onClick={() => goToDetailsPage(history, pokemon.name, GoPokedex)}
        >
          DETALHES
        </button>
        <button onClick={() => compare()}>{GoPokedex ? "COMPARAR" : ""}</button>
      </div>
    </div>
  );
};
export default PokemonCard;
