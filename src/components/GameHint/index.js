import React from 'react';

const GameHint = (props) => {
  return <div className="movie-hint text-center">
    <h3 className="text-info"><span className="text-success">Hint: </span>{props.hint}</h3>
    <h3 className="text-info"><span className="text-success">Chances: </span>{props.chances}</h3>
  </div>;
};

export default GameHint;
