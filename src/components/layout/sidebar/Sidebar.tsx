import * as React from 'react';
import { Box } from 'rebass';
import ProfileSummary from './ProfileSummary';
import SidebarNaviation from './SidebarNavigation';

const Sidebar = () => {
  return (
    <Box
      bg="ui.sidebar"
      p={3}
      width="320px"
    >
    <ProfileSummary />
    <SidebarNaviation />
    </Box>
  );
}

export default Sidebar;
