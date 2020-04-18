import styled from 'styled-components';

import { colors, fonts, calculateResponsiveSize } from '../../global';

export const StyledTranslation = styled.div<{ open: boolean }>`
  bottom: 20px;
  width: 30vw;
  position: fixed;
  z-index: 1;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-around;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  padding: 0 1em;

  img {
    max-width: ${calculateResponsiveSize(24, 30)};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`;

export const StyledButton = styled.button<{ selected: boolean }>`
  font-size: ${calculateResponsiveSize(20, 24)};
  font-family: ${fonts.annie};
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? colors.yellowmellow : colors.pearl)};
`;
