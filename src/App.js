import React from 'react';
import './App.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


export default class App extends React.Component {
  render() {
    return (
      <>
      
      <div className = "outer container">
        <div className = "flex-container" id = "overContainer">
        <ItemSpawn />
        <Game />
        </div>
        <Ship />
      </div>
      
      </>
    );
  }
}
