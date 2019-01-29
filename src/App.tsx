import * as React from 'react';

import MainContent from './components/layout/maincontent/MainContent';
import Sidebar from './components/layout/sidebar/Sidebar';
import { Flex } from './components/legos/primitives/Flex';

// import styled from 'styled-components';

// the new way
// type APP_PROPS = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps> & ICustomProps;

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        color='colors.text.light.primary'
        flex='auto'
      >
        <Sidebar />
        <MainContent />
      </Flex>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
