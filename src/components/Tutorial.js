
import React from 'react';
import './Tutorial.css';

export default class Tutorial extends React.Component {
  render() {
    return (
      <div className="tutorial">
        &emsp;&emsp;To play the game: <br/>
        &emsp;&emsp;1) Drag items from the left side to the grid <br/>
        &emsp;&emsp;2) Fit as many items as you can <br/>
        &emsp;&emsp;3) When you can't fit anymore items, press ship it <br/>
        &emsp;&emsp;4) Score is across lifetime <br/> 
      </div>
    );
  }
}