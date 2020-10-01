import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function Square(props) {
  return (
    <button className="square">
    </button>
  );
}
export class itemSpawn extends React.Component {
  renderItemSpawn() {
    return (
      <div className = "itemSpawn">
          
      </div>
    )
  }
  render() {
    return (
      <div className = "itemSpawn">
          
      </div>
    )
  }
}
export class shipDiv extends React.Component {
  renderShipDiv() {
    return (
      <div className = "shipDiv">
        <button className="ship">
      </button>
      </div>
    )
  }
  render() {
    return (
      <div className = "shipDiv">
        <button className="ship">
      </button>
      </div>
    )
  }
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
          />
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(<itemSpawn />, document.getElementById("root"));
ReactDOM.render(<Game />, document.getElementById("root"));








