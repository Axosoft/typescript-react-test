// import { Button as RebassButton } from 'rebass';
import styled from 'styled-components';
import {
//   // borderColor,
//   // BorderColorProps,
//   // color,
  space,
//   // SpaceProps,
//   // TextColorProps,
} from 'styled-system';
import { get } from '../../themes/utils';

// const getBackgroundColor =
//   (defaultColor: string) => (props: any) => props.asdf ? get('grey')(props) : get(defaultColor)(props);

// const hasError =
//   (error: string, fallback: string) => (props: any) => props.error ? get(error)(props) : get(fallback)(props);

export const PrimaryButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  /* color: white; */
  border: 2px solid green;
  &:disabled {
    background-color: ${get('colors.disabled')};
  }
  ${space}
`;
