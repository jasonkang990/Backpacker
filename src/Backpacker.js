import React from 'react';
import './Backpacker.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';
import User from './components/User';
import Score from './components/Score';
import {serverUrl} from './config';
import axios from 'axios';
import Tutorial from './components/Tutorial';

export default class Backpacker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:Array(36).fill('w'),
      score:0,
      timesShipped:0,
    };
    this.handleBoard = this.handleBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }
  
  handleBoard(b, c, s) {
    let newBoard = this.state.board;
    newBoard[b] = c;
    this.setState({board:newBoard, score: this.state.score + s});
  }

  async resetBoard() {
    await this.updateScore();
    this.setState({board:Array(36).fill('w'), score:0, timesShipped:this.state.timesShipped + 1});
    
  }

  async updateScore() {
    let curr_score = this.state.score;
    let username = await axios({
      method: 'get',
      url: serverUrl + 'user',
      withCredentials: true,
    });
    await axios({
      method: 'post',
      url: serverUrl + 'update',
      data: {
        user: username.data,
        score: curr_score,
      },
      withCredentials: true
    });
  }

  render() {
    return (
      <>
        <div className = "outer container">
          <div className = "flex-container" id = "overContainer">
            <ItemSpawn board = {this.state.board} onBoardChange = {this.handleBoard}/>
            <Game board = {this.state.board} onBoardChange = {this.handleBoard}/>
          </div>
          <User numShip = {this.state.timesShipped}/>
          <Ship resetBoard = {this.resetBoard}/>
          <Score score = {this.state.score}/>
        </div>
        <Tutorial />
      </>
    );
  }
}
