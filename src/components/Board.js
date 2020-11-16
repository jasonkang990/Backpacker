import React from 'react';
import Square from './Square';
import './Board.css';
import { noSquares, noRow } from '../config';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square id={`square-${i}`} key={`board-${i}`}/>
    );
  }

  render() {
    let rows = [], row = [];

    for (let i = 0; i < noSquares; i++) {
      row.push(this.renderSquare(i));
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
