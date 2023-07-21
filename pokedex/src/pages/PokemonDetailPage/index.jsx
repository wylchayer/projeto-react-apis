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
import { useParams } from "react-router-dom";
import { useRequestPokemon } from "../../hooks/useRequestPokemons";

const PokemonDetailPage = () => {
  const params = useParams();
  const [pokemon, isLoading, isError] = useRequestPokemon(params.idPokemon);

  const checkIdPokemon = () => {
    const id = pokemon.id.toString();

    switch (id.length) {
      case 1:
        return "00" + id;
      case 2:
        return "0" + id;
      default:
        return id;
    }
  };

  const idRender = pokemon.id && checkIdPokemon();

  const totalStats =
    pokemon.id &&
    pokemon.stats.reduce((total, stat) => {
      return total + stat.base_stat;
    }, 0);

  return (
    <>
      <Header />
      <DetailContainer>
        <h2>Detalhes</h2>
        {isLoading ? (
          <h3>Carregando dados</h3>
        ) : isError ? (
          <h3>Erro na requisição</h3>
        ) : (
          pokemon.id && (
            <DetailCardContainer color={colorType(pokemon.types[0].type.name)}>
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
                    {pokemon.stats.map((stat) => {
                      return (
                        <Stats key={stat.stat.name}>
                          <StatsName>
                            {stat.stat.name === "hp"
                              ? "HP"
                              : stat.stat.name === "special-attack"
                              ? "Sp. Atk"
                              : stat.stat.name === "special-defense"
                              ? "Sp. Def"
                              : stat.stat.name}
                          </StatsName>
                          <StatsBase>{stat.base_stat}</StatsBase>
                          <BaseBar base={stat.base_stat}></BaseBar>
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
                  <NumberPokemonDetail># {idRender}</NumberPokemonDetail>
                  <NamePokemonDetail>{pokemon.name}</NamePokemonDetail>
                  <TypesPokemonContainerDetail>
                    {pokemon.types.map((type) => {
                      return (
                        <TypePokemonDetail
                          key={type.type.name}
                          src={iconType(type.type.name)}
                        />
                      );
                    })}
                  </TypesPokemonContainerDetail>
                </DetailTypes>
                <BoxInfos className="boxMoves">
                  <h3>Moves:</h3>
                  <BoxMoves>
                    {pokemon.moves.map((move) => {
                      return (
                        <Moves key={move.move.name}>{move.move.name}</Moves>
                      );
                    })}
                  </BoxMoves>
                </BoxInfos>
                <PokemonImgDetail
                  src={pokemon.sprites.other["official-artwork"].front_default}
                />
              </DetailPokemon>

              <PokeballDetail src={pokeballDetail} />
            </DetailCardContainer>
          )
        )}
      </DetailContainer>
    </>
  );
};

export default PokemonDetailPage;
