import { FontAwesomeIcon as fa } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from 'styled-system';

// import { get } from '../../themes/utils';

export const Icon = styled(fa) <SpaceProps & FontSizeProps & ColorProps>`
  ${space}
  ${fontSize}
  ${color}
`;

Icon.displayName = 'Icon';
