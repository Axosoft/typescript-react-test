import styled from 'styled-components';
import { COMMON, CommonProps, TYPOGRAPHY, TypographyProps } from './primitives/constants';

interface ILinkProps {
  underline?: boolean;
}

export const Link = styled.a<ILinkProps & CommonProps & TypographyProps>`
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  ${COMMON};
  ${TYPOGRAPHY};
`;

Link.defaultProps = {
};
