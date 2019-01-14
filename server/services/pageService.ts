import { Db, ObjectID } from 'mongodb';

import { Page } from '../interfaces/index';

const COLLECTION_NAME = 'pages';

export interface PageService {
  find: (id: string) => Promise<Page>;
  create: (page: Page) => Promise<Page | undefined>;
}

export const pageService = (db: Db): PageService => {
  const pagesCollection = db.collection(COLLECTION_NAME);

  return {
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
