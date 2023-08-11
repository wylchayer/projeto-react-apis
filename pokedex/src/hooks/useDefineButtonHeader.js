import { useContext, useEffect, useState } from "react";
import { goToPokedex } from "../routes/coordinator";
import useHasPokemon from "./useHasPokemon";
import GlobalContext from "../context/GlobalContext";

const useDefineButtonHeader = (idPokemon, location, navigate) => {
  const [button, setButton] = useState({});
  const context = useContext(GlobalContext);
  const { pokedexIds, catchPokemon, deletePokemon } = context;
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
