import { Db } from 'mongodb';

import { PageService } from '../services/pageService';

export interface Context {
  db: Db;
  pageService: PageService;
}
