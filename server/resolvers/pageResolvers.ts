import { IResolverObject } from 'apollo-server-koa';

import { Context, Page } from '../interfaces';

export const pageResolvers: IResolverObject<Page, Context> = {
  Query: {
    page: async (_parent, args, ctx, _info) => {
      return ctx.pageService.find(args.id);
    },
  },

  Page: {},
};
