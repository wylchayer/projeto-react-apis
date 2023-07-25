import React, { useState } from "react";
import { HeaderStyle, Button } from "./style";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToPokemonList } from "../../routes/coordinator";
import useDefineButtonHeader from "../../hooks/useDefineButtonHeader";
import ModalCatchDelete from "../ModalCatchDelete";

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation().pathname;
  const [changeModal, setChangeModal] = useState(false);
  const [isYours, setIsYours] = useState(false);
  const { button, clickButton } = useDefineButtonHeader(
    +params.idPokemon,
    location,
    navigate,
    setChangeModal,
    setIsYours
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
      <Button className={button.class} onClick={clickButton}>
        {button.name}
      </Button>
      {changeModal && (
        <ModalCatchDelete check={isYours} setChangeModal={setChangeModal} />
      )}
    </HeaderStyle>
  );
};

export default Header;
