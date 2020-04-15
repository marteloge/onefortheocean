import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './defaults';

import { calculateResponsiveFontSize } from '../styles/helpers';

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
    font-size: ${ calculateResponsiveFontSize(14, 16) };
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  h1 {
    font-weight: 200;
    font-size: ${ calculateResponsiveFontSize(42, 60) };
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

  .App {
    //CREATE APP AS A STYLED APP
    
    /* display: grid;


    grid-template-columns: auto 300px auto;
    grid-column-start: 2; */

    /* height: "100%"; */
    /* margin: 0 20%;
    
    @media (max-width: 600px) {
      margin: 0;
    }

    @media (min-width: 601px) {
      margin: 0 10%;
    }

    @media (min-width: 750px) {
      margin: 0 15%;
    }
    
    @media (min-width: 950px) {
      margin: 0 20%;
    }

    @media (min-width: 1050px) {
      margin: 0 25%;
    }

    @media (min-width: 1250px) {
      margin: 0 30%;
    } */
  }
`;

export default GlobalStyle;