import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageRoutes, pagePaths } from './contentPage/ContentPageRoutes';
import { Header } from './Header';
import { PreviewRoutes, previewPaths } from './preview/PreviewRoutes';

export class App extends React.Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route path={previewPaths.INDEX} component={PreviewRoutes} />
          <Route component={AppRoutes} />
        </Switch>
      </main>
    );
  }
}

const AppRoutes: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Header />

      <div style={{ padding: '16px 32px' }}>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route path={pagePaths.INDEX} component={ContentPageRoutes} />
        </Switch>
      </div>
    </React.Fragment>
  );
};
