import React, { useContext } from "react";
import { BASE_URL } from "../assets/API";
import GlobalStateContext from "../global/GlobalContext";
import imgPokeBackInitial from "../assets/img/pokebola-initial.png";

const Pagination = () => {
  const { setCurrentPageUrl, nextPageUrl, prevPageUrl } = useContext(
    GlobalStateContext
  );
  const gotoInitialPage = () => {
    setCurrentPageUrl(BASE_URL);
  };
  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <div className="containerPagination">
      <button onClick={gotoPrevPage}>Voltar </button>
      <img
        src={imgPokeBackInitial}
        alt="imagem pokebola para voltar na primiera página de pokemons"
        onClick={gotoInitialPage}
      />
      <button onClick={gotoNextPage}>Próximo</button>
    </div>
  );
};
export default Pagination;
