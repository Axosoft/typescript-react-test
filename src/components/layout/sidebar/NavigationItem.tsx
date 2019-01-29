import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Flex, Link, Text } from 'rebass';

import styled from 'styled-components';
import {
  borderRadius,
  BorderRadiusProps,
} from 'styled-system';

import { Icon } from '../../legos/FontAwesomeIcon';

interface INavigationItemProps {
  text: string;
  icon: IconProp;
  path: string;
}

const RoundedFlex = styled(Flex)<BorderRadiusProps>`
  ${borderRadius};
`;

const NavigationItem = ({ text, icon, path }: INavigationItemProps) => (
  <Link href={path} color="text.light.secondary">
    <RoundedFlex p={2} fontSize={2} borderRadius={2}>
      <Icon icon={icon} mr={3} fixedWidth />
      <Text>{text}</Text>
    </RoundedFlex>
  </Link>
);

export default NavigationItem;
