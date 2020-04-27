/// <reference types="react" />
import { SupportedLanguage } from '../../i18n';
export declare type Props = {
    open: boolean;
    setLocale: Function;
    locale: SupportedLanguage;
    setOpen: (v: boolean) => void;
};
declare const Menu: (props: Props) => JSX.Element;
export default Menu;
