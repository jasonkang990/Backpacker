import React from 'react';
import './Backpacker.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';

export default class Backpacker extends React.Component {
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
