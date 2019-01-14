import { gql } from 'apollo-server-koa';

export const Page = gql`
  extend type Query {
    page(id: ID): Page
  }

  extend type Mutation {
    createPage(page: NewPageInput): Page
  }

  input NewPageInput {
    url: String
    content: String
  }

  type Page {
    id: ID!
    url: String
    content: String
  }
`;
