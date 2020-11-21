import React from 'react';
import './Backpacker.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';

export default class Backpacker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:Array(36).fill('w')
    };
    this.handleBoard = this.handleBoard.bind(this);
  }
  
  handleBoard(b, c) {
    let newBoard = this.state.board;
    newBoard[b] = c;
    this.setState({board:newBoard});
  }

  render() {
    return (
      <div className = "outer container">
        <div className = "flex-container" id = "overContainer">
        <ItemSpawn board = {this.state.board} onBoardChange = {this.handleBoard}/>
        <Game board = {this.state.board} onBoardChange = {this.handleBoard}/>
        </div>
        <Ship />
      </div>
    );
  }
}
