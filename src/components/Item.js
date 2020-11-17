import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';
import { shapes } from '../config';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];

    // let score = 0;
    // for (let j = 0; j < this.shape.length; j++) {
    //   score += this.shape[j].reduce(function (sum, string) {
    //       if (string !== 'w') {
    //         return sum + 10;
    //       } else {
    //         return sum;
    //       }
    //   });
    // }
    // this.score = score;
  }

  renderSquare(i, color, transparent=false) {
    if (transparent) {
      return (
        <Square
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className= "item-square square-transparent"
        />
      );
    } else {
      return (
        <Square
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className= {`item-square ${color}`}
        />
      );
    }
  }
  onStop = (ev) => {
    console.log(ev.target.parent);
  }
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    let rows = [], row = [];
    let nRow = this.shape.length;
    let nCol = this.shape[0].length;

    for (let i = 0; i < nRow; i++) {
      for (let j = 0; j < nCol; j++) {
        if (this.shape[i][j] !== 'w') {
          row.push(this.renderSquare(i * nRow + j, this.shape[i][j], false ));
        } else {
          row.push(this.renderSquare(i * nRow + j, this.shape[i][j], true));
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
