import React from "react";
import { HeaderStyle, Button } from "./style";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToPokemonList } from "../../routes/coordinator";
import useDefineButtonHeader from "../../hooks/useDefineButtonHeader";

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation().pathname;
  const [thisButton, clickButton] = useDefineButtonHeader(
    +params.idPokemon,
    location,
    navigate
  );

  return (
    <HeaderStyle>
      <Button
        className={location !== "/" && "toPokemonsListPage"}
        onClick={() => goToPokemonList(navigate)}
      >
        {"< Todos Pokémons"}
      </Button>
      <img src={logo} alt="" />
      <Button className={thisButton.class} onClick={clickButton}>
        {thisButton.name}
      </Button>
    </HeaderStyle>
  );
};

export default Header;
