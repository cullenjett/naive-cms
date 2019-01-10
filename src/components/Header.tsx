import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.SFC<{}> = () => {
  return (
    <header style={{ padding: '16px', background: '#e8e8e8' }}>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: 8 }}>
            <NavLink exact to="/" activeStyle={{ fontWeight: 600 }}>
              Home
            </NavLink>
          </li>
          <li style={{ display: 'inline-block' }}>
            <NavLink exact to="/pages" activeStyle={{ fontWeight: 600 }}>
              All Pages
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
