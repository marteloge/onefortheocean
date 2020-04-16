import React from "react";
import { StyledBurger } from "./Burger.styled";

export type Props = {
  open: boolean,
  setOpen: Function
}

export const Burger = ( props: Props ) => {
  console.log("from burger", open)
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)} >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

