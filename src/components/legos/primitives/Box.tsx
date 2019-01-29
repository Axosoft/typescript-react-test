import styled from 'styled-components';
import {
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  flex,
  FlexBasisProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  JustifySelfProps,
} from 'styled-system';
import { LAYOUT, LayoutProps } from './constants';

export const Box = styled.div<LayoutProps>`
  ${LAYOUT};
`;

type FlexContainerProps =
  FlexDirectionProps &
  FlexWrapProps &
  FlexBasisProps &
  AlignItemsProps &
  AlignContentProps &
  JustifySelfProps &
  AlignSelfProps &
  JustifyContentProps;

export const Flex = styled('p')<LayoutProps & FlexContainerProps>`
  display: flex;
  ${flex}
`;

Flex.defaultProps = {
  display: 'block',
  flexDirection: 'row',
};
