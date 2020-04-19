import styled from 'styled-components';
import { colors } from '../../global';

export const StyledBurger = styled.button<{ open: boolean }>`
  top: 5%;
  left: ${({ open }) => (open ? '27vw' : '4%')};
  width: 2rem;
  height: 2rem;
  position: fixed;
  background: transparent;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    left: ${({ open }) => (open ? '37vw' : '4%')};
  }

  @media (max-width: 600px) {
    top: 3%;
    left: ${({ open }) => (open ? '85%' : '4%')};
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      div {
        background-color: ${({ open }) =>
          open ? colors.yellowmellow : colors.mediumblue};

        @media (max-width: 600px) {
          background-color: ${({ open }) =>
            open ? colors.yellowmellow : colors.lightbrown};
        }
      }
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: ${({ open }) =>
      open ? colors.pearl : colors.mediumblue};

    @media (min-width: 600px) {
      background-color: ${({ open }) =>
        open ? colors.pearl : colors.lightbrown};
    }

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
