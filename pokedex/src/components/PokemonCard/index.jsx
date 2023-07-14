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
  ButtonCatch,
} from "./style";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import { colorType } from "../../constants/colorType";
import { iconType } from "../../constants/iconType";
import pokeball from "../../assets/pokeball_card.png";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigate = useNavigate();
  const [idPokemon, setIdPokemon] = useState(pokemon.id);

  useEffect(() => {
    const id = idPokemon.toString();

    switch (id.length) {
      case 1:
        return setIdPokemon("00" + idPokemon);
      case 2:
        return setIdPokemon("0" + idPokemon);
      default:
        return setIdPokemon(idPokemon);
    }
  }, []);

  return (
    <CardContainer>
      <Card color={colorType(pokemon.types[0])}>
        <div>
          <NumberPokemonCard># {idPokemon}</NumberPokemonCard>
          <NamePokemonCard>{pokemon.name}</NamePokemonCard>
          <TypesPokemonContainerCard>
            {pokemon.types.map((type) => {
              return <TypePokemonCard key={type} src={iconType(type)} />;
            })}
          </TypesPokemonContainerCard>
          <ButtonDetailsCard onClick={() => goToPokemonDetail(navigate)}>
            Detalhes
          </ButtonDetailsCard>
        </div>
        <div>
          <PokemonImgCard src={pokemon.sprites["official_artwork"]} />
          <ButtonCatch>Capturar!</ButtonCatch>
        </div>
        <PokeballCard src={pokeball} alt="" />
      </Card>
    </CardContainer>
  );
};

export default PokemonCard;
