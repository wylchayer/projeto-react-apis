import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

export const Body = styled.styled.div`
max-width: 1440px;
margin: 0px auto;
`