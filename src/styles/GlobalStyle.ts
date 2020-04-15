import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './defaults';

import { calculateResponsiveSize } from '../styles/helpers';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    width: 100%;
    background-color: ${ colors.pearl };
    font-family: ${ fonts.annie };
    font-size: ${ calculateResponsiveSize(14, 16) };
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  h1 {
    font-weight: 200;
    font-size: ${ calculateResponsiveSize(42, 60) };
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  h2 {
    font-family: ${ fonts.roboto };
    font-size: calc(20px + (27 - 20) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
  }

  h3 {
    font-weight: 200;
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }
`;

export default GlobalStyle;