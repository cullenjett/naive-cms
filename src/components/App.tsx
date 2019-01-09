import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './Header';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
