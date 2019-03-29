import React from 'react';
import GameHint from "../GameHint";
import AnswerFields from "../AnswerFields";
import Alphabets from "../Alphabets";
import LosingMessage from "../Result/LosingMessage";
import WinningMessage from "../Result/WinningMessage";
import NextMovie from "../NextMovieButton";

const GameArea = (props) => {
  return (<div className="game-component component w-50 p-3 d-inline-block">
    <GameHint chances={props.chances} hint={props.hint}/>
    <AnswerFields guessedName={props.guessedName}/>
    <Alphabets disableAllKeys={props.disableAllKeys || props.won} tries={props.tries} letterPressed={props.letterPressed}/>
    <LosingMessage lost={props.disableAllKeys && !props.won}/>
    <WinningMessage won={props.won}/>
    <NextMovie show={props.disableAllKeys || props.won} nextMovie={props.nextMovie} />
  </div>);
};

export default GameArea;
