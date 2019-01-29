// import * as React from 'react';

import { Text } from 'rebass';
import styled from 'styled-components';

import { get } from 'src/themes/utils';
// import { color } from 'styled-system';
// import { color, TextColorProps } from 'styled-system';

interface IFormLabelProps {
  // defaultColor?: string;
  color?: string;
  error?: boolean;
  required?: boolean;
}

// CQ: does theme lookup on props.color work?
export const FormLabel = styled(Text)<IFormLabelProps>`
  color: ${(props) => props.error ? get('colors.error')(props) : get(`color.${props.color}`)(props)};
`;

// const FormLabelText = styled(Text)`
//   ${color};
// `;

// export const FormLabel = ({ color, error }: IFormLabelProps) => <FormLabelText color={error ? 'error' : color} />;

FormLabel.defaultProps = {
  fontSize: 1,
};
