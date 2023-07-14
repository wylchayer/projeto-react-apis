import styled from "styled-components";
import pokeball from "../../assets/pokeball.png";

export const DetailContainer = styled.main`
  background-color: #5d5d5d;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  color: #ffffff;
  padding: 2%;

  h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const DetailCardContainer = styled.section`
  background-color: ${(props) => props.color};
  border-radius: 30px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  margin-top: 50px;
  position: relative;
`;

export const DetailPokemon = styled.article`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-template-areas:
    "frontalImg boxInfos"
    "backImg boxInfos";
  gap: 2rem;
  padding: 2rem;
  z-index: 1;

  &.moves {
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
    grid-template-areas:
      "detailTypes ."
      "boxInfos ."
      "boxInfos ."
      "boxInfos .";
  }
`;

export const MiniImg = styled.img`
  background-color: #ffffff;
  border-radius: 8px;
  height: 100%;
  width: 100%;

  &.frontImg {
    grid-area: frontalImg;
  }

  &.backImg {
    grid-area: backImg;
  }
`;

export const BoxInfos = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  grid-area: boxInfos;
  height: 100%;
  width: 100%;
  padding: 20px;

  > h3 {
    color: #000000;
    font-size: 24px;
  }
`;

export const BoxStats = styled.div`
  border-top: 1px solid #f1f1f1;
  color: #8a8a8a;
  font-size: 14px;
`;

export const Stats = styled.div`
  border-bottom: 1px solid #f1f1f1;
  display: grid;
  grid-template: 1fr / 25% 10% 1fr;
  gap: 15px;
  height: 2rem;

  > p {
    margin: auto 0px;
  }
`;

export const StatsName = styled.p`
  text-align: right;

  &::first-letter {
    text-transform: uppercase;
  }
`;
export const StatsBase = styled.p`
  text-align: right;
`;

export const BaseBar = styled.div`
  --progress: calc((${(prop) => prop.base}/80)*100);
  display: flex;
  padding: 0.6rem;

  &::before {
    content: "";
    border-radius: 8px;
    width: calc(var(--progress) * 1%);
    background-color: hsl(var(--progress), 70%, 50%);
  }
`;

export const DetailTypes = styled.div`
  grid-area: detailTypes;
`;

export const NumberPokemonDetail = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

export const NamePokemonDetail = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TypesPokemonContainerDetail = styled.div`
  display: flex;
`;

export const TypePokemonDetail = styled.img`
  height: 31;
  margin-right: 1em;
  margin-top: 10px;
`;

export const BoxMoves = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Moves = styled.div`
  background-color: #ececec;
  border: 1px dashed #00000024;
  border-radius: 12px;
  align-self: flex-start;
  padding: 8px 10px;
`;

export const PokemonImgDetail = styled.img`
  height: 270px;
  position: absolute;
  right: 20px;
  top: -135px;
`;

export const PokeballDetail = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  bottom: 0;
`;
