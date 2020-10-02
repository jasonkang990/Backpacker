import React from 'react';
import './App.css';
import ItemSpawn from './components/ItemSpawn';
import Game from './components/Game';
import Ship from './components/Ship';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ItemSpawn />
        <Game />
        <Ship />
      </>
    );
  }
}
