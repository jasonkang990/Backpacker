import React from 'react';
import './Square.css';

export default class Square extends React.Component {
  render() {
    return (
      <div
        className={`square ${this.props.className || ''}`}
        id={this.props.id}
      >
      </div>
    );
  }
}
