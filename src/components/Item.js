import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';
import ItemSquare from './ItemSquare';
import { shapes } from '../config';


export default class Item extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      position: {x:0,y:0}
    }
    this.board = this.props.board;
    this.onStop = this.onStop.bind(this)
    this.onDrag = this.onDrag.bind(this)
    this.onBoardChange = this.onBoardChange.bind(this);
    this.newShape = this.newShape.bind(this)
    this.render = this.render.bind(this)
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
        <ItemSquare
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className= "item-square square-transparent"
        />
      );
    } else {
      return (
        <ItemSquare
          id={`itembox-${i}`}
          key={`itembox-${i}`}
          className= {`item-square ${color}`}
        />
      );
    }
  }
  onBoardChange(b, c) {
    this.props.onBoardChange(b, c);
  }
  onStop(e, data) {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < 36; i++) {
      let obj = document.getElementById(`square-${i}`);
      arr.push(obj.getBoundingClientRect());
    }
    let rows = document.getElementById(`it1`).children;
    let tilesToChange = [];
    let colorToChange = [];
    for (let i = 0; i < rows.length; i++) {
      let currRow = rows[i].children;
      for (let j = 0; j < currRow.length; j++) {
        if (currRow[j].classList.contains('square-transparent')) {
          continue;
        }
        let coords = currRow[j].getBoundingClientRect()
        coords.x = coords.x + 40;
        coords.y = coords.y + 40;
        let insideBlock, index;
        for (let k = 0; k < arr.length; k++) {

          if (coords.x < arr[k].right && coords.x > arr[k].left && coords.y > arr[k].top && coords.y < arr[k].bottom) {
            insideBlock = arr[k];
            index = k;
            break;
          }
        }
        if (index === undefined || insideBlock === undefined) {
          this.setState({position:{x:0,y:0}});
          return;
        }
        if (this.board[index] !== 'w') {
          this.setState({position:{x:0,y:0}});
          return;
        } else {
          tilesToChange.push(index);
          let colorry;
          switch(currRow[j].classList.item(2)) {
            case 'g':
              colorry = 'g';
              break;
            case 'b':
              colorry = 'b';
              break;
            case 'r':
              colorry = 'r';
              break;
            case 'p':
              colorry = 'p';
              break;
            case 'm':
              colorry = 'm';
              break;
          }
          colorToChange.push(colorry);
        }
        
      }
    }
    
    for (let i = 0; i < tilesToChange.length; i++) {
      this.onBoardChange(tilesToChange[i], colorToChange[i]);
    }
    this.newShape();
  }
  newShape() {
    this.setState({shape: shapes[Math.floor(Math.random() * shapes.length)],
    position: {x:0,y:0}})
  }
  onDrag(e,data) {
    e.preventDefault();
    let item =  document.getElementById(`it1`);
  
    let coords = item.getBoundingClientRect();

    this.setState({position:{x:data.x,y:data.y}})
  }
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop, onDrag: this.onDrag};
    let rows = [], row = [];
    let nRow = this.state.shape.length;
    let nCol = this.state.shape[0].length;
    for (let i = 0; i < nRow; i++) {
      for (let j = 0; j < nCol; j++) {
        if (this.state.shape[i][j] !== 'w') {
          
          row.push(this.renderSquare(i * nRow + j, this.state.shape[i][j], false ));
        } else {
          
          row.push(this.renderSquare(i * nRow + j, this.state.shape[i][j], true));
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
      
      bounds = {'.flex-container'}
      {...dragHandlers}
      position= {this.state.position}
      grid = {[25,25]}
      >
        <div id ="it1" className = "it"
        // draggable ={true}
        // onDragStart = {this.dragStart}
        // onDragOver = {this.dragOver}>
        >
          {rows}
        </div>
        </Draggable>
    )
  }
}
