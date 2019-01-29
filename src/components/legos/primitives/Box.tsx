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

export const CustomBox = styled.div<LayoutProps>`
  ${LAYOUT};
`;

export const CustomFlex = styled(CustomBox)<LayoutProps & FlexProps>`
  ${flex}
`;
