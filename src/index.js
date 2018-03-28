import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

const link = new HttpLink({
  uri: 'http://localhost:9094/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({ link, cache: new InMemoryCache(), });

const render = Component => {
  ReactDOM.render(<AppContainer>
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </ApolloProvider>
  </AppContainer>, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}