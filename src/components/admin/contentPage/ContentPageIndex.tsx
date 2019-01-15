import React from 'react';
import { Link } from 'react-router-dom';

import { AllContentPagesQuery, QUERY } from './queries/AllContentPagesQuery';
import { pagePaths } from './ContentPageRoutes';
import { previewPaths } from '../preview/PreviewRoutes';

export const ContentPageIndex: React.FC<{}> = () => {
  return (
    <AllContentPagesQuery query={QUERY}>
      {({ data }) => {
        if (!data || !data.pages) {
          return null;
        }

        const contentPages = data.pages;

        return (
          <section>
            <h1>
              Pages (<Link to={pagePaths.NEW}>Create new page</Link>)
            </h1>

            <ul>
              {contentPages.map((page) => (
                <li key={page.id}>
                  {page.url} <Link to={pagePaths.EDIT(page.id)}>(Edit)</Link>{' '}
                  <Link to={previewPaths.VIEW(page.id)}>(Preview)</Link>
                </li>
              ))}
            </ul>
          </section>
        );
      }}
    </AllContentPagesQuery>
  );
};
