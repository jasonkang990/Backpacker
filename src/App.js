import React from 'react';
import Backpacker from './Backpacker';
import Login from './Login';
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
        <div className = "flex-section">
          <nav>
            <ul>
              <li className = "inCube">
                <Link to="/">Home</Link>
              </li>
              <li className = "inCube2">
                <Link to="/login">Login / Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Backpacker />
          </Route>
        </Switch>
      </Router>
    );
  }
}
