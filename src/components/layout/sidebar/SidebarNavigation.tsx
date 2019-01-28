import * as React from 'react';
import { Flex } from 'rebass';
import NavigationItem from './NavigationItem';

const SidebarNaviation = () => (
  <Flex flexDirection="column">
    <NavigationItem text="hello world" icon={['far', 'user']} path="/asdf" />
    <NavigationItem text="hello two" icon={['far', 'rocket']} path="/" />
    <NavigationItem text="hello three" icon={['far', 'shield-check']} path="/" />
    <NavigationItem text="hello four" icon={['far', 'gift']} path="/" />
  </Flex>
);

export default SidebarNaviation;
