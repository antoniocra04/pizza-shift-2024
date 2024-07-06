import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App.tsx';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { store } from '@store/index.ts';

import './index.scss';

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);
