import React from 'react';

import { SupportedLanguage, getMessage } from '../../i18n';
import { StyledTranslateSelect } from './Translate.styled';

type Props = {
  locale: SupportedLanguage;
  setLocale: Function;
  languages: string[];
  open: boolean;
};

const Translate = (props: Props) => (
  <StyledTranslateSelect
    open={props.open}
    defaultValue={props.locale}
    onChange={(e) => props.setLocale(e.target.value.toString())}
  >
    {props.languages.map((item: string) => (
      <option key={item} value={item}>
        {getMessage(props.locale, `language.name.${item}`)}
      </option>
    ))}
  </StyledTranslateSelect>
);

export default Translate;
