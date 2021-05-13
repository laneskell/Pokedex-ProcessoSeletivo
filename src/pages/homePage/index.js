import { useContext } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalContext";

const HomePage = () => {
  const { pokemons } = useContext(GlobalStateContext);

  const screen = (
    <div className="pokeListContainer">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
  return (
    <>
      <Header /> {screen} <Footer />
    </>
  );
};

export default HomePage;
