import React, {Component} from 'react';
import './game-layout.css'
import GameArea from "../../components/GameArea";
import movies from './../../helpers/MovieList';

class GameLayout extends Component {
  state = {
    hint: "A Dream within a dream within a dream",
    index: 0,
    tries: "",
    chances: 5,
    guessedName: ".........",
    movieName: "inception",
    isGameOn: true,
    won: false
  };

  isLetterPresent = (letter) => this.state.movieName.includes(letter);

  nextMovie = () => {
    let nextMovie = movies[this.state.index + 1];
    this.setState({
      index: this.state.index + 1,
      hint: nextMovie.hint,
      movieName: nextMovie.name,
      tries: "",
      chances: 5,
      guessedName: nextMovie.name.split('').map(() => '.').join(''),
      isGameOn: true,
      won: false
    });
  };

  registerLetterPress = (letterPressed) => {
    if (this.isLetterPresent(letterPressed)) {
      let guessedSoFar = this.state.guessedName.split('');
      let currentMovie = movies[this.state.index].name;
      let currentGuessed = currentMovie.split('').map((currentLetter, index) => letterPressed === currentLetter ? letterPressed : guessedSoFar[index]).join('');
      this.setState({
        guessedName: currentGuessed,
        won: currentMovie === currentGuessed,
        tries: this.state.tries + letterPressed
      });
    } else {
      if (this.state.chances === 1) this.setState({isGameOn: false});
      this.setState({tries: this.state.tries + letterPressed, chances: this.state.chances - 1})
    }
  };

  render() {
    return (<div className="container p-4">
      <div className="w-100 text-center">
        <h2>Hangman: You either win the game of movies or you die</h2>
      </div>
      <div className="game-layout mt-5">
        <GameArea nextMovie={this.nextMovie} hint={movies[this.state.index].hint} won={this.state.won}
                  disableAllKeys={!this.state.isGameOn} tries={this.state.tries}
                  letterPressed={this.registerLetterPress} chances={this.state.chances}
                  guessedName={this.state.guessedName}/>
        <div className="animation-component component p-3 w-50 d-inline-block bg-secondary">
          Animation area
        </div>
      </div>
    </div>)
  }
}

export default GameLayout;
