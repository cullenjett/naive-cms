import { Db, ObjectID } from 'mongodb';
import { IResolverObject } from 'apollo-server-koa';

export interface Context {
  db: Db;
}

export interface Page {
  id: number;
  url: string;
  content: string;
}

export const pageResolvers: IResolverObject<Page, Context> = {
  Query: {
    page: async (_parent, args, ctx, _info) => {
      const pagesCollection = ctx.db.collection('pages');
      const { id } = args;
      const page = await pagesCollection.findOne({ _id: new ObjectID(id) });

      page.id = page._id.toString();

      return page;
    },
  },

  Page: {},
};
