import styled from "styled-components";

export const DetailContainer = styled.main`
  border: 1px solid red;
  padding: 2%;
  h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const DetailCardContainer = styled.section`
  border: 1px solid green;
  border-radius: 30px;
  height: 663px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
`;

export const DetailPokemon = styled.article`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-template-areas:
    "frontalFigure stats"
    "backFigure stats";
  gap: 2rem;
  padding: 2rem;

  &.moves {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    grid-template-areas:
      "detailTypes ."
      "stats ."
      "stats .";
  }
`;

export const FrontalFigure = styled.figure`
  border: 1px solid blue;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  grid-area: frontalFigure;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 200px;
  }
`;
export const BackFigure = styled.figure`
  border: 1px solid blue;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  grid-area: backFigure;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 200px;
  }
`;

export const Stats = styled.div`
  border: 1px solid blue;
  border-radius: 20px;
  grid-area: stats;
  width: 100%;
  height: 100%;
`;

export const DetailTypes = styled.div`
  border: 1px solid blue;
  border-radius: 20px;
  grid-area: detailTypes;
`;
