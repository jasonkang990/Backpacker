import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';
import { shapes } from '../config';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  renderSquare(i, transparent=false) {
    if (transparent) {
      return (
        <Square
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className="item-square square-transparent"
        />
      );
    } else {
      return (
        <Square
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className="item-square"
        />
      );
    }
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    let rows = [], row = [];
    let nRow = this.shape.length;
    let nCol = this.shape[0].length;

    for (let i = 0; i < nRow; i++) {
      for (let j = 0; j < nCol; j++) {
        if (this.shape[i][j]) {
          row.push(this.renderSquare(i * nRow + j));
        } else {
          row.push(this.renderSquare(i * nRow + j, true));
        }
      }
      rows.push(
        <div
          className="board-row"
          key={`itemrow-${i}`}
        >
          {[...row]}
        </div>
      );
      row = [];
    }

    return (
      <Draggable
        defaultPosition={{x: -53, y: -31}}
        grid={[99, 99]}
        {...dragHandlers}
      >
        <div>
          {rows}
        </div>
      </Draggable>
    )
  }
}
