import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageRoutes, pagePaths } from './contentPage/ContentPageRoutes';
import { Header } from './Header';

const Home: React.FC<{}> = () => <h1>Home</h1>;

export class App extends React.Component<{}> {
  render() {
    return (
      <div className="app">
        <Header />

        <div style={{ padding: '16px 32px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={pagePaths.INDEX} component={ContentPageRoutes} />
          </Switch>
        </div>
      </div>
    );
  }
}
