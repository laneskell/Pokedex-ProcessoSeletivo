import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import GlobalStateContext from "../../global/GlobalContext";

const DetailsPage = () => {
  const { name, telaPokedex } = useParams();
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    let current = [];
    if (telaPokedex) {
      current = pokedex.find((item) => {
        return item.name === name;
      });
    } else {
      current = pokemons.find((item) => {
        return item.name === name;
      });
    }

    if (!current) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => setSelectedPokemon(res.data))
        .catch((err) => alert(err.response));
    } else {
      setSelectedPokemon(current);
    }
  }, [name, pokemons, telaPokedex, pokedex]);

  return (
    <>
      <Header GoDetails />

      <div className="containerDetails">
        {selectedPokemon && selectedPokemon.sprites && (
          <div className="cardDetails">
            <h2> Pokémon: {name}</h2>
            <img
              alt="imagem animada pokemon de frente"
              src={
                selectedPokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
            />
            <img
              alt="imagem animada pokemon de costas"
              src={
                selectedPokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.back_default
              }
            />
            <h2>Poderes</h2>
            {selectedPokemon &&
              selectedPokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                );
              })}
            {selectedPokemon &&
              selectedPokemon.types.map((type) => {
                return <p key={type.type.name}>{type.type.name}</p>;
              })}
            <h2>Ataques</h2>
            {selectedPokemon &&
              selectedPokemon.moves.map((move, index) => {
                return (
                  index < 5 && <p key={move.move.name}>{move.move.name}</p>
                );
              })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
