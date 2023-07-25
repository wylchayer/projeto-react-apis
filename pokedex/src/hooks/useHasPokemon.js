import { useEffect, useState } from "react";

const useHasPokemon = (idPokemon, pokedexIds) => {
  const [hasPokemon, setHasPokemon] = useState(false);

  useEffect(() => {
    checkHasPokemon();
  }, [pokedexIds]);

  const checkHasPokemon = () => {
    // pokedexIds.includes(idPokemon) ? setHasPokemon(true) : setHasPokemon(false)
    const has = pokedexIds.filter((id) => {
      return id === idPokemon;
    });
    has.length ? setHasPokemon(true) : setHasPokemon(false);
  };

  return { hasPokemon };
};

export default useHasPokemon;
