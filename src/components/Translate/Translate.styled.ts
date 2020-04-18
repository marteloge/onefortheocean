import styled from 'styled-components';

export const StyledTranslateSelect = styled.select<{ open: boolean }>`
  top: 4%;
  left: 10%;
  width: 20vw;
  height: 2rem;
  position: fixed;
  z-index: 1;
  margin-left: 15px;

  font-size: 30px;
  font-family: 'Annie Use Your Telescope', cursive;
  background-color: #be8b7b;
  border: none;
  color: #fdf2e9;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in-out;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
