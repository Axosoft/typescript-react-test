import { get as getKey, themeGet } from 'styled-system';
import { defaultTheme } from './default';

const getFallback = (key: string) => {
  // const keyArray = key.split('.');
  // return keyArray[keyArray.length - 1];
  const val = getKey(defaultTheme, key);
  if (!val) {
    console.error('tried to access theme value that is not defined'); // tslint:disable-line
    return '';
  }
  return val;
};

export const get = (key: string) => themeGet(key, getFallback(key));
