import React, { RefObject } from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';
import { FormattedMessage } from 'react-intl';

import { SupportedLanguage, languages } from '../../i18n';

import Translate from '../Translate/Translate';
import Burger from '../Burger/Burger';

export type Props = {
  ref: RefObject<HTMLDivElement> | null;
  open: boolean;
  setLocale: Function;
  locale: SupportedLanguage;
  setOpen: (v: boolean) => void;
};

const Menu = (props: Props) => {
  return (
    <>
      <Burger open={props.open} setOpen={props.setOpen} />

      <Translate
        languages={Object.keys(languages)}
        locale={props.locale}
        setLocale={props.setLocale}
        open={props.open}
      />

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
    </>
  );
};

export default Menu;
