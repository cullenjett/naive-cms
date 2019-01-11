import React from 'react';
import { NavLink } from 'react-router-dom';

import { pagePaths } from './contentPage/ContentPageRoutes';

export const Header: React.SFC<{}> = () => {
  return (
    <header style={{ padding: '16px', background: '#e8e8e8' }}>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: 8 }}>
            <NavLink exact to="/admin" activeStyle={{ fontWeight: 600 }}>
              Dashboard
            </NavLink>
          </li>
          <li style={{ display: 'inline-block' }}>
            <NavLink
              exact
              to={pagePaths.INDEX}
              activeStyle={{ fontWeight: 600 }}
            >
              All Pages
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
