import styled from 'styled-components';

interface IButtonProps {
  /** Boolean indicating whether the button should render with a more vibrant style
   * @default false
   */
  primary?: boolean;
}

export const Button = styled.button`
  background: ${(props: IButtonProps) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: .5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const DangerButton = styled(Button)`
  background: #fdedec ;
  border-color: red;
  color: red;
`;
