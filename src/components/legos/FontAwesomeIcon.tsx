import { FontAwesomeIcon as fa } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { color, fontSize, space } from 'styled-system';

import { get } from '../../themes/utils';

export const Icon = styled(fa)`
  margin-right: ${get('space.1')}px;
  ${space}
  ${fontSize}
  ${color}
`;

Icon.displayName = 'Icon';
