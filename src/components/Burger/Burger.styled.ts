import styled from "styled-components";
import { colors } from '../../global';

export const StyledBurger = styled.button<{open: boolean}>`
  top: 4%;
  left: 4%;
  width: 2rem;
  height: 2rem;
  position: absolute;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  :hover {
    div {
      background-color: ${({ open }) => (open ? colors.yellowmellow : colors.mediumblue )};
      
      @media (max-width: 600px) {
        background-color: ${({ open }) => (open ? colors.yellowmellow : colors.lightbrown )}; 
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
    background-color: white;

    background-color: ${({ open }) => (open ? colors.pearl : colors.mediumblue )}; 


    @media (min-width: 600px) {
      background-color: ${({ open }) => (open ? colors.pearl : colors.lightbrown )}; 
    }

    

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
