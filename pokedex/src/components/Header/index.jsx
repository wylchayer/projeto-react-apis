import React from "react";
import { HeaderStyle, Button } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToPokemonList, goToPokedex } from "../../routes/coordinator";

const Header = (props) => {
  const navigate = useNavigate()
  const { btnLClass, btnR } = props;

  const actionBtnR = () => {
    if (btnR.action === "pokedexPage") {
      goToPokedex(navigate);
    } else {
      alert("Pokémon excluído");
      goToPokedex(navigate);
    }
  };

  return (
    <HeaderStyle>
      <Button className={btnLClass} onClick={() => goToPokemonList(navigate)}>
        {"< Todos Pokémons"}
      </Button>
      <img src={logo} alt="" />
      <Button className={btnR.class} onClick={actionBtnR}>
        {btnR.name}
      </Button>
    </HeaderStyle>
  );
};

export default Header;
