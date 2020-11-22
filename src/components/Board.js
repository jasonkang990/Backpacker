import React from 'react';
import Square from './Square';
import './Board.css';
import { noSquares, noRow } from '../config';



export default class Board extends React.Component {
  constructor(props) {
    super(props);
    
    
  }
  renderSquare(i, filled, color) {
    if (filled) {
      return (
        
        <Square
          id={`square-${i}`}
          key={`board-${i}`}
          className= {`square-filled ${color}`}
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
      if (this.props.board[i] !== 'w') {
        row.push(this.renderSquare(i, true, this.props.board[i]));
      } else {
        row.push(this.renderSquare(i, false));
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
