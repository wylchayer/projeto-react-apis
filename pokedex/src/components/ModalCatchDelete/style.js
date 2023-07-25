import { styled } from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 3ms;
`;

export const AlertAction = styled.img`
  width: 470px;
`;