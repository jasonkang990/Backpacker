import React from 'react';
import './Ship.css';

export default class Ship extends React.Component {
  constructor(props) {
    super(props)
    this.resetBoard = this.resetBoard.bind(this);
  }
  resetBoard() {
    this.props.resetBoard();
  }

  render() {
    return (
      // <div className="shipDiv">
        <button onClick = {this.resetBoard} className="ship button is-success">
          Ship it!
        </button>
      
    );
  }
}