import styled from "styled-components";

export const CardContainer = styled.article`
  align-items: end;
  display: flex;
  height: 263px;
  width: 440px;
  position: relative;
`;

export const Card = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  height: 210px;
  letter-spacing: 0.05em;
  padding: 20px;
  position: relative;
`;

export const NumberPokemonCard = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

export const NamePokemonCard = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TypesPokemonContainerCard = styled.div`
  display: flex;
`;

export const TypePokemonCard = styled.img`
  height: 31;
  margin-right: 8px;
  margin-top: 10px;
`;

export const ButtonDetailsCard = styled.button`
  background: none;
  border: none;
  bottom: 20px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  text-decoration: underline;
`;

export const PokeballCard = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PokemonImgCard = styled.img`
  height: 193px;
  position: absolute;
  top: -53px;
  right: 0;
  z-index: 2;
`;

export const ButtonCatch = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  padding: 4px 10px;
  position: absolute;
  right: 22px;
  bottom: 10px;
  height: 38px;
  width: 146px;
  z-index: 2;
`;
