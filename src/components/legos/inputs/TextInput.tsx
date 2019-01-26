// import * as React from 'react';
import styled from 'styled-components';
import {
  // borderColor,
  BorderColorProps,
  color,
  space,
  SpaceProps,
  TextColorProps,
} from 'styled-system';
import { get } from '../../../themes/utils';

interface ITextInputProps {
  /** Use to represent form validation errors
   * @default false
   */
  error?: boolean;
}

// CQ: theme lookup on props.borderColor (styledsystem does for us?)
const getBorderColor = (props: ITextInputProps & BorderColorProps) =>
  props.error ? get('colors.error')(props) : props.borderColor;

export const TextInput = styled.input<SpaceProps & TextColorProps & BorderColorProps & ITextInputProps>`
  margin: ${get('space.1')}px;
  padding: ${get('space.1')}px;
  border-radius: ${get('radii.1')}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${getBorderColor};
  ${space};
  ${color};
`;

TextInput.defaultProps = {
  borderColor: 'grey',
};
