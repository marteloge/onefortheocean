import styled from 'styled-components';

import { colors, calculateResponsiveSize } from '../../global';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30vw;
  padding-left: 2em;
  padding-top: 20vh;
  background-color: ${colors.lightbrown};
  display: flex;
  flex-direction: column;
  z-index: 1;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 900px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.pearl};
  font-size: ${calculateResponsiveSize(30, 50)};
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));

  &.active {
    color: ${colors.yellowmellow};
    text-decoration: underline;
  }

  :hover {
    color: ${colors.yellowmellow};
    text-decoration: underline;
  }
`;
