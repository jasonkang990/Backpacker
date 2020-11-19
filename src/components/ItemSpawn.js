import React from 'react';
import './ItemSpawn.css';
import Item from './Item';

export default class ItemSpawn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdOffset: 0
    };
  }
  
  render() {
    return (
      <div className="itemSpawn inBox">
        <Item />
      </div>
    )
  }
}
