import React from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';
import { FormattedMessage } from 'react-intl';

import { SupportedLanguage } from '../../i18n';

export type Props = {
  open: boolean;
  setLocale: Function;
  locale: SupportedLanguage;
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
      <StyledLink to="/thanks">
        <FormattedMessage id="route.gratitude.title" />
      </StyledLink>
    </StyledMenu>
  );
};
