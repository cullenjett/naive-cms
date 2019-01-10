import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { PreviewPage } from './PreviewPage';

export const PreviewRoutes: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <section>
      <button
        type="button"
        onClick={() => history.goBack()}
        style={{
          position: 'fixed',
          top: 15,
          right: 15,
          boxShadow: '0 8px 8px 0 rgba(0,0,0,.15)',
        }}
      >
        Leave preview
      </button>

      <Switch>
        <Route path="/preview/:id" component={PreviewPage} />
      </Switch>
    </section>
  );
};
