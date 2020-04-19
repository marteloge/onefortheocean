import React, { useRef } from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';
import { FormattedMessage } from 'react-intl';

import { SupportedLanguage, languages } from '../../i18n';
import { useOnClickOutside } from '../../hooks';

import Translate from '../Translate/Translate';
import Burger from '../Burger/Burger';

export type Props = {
  open: boolean;
  setLocale: Function;
  locale: SupportedLanguage;
  setOpen: (v: boolean) => void;
};

const Menu = (props: Props) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => props.setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={props.open}>
        <StyledLink onClick={() => props.setOpen(false)} to="/" exact={true}>
          <FormattedMessage id="route.home.title" />
        </StyledLink>
        <StyledLink onClick={() => props.setOpen(false)} to="/about">
          <FormattedMessage id="route.about.title" />
        </StyledLink>
        <StyledLink onClick={() => props.setOpen(false)} to="/contact">
          <FormattedMessage id="route.contact.title" />
        </StyledLink>
        <StyledLink onClick={() => props.setOpen(false)} to="/thanks">
          <FormattedMessage id="route.gratitude.title" />
        </StyledLink>
      </StyledMenu>

      <Burger open={props.open} setOpen={props.setOpen} />

      <Translate
        languages={Object.keys(languages)}
        locale={props.locale}
        setLocale={props.setLocale}
        open={props.open}
      />
    </div>
  );
};

export default Menu;
