import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';

import { typeDefs } from './schema/index';
import { resolvers } from './resolvers/index';

export const app = new Koa();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
