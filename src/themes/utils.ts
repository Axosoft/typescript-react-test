import { get as getKey, themeGet } from 'styled-system';
import { defaultTheme } from './default';

//
export const get = (key: string) => themeGet(key, getKey(defaultTheme, key));
