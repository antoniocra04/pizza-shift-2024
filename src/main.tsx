import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from '@store/index.ts';

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
