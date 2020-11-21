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
  constructor(props) {
    super(props);
    this.state = {
      board:Array(36).fill('w')
    };
    this.handleBoard = this.handleBoard.bind(this);
  }
  
  handleBoard(b, c) {
    let newBoard = this.state.board;
    newBoard[b] = c;
    this.setState({board:newBoard});
  }

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
