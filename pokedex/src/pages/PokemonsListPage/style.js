import styled from "styled-components";

export const PokemonListContainer = styled.main`
  border: 1px solid red;
  padding: 2%;
  h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const PokemonList = styled.section`
  border: 1px solid lightcoral;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
