import { IResolverObject } from 'apollo-server-koa';

import { Context, Page } from '../interfaces';

export const pageResolvers: IResolverObject<Page, Context> = {
  Query: {
    page: async (_parent, args, ctx, _info) => {
      return ctx.pageService.find(args.id);
    },
    pages: async (_parent, args, ctx, _info) => {
      return ctx.pageService.all();
    },
  },

  Mutation: {
    createPage: async (_parent, args, ctx, _info) => {
      return ctx.pageService.create(args.page);
    },
  },

  Page: {},
};
