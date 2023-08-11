import GlobalContext from "./GlobalContext";
import { useEffect, useState } from "react";

const GlobalState = (props) => {
  const [pokedexIds, setPokedexIds] = useState([]);
  const [changeModal, setChangeModal] = useState(false);
  const [isYours, setIsYours] = useState(false);

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
    setIsYours(true);
    setChangeModal(true);
  };

  const deletePokemon = (deleteId) => {
    const list = pokedexIds.filter((currentId) => {
      return currentId !== deleteId;
    });
    setPokedexIds(list);
    !list.length && localStorage.removeItem("PokedexIds");
    setIsYours(false);
    setChangeModal(true);
  };

  const data = {
    pokedexIds,
    catchPokemon,
    deletePokemon,
    changeModal,
    setChangeModal,
    isYours,
    setIsYours,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState