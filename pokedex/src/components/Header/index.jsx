import React, { useContext, useState } from "react";
import { HeaderStyle, Button } from "./style";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToPokemonList } from "../../routes/coordinator";
import useDefineButtonHeader from "../../hooks/useDefineButtonHeader";
import ModalCatchDelete from "../ModalCatchDelete";
import GlobalContext from "../../context/GlobalContext";

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation().pathname;
  const context = useContext(GlobalContext);
  const { changeModal, setChangeModal, isYours, setIsYours } = context;
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
