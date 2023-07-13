import React, { useState } from "react";
import { GlobalStyle, Body } from "./GlobalStyle";
import PokemonsListPage from "./pages/PokemonsListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokedexPage from "./pages/PokedexPage";
import { PokemonList } from "./pages/PokemonsListPage/style";

function App() {
  const [page, setPage] = useState("pokemonsPage");

  return (
    <Body>
      <GlobalStyle />
      {page === "pokedexPage" ? (
        <PokedexPage setPage={setPage} />
      ) : page === "detailsPage" ? (
        <PokemonDetailPage setPage={setPage} />
      ) : (
        <PokemonsListPage setPage={setPage} />
      )}
    </Body>
  );
}

export default App;
