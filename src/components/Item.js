import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';
import ItemSquare from './ItemSquare';
import { shapes } from '../config';


export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
    this.state = {
      position: {x:0,y:0}
    }
    this.onStop = this.onStop.bind(this)
    this.onDrag = this.onDrag.bind(this)
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
  // dragStart(e) {
  //   let target = e.target;
  //   e.dataTransfer.setData('id', target.id);
  //   target.style.display = 'block';
  // }
  // dragOver(e) {
  //   e.stopPropagation();
    
  // }
  onStop(e, data) {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < 36; i++) {
      let obj = document.getElementById(`square-${i}`);
      arr.push(obj.getBoundingClientRect());
    }
    let item =  document.getElementById(`it1`);
    let rows = document.getElementById(`it1`).children;
    let coords = rows[0].children[0].getBoundingClientRect()
    // console.log(coords.x +" " + arr[0].right + " " + coords.x + " " + arr[0].left + '  ' +  coords.y + ' ' +  arr[0].top + ' ' +  coords.y + ' ' + arr[0].bottom)
    for (let i = 0; i < rows.length; i++) {
      let currRow = rows[i].children;
      for (let j = 0; j < currRow.length; j++) {
        let coords = currRow[j].getBoundingClientRect()
        let obj = currRow[j];
        
        let insideBlock, index;
        for (let k = 0; k < arr.length; k++) {

          if (coords.x < arr[k].right && coords.x > arr[k].left && coords.y > arr[k].top && coords.y < arr[k].bottom) {
            console.log("ran")
            insideBlock = arr[k];
            index = k;
            break;
          }
        }
        
        if (document.elementFromPoint(arr[index].x,arr[index].y).classList.contains('taken')) {
          console.log("rn")
        }
        
      }
    }
    
    console.log(arr[0]);
    
    
   
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
      
      bounds = {'.flex-container'}
      {...dragHandlers}
      position= {this.state.position}
      grid = {[100,100]}
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
