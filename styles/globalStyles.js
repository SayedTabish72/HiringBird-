import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  a {
    color:inherit;
    text-decoration: none;
  }
  body{
    background:#fff;
  }
  body::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
    height: 12px; 
  }
  body::-webkit-scrollbar-track {
    background: #fff; /* color of the tracking area */
    margin:.3rem 0;
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgb(180, 180, 180); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid #fff; /* creates padding around scroll thumb */
  }
`;

export default GlobalStyle;
