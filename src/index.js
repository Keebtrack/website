import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const render = Component => {
  ReactDOM.render(<AppContainer>
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  </AppContainer>, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}