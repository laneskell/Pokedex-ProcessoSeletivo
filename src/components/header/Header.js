import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { goToPokedexPage } from "../../router/coordinator";
import Pagination from "../../router/Pagination";
import imgpokeballMove from "../../assets/img/pokemove.gif";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalContext";

const Header = ({ GoPokedex, GoDetails }) => {
  const history = useHistory();
  const { pokedex } = useContext(GlobalStateContext);
  return (
    <div className="containerHeader">
      <Link to="/">
        <img className="imageLogo" alt="logo pokedex" src={logo} />
      </Link>
      {GoPokedex ? <></> : GoDetails ? <></> : <Pagination />}
      <div>
        {pokedex.length === 0 ? (
          <> </>
        ) : (
          <>
            <div className="countPokemon">{pokedex.length}</div>
            <img
              className="imageLogo--pokeball"
              src={imgpokeballMove}
              alt="pokebola girando, dá acesso a pokedex"
              onClick={() => goToPokedexPage(history)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
