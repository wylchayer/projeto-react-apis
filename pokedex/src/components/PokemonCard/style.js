import styled from "styled-components";

export const CardContainer = styled.article`
  border: 1px solid blue;
  height: 263px;
  width: 440px;
  display: flex;
  align-items: end;
`;

export const Card = styled.div`
  flex-grow: 1;
  background-color: lightgreen;
  border-radius: 15px;
  height: 210px;
  /* display temporário */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonDetails = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  height: auto;
  width: auto;
  text-decoration: underline;
`;
