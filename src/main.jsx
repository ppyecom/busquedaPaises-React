import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery} from '@apollo/client';
import App from './App.jsx'
import './index.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
