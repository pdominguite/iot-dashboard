import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto,  sans-serif;
  }

  #root {
    min-width: 960px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  button {
    cursor: pointer;
  }

`;
