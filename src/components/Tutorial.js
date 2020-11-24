import { render } from '@testing-library/react';
import React from 'react';
import './Tutorial.css';

export default class Tutorial extends React.Component {
  render() {
    return (
      <div className="tutorial">
        To play the game: <br/>
        1) Drag items from the left side to the grid <br/>
        2) Fit as many items as you can <br/>
        3) When you can't fit anymore items, press ship it <br/>
        4) Score is across lifetime <br/> 
      </div>
    );
  }
}