import { gql } from 'apollo-server-koa';

import { Page } from './Page';

// We need a base Query type to extend in individual type definitions
const Query = gql`
  type Query {
    _empty: Boolean
  }
`;

// We need a base Mutation type to extend in individual type definitions
const Mutation = gql`
  type Mutation {
    _empty: Boolean
  }
`;

export const typeDefs = [Query, Mutation, Page];
