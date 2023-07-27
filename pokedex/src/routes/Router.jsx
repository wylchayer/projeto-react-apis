import { Routes, Route, HashRouter } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage";
import PokedexPage from "../pages/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detail/:idPokemon" element={<PokemonDetailPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
