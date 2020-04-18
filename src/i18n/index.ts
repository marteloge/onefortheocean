import nb from './lang_nb';
import en from './lang_en';

export const languages = {
  nb,
  en,
};

export type SupportedLanguage = 'nb' | 'en';

export const getMessages = (
  locale: SupportedLanguage
): { [key: string]: string } => languages[locale];

export const getMessage = (locale: SupportedLanguage, key: string): string =>
  getMessages(locale)[key];
