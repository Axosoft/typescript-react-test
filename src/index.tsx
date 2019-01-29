import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './domain';
import './index.css';
import { defaultTheme } from './themes/default';
import './utils/iconUtils';
// import registerServiceWorker from './registerServiceWorker';

const theme = defaultTheme;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.text.light.primary};
    font-family: ${theme.fonts.normal};
    font-size: ${theme.fontSizes[1]}px;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
// registerServiceWorker();
