import { useContext } from "react";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalContext";
import loading from "../../assets/img/Pokebolas-17369.gif";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ComparePage from "./../comparePage/index";

const PokedexPage = () => {
  const { pokedex, showComparate } = useContext(GlobalStateContext);

  return (
    <div>
      {showComparate ? (
        <ComparePage />
      ) : (
        <>
          <Header GoPokedex />

          <div className="pokedexListContainer">
            {pokedex.length !== 0 ? (
              pokedex.map((poke) => {
                return <PokemonCard key={poke.name} GoPokedex pokemon={poke} />;
              })
            ) : (
              <div className="cardLoadingPokedex">
                <img src={loading} alt="loading Pokedex" />
                <p>
                  você não tem pokemons na pokedex, volte para a home e
                  adicione-os
                </p>
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default PokedexPage;
