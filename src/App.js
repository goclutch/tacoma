// External Imports
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// Internal Imports
import Routes from './routes';
import Views from './view';
import apiAddress from './api/config';
import { defaults, resolvers } from './resolvers';
import { AUTH_TOKEN } from './utility/constants';
import './App.css';

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      email
      token
      profile {
        id
      }
    }
  }
`;
const history = createHistory();

const httpLink = createHttpLink({
  uri: apiAddress
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
  console.log('TOKEN', token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  clientState: {
    defaults,
    resolvers
    // typeDefs
  }
});

class App extends Component {
  componentDidMount() {
    this.setState({ token: JSON.parse(localStorage.getItem(AUTH_TOKEN)) });
  }
  signOut() {
    this.setState({ token: null });
  }
  state = {
    token: null
  };
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={CURRENT_USER}>
          {({ loading, error, data, networkStatus, refetch }) => {
            if (networkStatus === 4) return 'Refetching!';
            if (loading) return <text>"Loading"</text>;
            // if (error) return `Error! ${error.message}`;
            console.log('CURRENT USER RETURN', data);
            return (
              <BrowserRouter history={history}>
                <MuiThemeProvider>
                  <div className="App" style={{ backgroundColor: '#eee' }}>
                    <Views.AppBar data={data} signOut={this.signOut} />
                    <Routes data={data} getCurrentUser={refetch} />
                  </div>
                </MuiThemeProvider>
              </BrowserRouter>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
