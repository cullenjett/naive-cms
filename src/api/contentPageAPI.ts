import { ContentPage } from '../interfaces/ContentPage';
import { getItem, saveItem } from '../utils/storage';

const STORAGE_NAMESPACE = 'contentPages';

export const contentPageAPI = {
  all(): Promise<ContentPage[]> {
    const pages = getItem<ContentPage[]>(STORAGE_NAMESPACE) || [];
    return Promise.resolve(pages);
  },

  delete(id: number): Promise<void> {
    const pages = getItem<ContentPage[]>(STORAGE_NAMESPACE) || [];
    const updatedPages = pages.filter((page) => page.id !== id);
    saveItem(STORAGE_NAMESPACE, updatedPages);
    return Promise.resolve();
  },

  edit(id: number, updatedPage: ContentPage): Promise<void> {
    const pages = getItem<ContentPage[]>(STORAGE_NAMESPACE) || [];
    const updatedPages = pages.map((page) => {
      if (page.id !== id) {
        return page;
      }

      return { ...page, ...updatedPage };
    });
    saveItem(STORAGE_NAMESPACE, updatedPages);
    return Promise.resolve();
  },

  find(id: number): Promise<ContentPage | undefined> {
    const pages = getItem<ContentPage[]>(STORAGE_NAMESPACE) || [];
    const page = pages.find((p) => p.id === id);
    return Promise.resolve(page);
  },

  save(contentPage: ContentPage): Promise<ContentPage> {
    const pages = getItem<ContentPage[]>(STORAGE_NAMESPACE) || [];
    saveItem(STORAGE_NAMESPACE, [...pages, contentPage]);
    return Promise.resolve(contentPage);
  },
};
