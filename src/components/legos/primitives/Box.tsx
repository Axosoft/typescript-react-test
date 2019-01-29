import styled from 'styled-components';
import { BORDER, BorderProps, COMMON, CommonProps, LAYOUT, LayoutProps } from './constants';

export const Box = styled.div<CommonProps & LayoutProps & BorderProps>`
  ${BORDER}
  ${COMMON};
  ${LAYOUT};
`;
