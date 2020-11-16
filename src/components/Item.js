import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';

export default class Item extends React.Component {
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <Draggable
        defaultPosition={{x: -4, y: -21}}
        grid={[99, 99]}
        {...dragHandlers}
      >
        <div>
          <Square className="item-square"/>
        </div>
      </Draggable>
    )
  }
}
