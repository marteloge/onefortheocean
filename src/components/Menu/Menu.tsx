import React from "react";
import { StyledMenu } from "./Menu.styled";

export type Props = {
  open: boolean
}

export const Menu = (props: Props) => {
  return (
    <StyledMenu open={props.open}>
      <a href="/">
        About us
      </a>
      <a href="/">
        Pricing
      </a>
      <a href="/">
        Contact
      </a>
    </StyledMenu>
  );
};
