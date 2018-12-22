import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import types from './types';

const defaults = {
  AUTH_TOKEN: null
};

// QUERIES

// MUTATIONS
const resolvers = {};
export { defaults, resolvers };
