export const goToPokemonList = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemonDetail = (navigate, idPokemon) => {
  navigate(`/detail/${idPokemon}`);
};