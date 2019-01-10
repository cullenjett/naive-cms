import { ContentPage } from '../interfaces/ContentPage';
import { getItem, saveItem } from '../utils/storage';

const NAMESPACE = 'contentPages';

export const contentPageAPI = {
  all(): Promise<ContentPage[]> {
    const pages = getItem<ContentPage[]>(NAMESPACE) || [];
    return Promise.resolve(pages);
  },

  save(contentPage: ContentPage): Promise<ContentPage> {
    const pages = getItem<ContentPage[]>(NAMESPACE) || [];
    saveItem(NAMESPACE, [...pages, contentPage]);
    return Promise.resolve(contentPage);
  },
};
