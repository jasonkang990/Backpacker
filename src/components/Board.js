import React from 'react';
import Square from './Square';
import './Board.css';
import { noSquares, noRow } from '../config';



export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.board
    }
    // this.handler = this.handler.bind(this)
  }
  // handler(num) {
  //   let newBoard = this.state.board;
  //   newBoard[num] = 0;
  //   this.setState({
  //     board:newBoard
  //   })
  // }
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
      if (this.state.board[i] !== 'w') {
        row.push(this.renderSquare(i, true, this.state.board[i]));
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
