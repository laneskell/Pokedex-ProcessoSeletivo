import React from "react";
import GlobalState from "./global/GlobalState";
import Router from "./router/Router";
import "./App.scss";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
