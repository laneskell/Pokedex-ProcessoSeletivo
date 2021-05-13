import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPage from "../pages/detailsPage/index";

import HomePage from "../pages/homePage/index";
import PokedexPage from "../pages/pokedexPage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>

        <Route
          exact
          path="/pokemon/:name/:telaPokedex?"
          component={DetailsPage}
        />

        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
