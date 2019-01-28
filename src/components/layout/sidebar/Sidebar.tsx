import * as React from 'react';
import { Box } from 'rebass';
import ProfileSummary from './ProfileSummary';
import SidebarNaviation from './SidebarNavigation';

const Sidebar = () => {
  return (
    <Box
      bg="secondary"
      p={2}
      width="320px"
    >
    <ProfileSummary />
    <SidebarNaviation />
    </Box>
  );
}

export default Sidebar;
