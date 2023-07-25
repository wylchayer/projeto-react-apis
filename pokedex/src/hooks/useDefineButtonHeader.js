import { useEffect, useState } from "react";
import useUpdatePokedex from "./useUpdatePokedex";
import { goToPokedex } from "../routes/coordinator";
import useHasPokemon from "./useHasPokemon";

const useDefineButtonHeader = (
  idPokemon,
  location,
  navigate,
  setChangeModal,
  setIsYours
) => {
  const [button, setButton] = useState({});
  const { pokedexIds, catchPokemon, deletePokemon } = useUpdatePokedex(
    setChangeModal,
    setIsYours
  );
  const { hasPokemon } = useHasPokemon(idPokemon, pokedexIds);

  useEffect(() => {
    defineButton();
  }, [hasPokemon]);

  const defineButton = () => {
    if (location === "/") {
      setButton({
        name: "Pokédex",
        class: "toPokedexPage",
        click: "goToPokedex",
      });
    } else if (location.includes("detail")) {
      hasPokemon
        ? setButton({
            name: "Excluir da Pokédex",
            class: "deletePokemon",
            click: "deletePokemon",
          })
        : setButton({
            name: "Capturar!",
            class: "catchPokemon",
            click: "catchPokemon",
          });
    } else {
      setButton({
        name: "",
        class: "",
        click: "",
      });
    }
  };

  const clickButton = () => {
    switch (button.click) {
      case "goToPokedex":
        goToPokedex(navigate);
        break;
      case "deletePokemon":
        deletePokemon(idPokemon);
        break;
      case "catchPokemon":
        catchPokemon(idPokemon);
        break;
      default:
        alert("Function not found");
        break;
    }
  };

  return { button, clickButton };
};

export default useDefineButtonHeader;
