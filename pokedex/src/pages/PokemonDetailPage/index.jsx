import React from "react";
import {
  DetailContainer,
  DetailCardContainer,
  FrontalFigure,
  BackFigure,
  DetailPokemon,
  Stats,
  DetailTypes,
} from "./style";
import Header from "../../components/Header";

const PokemonDetailPage = (props) => {
  const {setPage} = props
  const btnLClass = "btnLActive";
  const btnR = {
    class: "deletePokemon",
    action: "deletePokemon",
    name: "Excluir da Pokédex",
  };

  return (
    <>
      <Header btnLClass={btnLClass} btnR={btnR} setPage={setPage} />
      <DetailContainer>
        <h2>Detalhes</h2>
        <DetailCardContainer>
          <DetailPokemon>
            <FrontalFigure>
              <img src="https://picsum.photos/200" alt="" />
            </FrontalFigure>
            <BackFigure>
              <img src="https://picsum.photos/200" alt="" />
            </BackFigure>
            <Stats></Stats>
          </DetailPokemon>
          <DetailPokemon className="moves">
            <DetailTypes></DetailTypes>
            <Stats></Stats>
          </DetailPokemon>
        </DetailCardContainer>
      </DetailContainer>
    </>
  );
};

export default PokemonDetailPage;
