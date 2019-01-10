import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageRoutes, pagePaths } from './contentPage/ContentPageRoutes';
import { Header } from './Header';
import { PreviewRoutes } from './preview/PreviewRoutes';

export class App extends React.Component<{}> {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/preview" component={PreviewRoutes} />
          <Route component={AppRoutes} />
        </Switch>
      </main>
    );
  }
}

const AppRoutes: React.FC<{}> = () => {
  return (
    <div className="app">
      <Header />

      <div style={{ padding: '16px 32px' }}>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route path={pagePaths.INDEX} component={ContentPageRoutes} />
        </Switch>
      </div>
    </div>
  );
};
