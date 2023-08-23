import styled from "styled-components";

export const PokedexListContainer = styled.main`
  background-color: #888888;
  color: #ffffff;
  padding: 2%;
`;

export const HeaderPokedexPage = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 1rem;
    font-size: 48px;
    font-weight: 700;
  }
`;

export const DivSelectPokedexPage = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  > select {
    margin-left: 5px;
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
