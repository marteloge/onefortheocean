import React from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';
import { FormattedMessage } from 'react-intl';

export type Props = {
  open: boolean;
  setLocale: Function;
  locale: string;
  languages: string[];
};

export const Menu = (props: Props) => {
  return (
    <StyledMenu open={props.open}>
      <select
        defaultValue={props.locale}
        onChange={(e) => props.setLocale(e.target.value.toString())}
      >
        {props.languages.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

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
