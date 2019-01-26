import { Text } from 'rebass';
import styled from 'styled-components';

import { get } from 'src/themes/utils';
// import { color, TextColorProps } from 'styled-system';

interface IFormLabelProps {
  // defaultColor?: string;
  error?: boolean;
  required?: boolean;
}

// CQ: does theme lookup on props.color work?
export const FormLabel = styled(Text)<IFormLabelProps>`
  color: ${(props) => props.error ? get('colors.error')(props) : props.color};
`;

FormLabel.defaultProps = {
  fontSize: 1,
};
