import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdminRoutes } from './admin/AdminRoutes';

export const App: React.FC<{}> = () => {
  return (
    <main>
      <Switch>
        <Route path="/admin" component={AdminRoutes} />
        <Redirect to="/admin" />
      </Switch>
    </main>
  );
};
