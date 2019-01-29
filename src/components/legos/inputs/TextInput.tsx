// import * as React from 'react';
import styled from 'styled-components';
import {
  // borderColor,
  BorderColorProps,
  color,
  space,
  SpaceProps,
  TextColorProps,
  borderColor,
  ColorProps,
} from 'styled-system';
import { get } from '../../../themes/utils';

interface ITextInputProps {
  /** Use to represent form validation errors
   * @default false
   */
  error?: boolean;
}

type TEXT_INPUT_PROPS = SpaceProps & TextColorProps & BorderColorProps & ITextInputProps & HTMLInputElement;

const hasError =
  (error: string, fallback: string) =>
    (props: TEXT_INPUT_PROPS) => props.error ? get(error)(props) : get(fallback)(props);

// border-color: ${hasError('colors.error', 'colors.grey')};
export const TextInputComp = styled.input<TEXT_INPUT_PROPS>`
  margin: ${get('space.1')}px;
  padding: ${get('space.1')}px;
  border-radius: ${get('radii.1')}px;
  border-width: 2px;
  border-style: solid;
  ${borderColor}
  ${space};
  ${color};
`;

// type TEXT_INPUT_PROPS = ColorProps & SpaceProps ;

export const TextInput =
  (props: TEXT_INPUT_PROPS) => <TextInputComp {...props} borderColor={props.error ? 'error' : 'default'} />;
