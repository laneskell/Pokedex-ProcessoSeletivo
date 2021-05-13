import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../assets/API";
import GlobalStateContext from "./GlobalContext";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [count, setCount] = useState(0);
  const [showComparate, setShowComparate] = useState(false);
  const [cardCompare, setCardCompare] = useState([]);

  useEffect(() => {
    getPokemonNames();
  }, [currentPageUrl]);

  const getPokemonNames = () => {
    axios
      .get(currentPageUrl)
      .then((response) => {
        setPokemonNames(response.data.results);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(item.url)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }, [pokemonNames]);

  return (
    <GlobalStateContext.Provider
      value={{
        pokemonNames,
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        currentPageUrl,
        setCurrentPageUrl,
        nextPageUrl,
        setNextPageUrl,
        prevPageUrl,
        setPrevPageUrl,
        count,
        setCount,
        showComparate,
        setShowComparate,
        cardCompare,
        setCardCompare
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
