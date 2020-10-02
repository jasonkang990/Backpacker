import React from 'react';
import "./Game.css";
import Board from "./Board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(25).fill(null)}],
      stepNumber: 0,
      xIsNext: true
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