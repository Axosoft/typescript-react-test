import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Flex, Link, Text } from 'rebass';

import { Icon } from '../../legos/FontAwesomeIcon';

interface INavigationItemProps {
  text: string;
  icon: IconProp;
  path: string;
}

const NavigationItem = ({ text, icon, path }: INavigationItemProps) => (
  <Link href={path} color='text.light.primary'>
    <Flex p={2} color>
      <Icon icon={icon} />
      <Text>{text}</Text>
    </Flex>
  </Link>
);

export default NavigationItem;
