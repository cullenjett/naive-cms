import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageRoutes, pagePaths } from './contentPage/ContentPageRoutes';
import { Header } from './Header';
import { previewPaths, PreviewRoutes } from './preview/PreviewRoutes';

export const AdminRoutes: React.FC<{}> = () => {
  return (
    <Switch>
      <Switch>
        <Route path={previewPaths.INDEX} component={PreviewRoutes} />
        <Route component={NonPreviewRoutes} />
      </Switch>
    </Switch>
  );
};

const NonPreviewRoutes: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Header />

      <div style={{ padding: '16px 32px' }}>
        <Switch>
          <Route exact path="/admin" component={() => <h1>Dashboard</h1>} />
          <Route path={pagePaths.INDEX} component={ContentPageRoutes} />
        </Switch>
      </div>
    </React.Fragment>
  );
};
