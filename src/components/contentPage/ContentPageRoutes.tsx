import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageIndex } from './ContentPageIndex';
import { EditContentPage } from './EditContentPage';
import { NewContentPage } from './NewContentPage';

export const pagePaths = {
  INDEX: '/pages',
  NEW: '/pages/new',
  EDIT: (id: number | string = ':id') => `/pages/${id}/edit`,
};

export const ContentPageRoutes: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path={pagePaths.INDEX} component={ContentPageIndex} />
      <Route path={pagePaths.NEW} component={NewContentPage} />
      <Route path={pagePaths.EDIT()} component={EditContentPage} />
    </Switch>
  );
};
