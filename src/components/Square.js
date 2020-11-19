import React from 'react';
import './Square.css';

export default class Square extends React.Component {

  render() {
    
    return (
      <div
        className={`square taken ${this.props.className || ''}`}
        id={this.props.id}
        
      ></div>
    );
  }
}
