import React from 'react';
import './Ship.css';

export default class Ship extends React.Component {
  constructor(props) {
    super(props)
    this.resetBoard = this.resetBoard.bind(this);
  }

  async resetBoard() {
    await this.props.resetBoard();
  }

  render() {
    return (
        <button onClick = {this.resetBoard} className="ship button is-success">
          Ship it!
        </button>
    );
  }
}