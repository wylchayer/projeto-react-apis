import React from "react";
import {
  DetailContainer,
  DetailCardContainer,
  MiniImg,
  DetailPokemon,
  BoxInfos,
  DetailTypes,
  BoxStats,
  Stats,
  StatsName,
  StatsBase,
  BaseBar,
  NumberPokemonDetail,
  NamePokemonDetail,
  TypesPokemonContainerDetail,
  TypePokemonDetail,
  BoxMoves,
  Moves,
  PokemonImgDetail,
  PokeballDetail,
} from "./style";
import Header from "../../components/Header";
import pokeballDetail from "../../assets/pokeball_detail.png";
import { colorType } from "../../constants/colorType";
import { iconType } from "../../constants/iconType";
import { useState, useEffect } from "react";
import { PokemonTeste } from "../../temp/pokemonTeste";

const PokemonDetailPage = () => {
  const btnLClass = "btnLActive";
  const btnR = {
    class: "deletePokemon",
    action: "deletePokemon",
    name: "Excluir da Pokédex",
  };

  const pokemon = PokemonTeste[1];
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

  const totalStats = pokemon.base_stats.reduce((total, base) => {
    return total + base.base;
  }, 0);

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} />
      <DetailContainer>
        <h2>Detalhes</h2>

        <DetailCardContainer color={colorType(pokemon.types[0])}>
          <DetailPokemon>
            <MiniImg
              className="frontImg"
              src={pokemon.sprites.front_default}
              alt=""
            />
            <MiniImg
              className="backImg"
              src={pokemon.sprites.back_default}
              alt=""
            />
            <BoxInfos>
              <h3>Base stats</h3>
              <BoxStats>
                {pokemon.base_stats.map((data) => {
                  return (
                    <Stats key={data.name}>
                      <StatsName>
                        {data.name === "special-attack"
                          ? "Sp. Atk"
                          : data.name === "special-defense"
                          ? "Sp. Def"
                          : data.name}
                      </StatsName>
                      <StatsBase>{data.base}</StatsBase>
                      <BaseBar base={data.base} ></BaseBar>
                    </Stats>
                  );
                })}
                <Stats>
                  <StatsName>Total</StatsName>
                  <StatsBase>
                    <strong>{totalStats}</strong>
                  </StatsBase>
                </Stats>
              </BoxStats>
            </BoxInfos>
          </DetailPokemon>

          <DetailPokemon className="moves">
            <DetailTypes>
              <NumberPokemonDetail># {idPokemon}</NumberPokemonDetail>
              <NamePokemonDetail>{pokemon.name}</NamePokemonDetail>
              <TypesPokemonContainerDetail>
                {pokemon.types.map((type) => {
                  return <TypePokemonDetail key={type} src={iconType(type)} />;
                })}
              </TypesPokemonContainerDetail>
            </DetailTypes>
            <BoxInfos>
              <h3>Moves:</h3>
              <BoxMoves>
                {pokemon.moves.map((move) => {
                  return <Moves key={move}>{move}</Moves>;
                })}
              </BoxMoves>
            </BoxInfos>
            <PokemonImgDetail src={pokemon.sprites["official_artwork"]} />
          </DetailPokemon>

          <PokeballDetail src={pokeballDetail} />
        </DetailCardContainer>
      </DetailContainer>
    </>
  );
};

export default PokemonDetailPage;
