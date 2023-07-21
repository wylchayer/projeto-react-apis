import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsListPage from "../pages/PokemonsListPage";
import PokedexPage from "../pages/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detail/:idPokemon" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
