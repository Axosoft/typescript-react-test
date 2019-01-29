import styled from 'styled-components';
// import { styles, space, background, borderRadius, borders, width, fontSize } from 'styled-system';
import { compose, styles, flex } from 'styled-system';

const LAYOUT = compose(
  styles.display,
  styles.size,
  styles.width,
  styles.height,
  styles.color,
  styles.background,
);

export const CustomBox = styled.div`
  ${LAYOUT};
`;

export const CustomFlex = styled(CustomBox)`
  ${flex}
`;
