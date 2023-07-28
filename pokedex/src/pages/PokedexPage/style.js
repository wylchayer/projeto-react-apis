import styled from "styled-components";

export const PokedexListContainer = styled.main`
  background-color: #5d5d5d;
  color: #ffffff;
  padding: 2%;
  h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const PokedexList = styled.section`
  display: grid;
  grid-template: auto/repeat(3, 1fr);
  justify-items: center;

  > h3 {
    text-align: center;
    font-size: 2rem;
    grid-column: 2;
  }
`;
