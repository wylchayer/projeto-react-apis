import { useEffect, useState } from "react";
import useUpdatePokedex from "./useUpdatePokedex";
import { goToPokedex } from "../routes/coordinator";
import useHasPokemon from "./useHasPokemon";

const useDefineButtonHeader = (idPokemon, location, navigate) => {
  const [thisButton, setThisButton] = useState({});
  const { hasPokemon } = useHasPokemon(idPokemon);
  const { catchPokemon, deletePokemon } = useUpdatePokedex(idPokemon);

  useEffect(() => {
    defineButton();
  }, [hasPokemon]);

  const defineButton = () => {
    if (location === "/") {
      setThisButton({
        name: "Pokédex",
        class: "toPokedexPage",
        click: "goToPokedex",
      });
    } else if (location.includes("detail")) {
      hasPokemon
        ? setThisButton({
            name: "Excluir da Pokédex",
            class: "deletePokemon",
            click: "deletePokemon",
          })
        : setThisButton({
            name: "Capturar!",
            class: "catchPokemon",
            click: "catchPokemon",
          });
    } else {
      setThisButton({
        name: "",
        class: "",
        click: "",
      });
    }
  };

  const clickButton = () => {
    switch (thisButton.click) {
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

  return [thisButton, clickButton];
};

export default useDefineButtonHeader;
