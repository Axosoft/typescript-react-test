import styled from 'styled-components';
// import { styles, space, background, borderRadius, borders, width, fontSize } from 'styled-system';
import { background, color, compose, display, flex, height, size, width } from 'styled-system';

const LAYOUT = compose(
  display,
  size,
  width,
  height,
  color,
  background,
);

export const CustomBox = styled.div`
  ${LAYOUT};
`;

export const CustomFlex = styled(CustomBox)`
  ${flex}
`;
