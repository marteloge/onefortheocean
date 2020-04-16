import React from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';

import { FormattedMessage } from 'react-intl';

export type Props = {
  open: boolean;
};

export const Menu = (props: Props) => {
  return (
    <StyledMenu open={props.open}>
      <StyledLink to="/" exact={true}>
        <FormattedMessage id="route.home.title" />
      </StyledLink>
      <StyledLink to="/about">
        <FormattedMessage id="route.about.title" />
      </StyledLink>
      <StyledLink to="/contact">
        <FormattedMessage id="route.contact.title" />
      </StyledLink>
      <StyledLink to="/credits">
        <FormattedMessage id="route.credits.title" />
      </StyledLink>
    </StyledMenu>
  );
};
