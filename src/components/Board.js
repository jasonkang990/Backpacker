import React from 'react';
import Square from './Square';
import './Board.css';
import { noSquares, noRow } from '../config';

let arr = [];
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(noSquares).fill(1)
    }
  }
  renderSquare(i, filled=false) {
    if (filled) {
      return (
        <Square
          id={`square-${i}`}
          key={`board-${i}`}
          className="square-filled taken"
        />
      )
    }
    
    return (
      <Square id={`square-${i}`} key={`board-${i}`}/>
    );
  }

  render() {
    let rows = [], row = [];

    for (let i = 0; i < noSquares; i++) {
      if (this.state.board[i]) {
    
        row.push(this.renderSquare(i));
      } else {
        row.push(this.renderSquare(i), true);
      }
      if (i % noRow === noRow - 1) {
        rows.push(
          <div
            className="board-row"
            key={`row-${(i + 1) / noRow}`}
          >
            {[...row]}
          </div>
        );
        row.length = 0;
      }
    }
    
    return (
      <div className="board">{rows}</div>
    );
  }
}
