import React, {Component} from 'react';

class GameLayout extends Component {
  render() {
    return (<div className="container p-4">
      <div className="w-100 text-center">
        <h2>Hangman: You either win the game of movies or you die</h2>
      </div>
      <div className="game-layout text-center">
        <div className="game-component w-50 d-inline-block bg-info">
          Game Area
        </div>
        <div className="animation-component w-50 d-inline-block bg-danger">
          Animation area
        </div>
      </div>
    </div>)
  }
}

export default GameLayout;
