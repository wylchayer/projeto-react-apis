import styled from "styled-components";

export const PokemonListContainer = styled.main`
  background-color: #888888;
  color: #ffffff;
  padding: 2%;
`;

export const HeaderListPage = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const DivSelect = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  > select {
    margin-left: 5px;
  }
`;

export const PokemonList = styled.section`
  display: grid;
  grid-template: auto/repeat(3, 1fr);
  justify-items: center;

  > h3 {
    grid-column: 2;
  }
`;
