import React from 'react';
import './Backpacker.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';
import User from './components/User';
import Score from './components/Score';
import {serverUrl} from './config';
import axios from 'axios';

export default class Backpacker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:Array(36).fill('w'),
      score:0
    };
    this.handleBoard = this.handleBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }
  
  handleBoard(b, c, s) {
    let newBoard = this.state.board;
    newBoard[b] = c;
    this.setState({board:newBoard, score: this.state.score + s});
  }
  resetBoard() {
    
    this.setState({board:Array(36).fill('w'), score:0});
    this.updateScore();
  
    
  }

  async updateScore() {
    let username = await axios({
      method: 'get',
      url: serverUrl + 'user',
      withCredentials: true,
    });
    let response = await axios({
      method: 'post',
      url: serverUrl + 'update',
      data: {
        user: username,
        score: this.state.score,
      },
      withCredentials: true
    });
  }

  render() {
    return (
      <div className = "outer container">
        <div className = "flex-container" id = "overContainer">
        <ItemSpawn board = {this.state.board} onBoardChange = {this.handleBoard}/>
        <Game board = {this.state.board} onBoardChange = {this.handleBoard}/>
        </div>
        <User />
        <Ship resetBoard = {this.resetBoard}/>
        <Score score = {this.state.score}/>
      </div>
    );
  }
}
