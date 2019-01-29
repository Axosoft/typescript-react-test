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
import { Box } from './Box';
import { LayoutProps } from './constants';

type FlexContainerProps =
  FlexDirectionProps &
  FlexWrapProps &
  FlexBasisProps &
  AlignItemsProps &
  AlignContentProps &
  JustifySelfProps &
  AlignSelfProps &
  JustifyContentProps;

export const Flex = styled(Box) <LayoutProps & FlexContainerProps> `
  display: flex;
  ${flex}
`;
Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};
