import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './domain';

ReactDOM.render(
  <Provider store={store}>
    <App id="foo" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
