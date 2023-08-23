import { styled } from "styled-components";

export const PaginationContainer = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonPagination = styled.button`
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  opacity: 0.5;

  &.active {
    background-color: #33a4f5;
    opacity: 1;
  }

  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;
