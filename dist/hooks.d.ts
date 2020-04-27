import { RefObject } from 'react';
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, (v: T) => void];
export declare const useOnClickOutside: (ref: RefObject<HTMLDivElement>, closeMenu: () => void) => void;
