import no from './lang_no';
import en from './lang_en';

const languages = {
  no,
  en,
};

export type SupportedLanguage = 'en' | 'no';

export const getMessage = (
  locale: SupportedLanguage
): { [key: string]: string } => languages[locale];
