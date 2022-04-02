import {createGlobalStyle} from 'styled-components';
import rubikRegular from "./assets/fonts/Rubik-Regular.ttf";
import rubikSemiBold from "./assets/fonts/Rubik-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url(${rubikRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Rubikbold';
    src: url(${rubikSemiBold}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Rubik, Sans-Serif;
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

`;

export default GlobalStyle;