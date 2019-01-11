import { gql } from 'apollo-server-koa';

export const Page = gql`
  extend type Query {
    page(id: ID): Page
  }

  type Page {
    id: ID!
    url: String
    content: String
  }
`;
