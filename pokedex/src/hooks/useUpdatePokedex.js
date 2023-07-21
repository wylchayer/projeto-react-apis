import { useEffect, useState } from "react";

const useUpdatePokedex = () => {
  const [pokedexIds, setPokedexIds] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setLocalStorage();
  }, [pokedexIds]);

  const getLocalStorage = () => {
    const getPokedexLocalStorage = JSON.parse(
      localStorage.getItem("PokedexIds")
    );
    getPokedexLocalStorage && setPokedexIds(getPokedexLocalStorage);
  };

  const setLocalStorage = () => {
    pokedexIds.length &&
      localStorage.setItem("PokedexIds", JSON.stringify(pokedexIds));
  };

  const catchPokemon = (catchId) => {
    const list = [...pokedexIds, catchId];
    const sortedList = list.sort((currentId, nextId) => {
      return currentId - nextId;
    });
    setPokedexIds(sortedList);
  };

  const deletePokemon = (deleteId) => {
    const list = pokedexIds.filter((currentId) => {
      return currentId !== deleteId;
    });
    list.length && localStorage.removeItem("PokedexIds");
    setPokedexIds(list);
  };

  return { pokedexIds, catchPokemon, deletePokemon };
};

export default useUpdatePokedex;
