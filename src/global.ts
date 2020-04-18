import { createGlobalStyle } from 'styled-components';

export const colors = {
  mediumblue: '#77BCD4',
  skyblue: '#B0D5EC',
  lightblue: '#93CEF0',
  crystal: '#B7D9EE',
  peach: '#FFC9B2',
  lightgreen: '',
  mediumgreen: '#B4DC94',
  teal: '#81CDB9',
  lightteal: '#93D2D6',
  paleyellow: '#FFEDD3',
  lightyellow: '#FFDB99',
  mediumyellow: '#FFD08B',
  yellowmellow: '#FBE69B',
  mintgreen: '#C7F0CE',
  seagreen: '#AFDDCB',
  hotpink: '#F98080',
  lightpink: '#FFB9B0',
  babypink: '#FDCCCC',
  lightbrown: '#BE8B7B',
  purple: '#C0BADE',
  pearl: '#fdf2e9',
};

export const fonts = {
  annie: "'Annie Use Your Telescope', cursive",
  roboto: "'Roboto Slab', serif;",
};

export const calculateResponsiveSize = (min: number, max: number) =>
  `calc(${min}px + (${max} - ${min}) * ((100vw - 300px) / (1600 - 300)))`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    width: 100%;
    background-color: ${colors.pearl};
    font-family: ${fonts.annie};
    font-size: ${calculateResponsiveSize(14, 16)};
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  h1 {
    font-weight: 200;
    font-size: ${calculateResponsiveSize(42, 60)};
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  h2 {
    font-family: ${fonts.roboto};
    font-size: calc(20px + (27 - 20) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
  }

  h3 {
    font-weight: 200;
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }
`;
