import React from "react";
import { HeaderStyle, Button } from "./style";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const { btnLClass, btnR, setPage } = props;
  console.log(btnR.action);

  const actionBtnR = () => {
    if (btnR.action === "pokedexPage") {
      setPage("pokedexPage");
    } else {
      alert("Pokémon excluído");
      setPage("pokedexPage");
    }
  };

  return (
    <HeaderStyle>
      <Button className={btnLClass} onClick={() => setPage("pokemonsPage")}>
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
