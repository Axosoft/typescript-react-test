import styled from 'styled-components';

interface IButtonProps {
  /** Boolean indicating whether the button should render with a more vibrant style
   * @default false
   */
  primary?: boolean;
  margin?: number | null;
}

// would the emotion object syntax make this easier?
// could we just have one function that returns an object that we spread into the rest of the style
const getBackgroundColor = (primary?: boolean, disabled?: boolean) => {
  if (disabled) {
    return 'lightgrey';
  }
  if (primary) {
    return 'palevioletred';
  }
  return 'white';
};

const getColor = (primary?: boolean, disabled?: boolean) => {
  if (disabled) {
    return 'grey';
  }
  if (primary) {
    return 'white';
  }
  return 'palevioletred';
};

export const Button = styled.button<IButtonProps>`
  background: ${(props) => getBackgroundColor(props.primary, props.disabled)};
  color: ${({ primary, disabled }) => getColor(primary, disabled)};
  font-size: 1em;
  margin: ${(props: IButtonProps) => props.margin && props.margin === 1 ? '.5em' : 'none'};
  padding: 0.25em 1em;
  border: 2px solid ${({ disabled }) => disabled ? 'grey' : 'palevioletred'};
  border-radius: 3px;
`;

export const DangerButton = styled(Button)`
  background: #fdedec ;
  border-color: red;
  color: red;
`;

// better way to do disabled state so it can work with danger and success overrides?
// how to accomplish a 'successbutton' without making whole new getcolor functions?
