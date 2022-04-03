import {createGlobalStyle} from 'styled-components';
import varelaRegular from "./assets/fonts/VarelaRound-Regular.ttf"
import kalamRegular from "./assets/fonts/Kalam-Regular.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Varela';
    src: url(${varelaRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Kalam';
    src: url(${kalamRegular}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Varela, Sans-Serif;
    background-color: #EEEEEE;
    color: #212529;
  }


  a {
    color: #5c9ead;
    text-decoration: none;

  }

  & a:hover {
    color: #326273;
    text-decoration: underline;
  }
  
  select, button {
    font-family: Varela, Sans-Serif;
  }

`;

export default GlobalStyle;