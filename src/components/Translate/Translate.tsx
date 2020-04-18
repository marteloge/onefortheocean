import React from 'react';

import { SupportedLanguage, getMessage } from '../../i18n';
import { StyledTranslation, StyledButton } from './Translate.styled';

type Props = {
  locale: SupportedLanguage;
  setLocale: Function;
  languages: string[];
  open: boolean;
};

const Translate = (props: Props) => (
  <StyledTranslation open={props.open}>
    <img
      src="../../../assets/images/global.svg"
      className="icon icon-globe"
    ></img>
    {props.languages.map((item: string, index: number) => (
      <StyledButton
        selected={props.locale === item}
        key={index}
        onClick={() => props.setLocale(item)}
      >
        {getMessage(props.locale, `language.name.${item}`)}
      </StyledButton>
    ))}
  </StyledTranslation>
);

export default Translate;
