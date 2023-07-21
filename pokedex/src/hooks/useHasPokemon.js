import { useEffect, useState } from "react";
import useUpdatePokedex from "./useUpdatePokedex";

const useHasPokemon = (idPokemon) => {
  const [hasPokemon, setHasPokemon] = useState(false);
  const { pokedexIds } = useUpdatePokedex();

  useEffect(() => {
    checkHasPokemon();
  }, [pokedexIds, idPokemon]);

  const checkHasPokemon = () => {
    const has = pokedexIds.filter((id) => {
      return id === idPokemon;
    });
    has.length && setHasPokemon(true);
  };

  return { hasPokemon };
};

export default useHasPokemon;
