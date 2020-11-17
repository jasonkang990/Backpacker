import React from 'react';
import './Ship.css';

export default class Ship extends React.Component {
  render() {
    return (
      <div className="shipDiv">
        <button className="ship button is-success">
          Ship it!
        </button>
      </div>
    );
  }
}