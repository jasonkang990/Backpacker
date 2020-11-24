import React from 'react';
import Board from "./Board";

export default class Game extends React.Component {
  onBoardChange(b) {
    this.props.onBoardChange(b)
  }

  render() {
    return (
      <Board board = {this.props.board} onBoardChange = {this.props.onBoardChange} />
    );
  }
}