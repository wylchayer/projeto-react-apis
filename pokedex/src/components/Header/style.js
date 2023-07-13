import styled from "styled-components";

export const HeaderStyle = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 160px;
  padding: 2vw;
`;

export const Button = styled.button`
  border: none;
  border-radius: 15px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  height: 74px;
  width: 287px;
  visibility: hidden;

  &.toPokedexPage {
    background-color: #33a4f5;
    visibility: visible;
  }

  &.deletePokemon {
    background-color: #ff6262;
    font-size: 16px;
    font-weight: 400;
    height: 54px;
    width: 226px;
    visibility: visible;
  }

  &.btnLActive {
    border-radius: inherit;
    color: #000000;
    background: none;
    height: auto;
    width: auto;
    visibility: visible;

    &:hover {
      text-decoration: underline;
    }
  }
`;
