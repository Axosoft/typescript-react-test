import styled from 'styled-components';
import { Box } from './Box';
import {
  FLEX_CONTAINER,
  FLEX_ITEM,
  FlexContainerProps,
  FlexItemProps,
} from './constants';

export const Flex = styled(Box) <FlexContainerProps & FlexItemProps> `
  ${FLEX_CONTAINER}
  ${FLEX_ITEM}
`;
Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};
