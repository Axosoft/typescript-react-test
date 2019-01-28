import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './domain';
import './index.css';
import { defaultTheme } from './themes/default';
import './utils/iconUtils';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
// registerServiceWorker();
