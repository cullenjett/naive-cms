import { Db, ObjectID } from 'mongodb';

import { Page } from '../interfaces/index';

const COLLECTION_NAME = 'pages';

export interface PageService {
  find: (id: string) => Promise<Page>;
  create: (page: Page) => Promise<Page | undefined>;
  all: () => Promise<Page[]>;
}

export const pageService = (db: Db): PageService => {
  const pagesCollection = db.collection(COLLECTION_NAME);

  return {
    all: async () => {
      const pages = await pagesCollection.find().toArray();

      return pages.map((p) => {
        p.id = p._id.toString();
        return p;
      });
    },

    find: async (id) => {
      const page = await pagesCollection.findOne({ _id: new ObjectID(id) });

      page.id = page._id.toString();

      return page;
    },

    create: async (page) => {
      const insertResult = await pagesCollection.insertOne(page);
      const id = insertResult.insertedId;

      page.id = id.toString();

      return page;
    },
  };
};
