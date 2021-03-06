import { createGlobalStyle} from 'styled-components'

import Background from '../assets/pokemon.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #72c2a0 url(${Background}) no-repeat 100% 100%;
    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 16px 'Ubuntu', sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  button {
    cursor: pointer;
  }
`;
