import React from 'react';
import "./Game.css";
import Board from "./Board";
import { noSquares } from "../config";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(noSquares).fill(null)}],
      stepNumber: 0
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}