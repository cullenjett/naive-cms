import { Db, ObjectID } from 'mongodb';

import { Page } from '../interfaces/index';

export interface PageService {
  find: (id: string) => Promise<Page>;
}

const COLLECTION_NAME = 'pages';

export const pageService = (db: Db): PageService => {
  const pagesCollection = db.collection(COLLECTION_NAME);

  return {
    find: async (id) => {
      const page = await pagesCollection.findOne({ _id: new ObjectID(id) });

      page.id = page._id.toString();

      return page;
    },
  };
};
