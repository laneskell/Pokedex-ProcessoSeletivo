export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};
export const goToHomePage = (history) => {
  history.push("/");
};

export const goToDetailsPage = (history, name, isPokedex) => {
  isPokedex
    ? history.push(`/pokemon/${name}/telaPokedex`)
    : history.push(`/pokemon/${name}`);
};
