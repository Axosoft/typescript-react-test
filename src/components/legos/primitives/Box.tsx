import styled from 'styled-components';
// import { styles, space, background, borderRadius, borders, width, fontSize } from 'styled-system';
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  flex,
  FlexProps,
  height,
  HeightProps,
  size,
  SizeProps,
  width,
  WidthProps,
} from 'styled-system';

const LAYOUT = compose(
  display,
  size,
  width,
  height,
  color,
  background,
);

type LayoutProps = BackgroundProps & ColorProps & DisplayProps & HeightProps & SizeProps & WidthProps;

export const Box = styled.div<LayoutProps>`
  ${LAYOUT};
`;

export const Flex = styled(Box)<LayoutProps & FlexProps>`
  display: flex;
  ${flex}
`;
