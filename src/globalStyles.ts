import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  html,
  body {
    color: #424242;
    background-color: #fff;
    font-family: 'Pret', sans-serif;
    font-weight: 400;
    padding: 0;
    margin: 0;
    font-size: 16px;
    width: 100%;
  }


  *, button, input, select, label, h1, h2, h3, h4, h5, h6 {
    font-family: 'Pret', sans-serif !important;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  input[type="radio"] {
    margin: 0
  }

  button {
    cursor: pointer
  }


`;

export default GlobalStyle;
