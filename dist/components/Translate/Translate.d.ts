/// <reference types="react" />
import { SupportedLanguage } from '../../i18n';
declare type Props = {
    locale: SupportedLanguage;
    setLocale: Function;
    languages: string[];
    open: boolean;
};
declare const Translate: (props: Props) => JSX.Element;
export default Translate;
