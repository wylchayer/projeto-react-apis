import React, { useEffect, useState } from "react";
import {
  CardContainer,
  Card,
  ButtonDetailsCard,
  NumberPokemonCard,
  NamePokemonCard,
  TypesPokemonContainerCard,
  TypePokemonCard,
  PokeballCard,
  PokemonImgCard,
  Button,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import { colorType } from "../../constants/colorType";
import { iconType } from "../../constants/iconType";
import pokeball from "../../assets/pokeball_card.png";
import useHasPokemon from "../../hooks/useHasPokemon";

const PokemonCard = (props) => {
  const { pokemon, catchPokemon, deletePokemon, getLocalStorage } = props;
  const [textButton, setTextButton] = useState("");
  const navigate = useNavigate();
  const [idPokemon, setIdPokemon] = useState(pokemon.id);
  const { hasPokemon } = useHasPokemon(pokemon.id);
  const location = useLocation().pathname;

  useEffect(() => {
    ajustId();
    classButton();
  }, []);

  useEffect(() => {
    classButton();
  }, [hasPokemon]);

  const ajustId = () => {
    const id = idPokemon.toString();

    switch (id.length) {
      case 1:
        return setIdPokemon("00" + idPokemon);
      case 2:
        return setIdPokemon("0" + idPokemon);
      default:
        return setIdPokemon(idPokemon);
    }
  };

  const classButton = () => {
    const button = document.querySelector(`#btn${pokemon.id}`);
    if (hasPokemon) {
      if (location === "/") {
        button.setAttribute("disabled", "disabeld");
        button.classList.add("catchedPokemon");
        setTextButton("Capturado");
      } else {
        button.classList.add("deletePokemon");
        setTextButton("Excluir");
      }
    } else {
      setTextButton("Capturar!");
    }
  };

  const actionPokemon = (id) => {
    if (hasPokemon) {
      deletePokemon(id);
    } else {
      catchPokemon(id);
    }
  };

  return (
    <CardContainer>
      <Card color={colorType(pokemon.types[0].type.name)}>
        <div>
          <NumberPokemonCard># {idPokemon}</NumberPokemonCard>
          <NamePokemonCard>{pokemon.name}</NamePokemonCard>
          <TypesPokemonContainerCard>
            {pokemon.types.map((type) => {
              return (
                <TypePokemonCard
                  key={type.type.name}
                  src={iconType(type.type.name)}
                />
              );
            })}
          </TypesPokemonContainerCard>
          <ButtonDetailsCard
            onClick={() => goToPokemonDetail(navigate, pokemon.id)}
          >
            Detalhes
          </ButtonDetailsCard>
        </div>
        <div>
          <PokemonImgCard
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
          <Button
            id={`btn${pokemon.id}`}
            onClick={() => actionPokemon(pokemon.id)}
          >
            {textButton}
          </Button>
        </div>
        <PokeballCard src={pokeball} alt="" />
      </Card>
    </CardContainer>
  );
};

export default PokemonCard;
