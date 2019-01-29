import * as React from 'react';
import { Flex } from 'rebass';

import MainContent from './components/layout/maincontent/MainContent';
import Sidebar from './components/layout/sidebar/Sidebar';
import { CustomBox } from './components/legos/primitives/Box';
// import styled from 'styled-components';

// the new way
// type APP_PROPS = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & ICustomProps;

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        flex="auto"
        color="text.light.primary"
        fontSize={2}
      >
        <Sidebar />
        <MainContent />
        <CustomBox width={100} height={500} background={'green'} />
      </Flex>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
