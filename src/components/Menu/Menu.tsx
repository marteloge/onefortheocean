import React from "react";
import { StyledMenu } from "./Menu.styled";

import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

export type Props = {
  open: boolean
}

export const Menu = (props: Props) => {
  return (
    <StyledMenu open={props.open}>
      <Link to="/"><FormattedMessage id='route.home.title' /></Link>
      <Link to="/about"><FormattedMessage id='route.about.title' /></Link>
      <Link to="/contact"><FormattedMessage id='route.contact.title' /></Link>
      <Link to="/credits"><FormattedMessage id='route.credits.title' /></Link>
    </StyledMenu>
  );
};
