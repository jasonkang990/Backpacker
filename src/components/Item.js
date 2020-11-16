import React from 'react';
import Draggable from 'react-draggable';
import Square from './Square';

export default class Item extends React.Component {
  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle"><Square className="item-square"/></div>
        </div>
      </Draggable>
    )
  }
}
