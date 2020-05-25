import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer/GameContainer';

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <GameContainer />
    </div>
  );
}

export default App;
