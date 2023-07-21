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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > h3 {
    flex-grow: 1;
    text-align: center;
    justify-self: center;
    font-size: 2rem;
  }
`;