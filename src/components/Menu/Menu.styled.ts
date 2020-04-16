import styled from "styled-components";

import { colors, calculateResponsiveSize } from '../../global';

export const StyledMenu = styled.nav<{open: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20vw;
  padding-left:2em;
  padding-top:20vh;

  background-color: ${colors.lightbrown};

  display: flex;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  a {
    color: ${ colors.pearl };
    text-decoration: none;
    font-size: ${ calculateResponsiveSize(30, 50) };
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));      
  }

  a:hover {
    color: ${ colors.yellowmellow };
  }
`;
