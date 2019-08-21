import { createGlobalStyle } from 'styled-components';

import { colors } from '~/styles';

import LexendDeca from '~/assets/font/LexendDeca.woff';
import LexendDeca2 from '~/assets/font/LexendDeca.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lexend Deca';
    src: url(${LexendDeca}) format('woff'), url(${LexendDeca2}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Lexend Deca', sans-serif;
    height: 100vh;
  }

  body {
    background-color: ${colors.bgBody};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
