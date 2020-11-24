import React from 'react';
import Backpacker from './Backpacker';
import Login from './Login';
import Leaderboard from './Leaderboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login / Signup</Link>
              </li>
              <li>
                <Link to="/scores">Leaderboard</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/scores">
            <Leaderboard />
          </Route>
          <Route path="/">
            <Backpacker />
          </Route>
        </Switch>
      </Router>
    );
  }
}
