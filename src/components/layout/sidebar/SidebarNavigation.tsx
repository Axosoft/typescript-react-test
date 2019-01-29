import * as React from 'react';
import { Flex } from 'rebass';
import NavigationItem from './NavigationItem';

const SidebarNaviation = () => (
  <Flex flexDirection='column'>
    <NavigationItem text='ACCOUNT INFO' icon={['far', 'user']} path='/asdf' />
    <NavigationItem text='UPGRADE TO PRO' icon={['far', 'rocket']} path='/' />
    <NavigationItem text='OAUTH APPS' icon={['far', 'shield-check']} path='/' />
    <NavigationItem text='REFERRALS' icon={['far', 'gift']} path='/' />
  </Flex>
);

export default SidebarNaviation;
