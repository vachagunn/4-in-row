import React from 'react';

import './App.css';
import './styles/compiled/style.css';

import { createEmptyBoard } from './utils/board';

import { getNextPlayer } from './utils/players';

function App() {
  return (
    <div id="root">
      <title>4 в ряд</title>

      <div className="game-container">
        <h1>4 в ряд</h1>

        <div className="game-turn">Ходит игрок: {getNextPlayer('green') === 'green' ? 'зеленый' : 'оранжевый'}</div>
        
        <div className="game-board">
          {createEmptyBoard()}
        </div>
      </div>
    </div>
  );
}

export default App;
