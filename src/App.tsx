import * as React from 'react';
import { Flex } from 'rebass';

import MainContent from './components/layout/maincontent/MainContent';
import Sidebar from './components/layout/sidebar/Sidebar';
// import styled from 'styled-components';

// the new way
// type APP_PROPS = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & ICustomProps;

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        flex="auto"
        color="text.light.primary"
        bg="ui.primary"
      >
        <Sidebar />
        <MainContent />
      </Flex>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
