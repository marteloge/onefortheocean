import nb from './lang_nb';
import en from './lang_en';
import fr from './lang_fr';
import es from './lang_es';

export const languages = {
  nb,
  en,
  fr,
  es,
};

export type SupportedLanguage = 'nb' | 'en' | 'fr' | 'es';

export const getMessages = (
  locale: SupportedLanguage
): { [key: string]: string } => languages[locale];

export const getMessage = (locale: SupportedLanguage, key: string): string =>
  getMessages(locale)[key];
