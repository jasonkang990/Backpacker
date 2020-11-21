import React from 'react';
import './ItemSpawn.css';
import Item from './Item';

export default class ItemSpawn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdOffset: 0
      
    };
    this.onBoardChange = this.onBoardChange.bind(this)
  }
  onBoardChange(b, c) {
    
    this.props.onBoardChange(b, c)
    
  }
  render() {
    
    return (
      <div className="itemSpawn inBox">
        <Item board = {this.props.board} onBoardChange = {this.onBoardChange}/>
      </div>
    )
  }
}
