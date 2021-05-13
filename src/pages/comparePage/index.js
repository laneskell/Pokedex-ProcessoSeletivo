import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalContext";
import loading from "../../assets/img/Pokebolas-17369.gif";
import CardComparePokemon from "../../components/cardCompare/CardCompare";

const ComparePage = () => {
  const { cardCompare, setCardCompare, setShowComparate } = useContext(
    GlobalStateContext
  );

  const closeComparate = (back) => {
    setCardCompare([]);
    setShowComparate(back);
  };

  return (
    <div className="containerComparePokemon">
      <button onClick={() => closeComparate(false)}>SAIR</button>

      <div className="pokeListContainer">
        {cardCompare.length !== 0 ? (
          cardCompare.map((poke) => {
            return <CardComparePokemon key={poke.name} pokemon={poke} />;
          })
        ) : (
          <div className="cardLoadingPokedex">
            <img src={loading} alt="loading Pokedex" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
