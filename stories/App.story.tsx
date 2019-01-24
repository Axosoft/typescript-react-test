import * as React from 'react';

// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import App from '../src/App';
import { store } from '../src/domain';

storiesOf('App', module)
  .addParameters({
    info: {
      header: false,
      // inline: true,
      text: `
      # App is the main component`,
    },
  })
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('primary', () => (
    <App requiredProp="asdf"/>
  ));
