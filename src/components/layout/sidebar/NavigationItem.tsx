import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Text } from 'rebass';

import { Icon } from '../../legos/FontAwesomeIcon';
import { Link } from '../../legos/Link';
import { Flex } from '../../legos/primitives/Flex';

interface INavigationItemProps {
  text: string;
  icon: IconProp;
  path: string;
}

const NavigationItem = ({ text, icon, path }: INavigationItemProps) => (
  <Link href={path} color='text.light.secondary'>
    <Flex p={2} borderRadius={2}>
      <Icon fontSize={2} icon={icon} mr={3} fixedWidth />
      <Text fontSize={2}>{text}</Text>
    </Flex>
  </Link>
);

export default NavigationItem;
