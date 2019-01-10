import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentPageIndex } from './contentPage/ContentPageIndex';
import { EditContentPage } from './contentPage/EditContentPage';
import { Header } from './Header';
import { NewContentPage } from './contentPage/NewContentPage';

const Home: React.FC<{}> = () => <h1>Home</h1>;

export class App extends React.Component<{}> {
  render() {
    return (
      <div className="app">
        <Header />

        <div style={{ padding: '16px 32px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages" component={ContentPageIndex} />
            <Route path="/pages/new" component={NewContentPage} />
            <Route path="/pages/:id/edit" component={EditContentPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
