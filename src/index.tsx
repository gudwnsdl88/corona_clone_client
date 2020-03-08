import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/AppContainer';
import { ApolloProvider } from 'react-apollo';
import client from './Apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
