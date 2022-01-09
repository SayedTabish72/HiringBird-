import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
  html {
  scroll-behavior: smooth;
}
`;

export default GlobalStyle;
