import React from 'react';

const AnswerFields = (props) => {
  return (<div className="answer-field-boxes text-center mt-4">
    {props.guessedName.split('').map( (letter, index) => <div key={letter + index} className="letter-field text-capitalize font-weight-bold d-inline-block bg-dark text-center text-light m-1">
      {letter}
    </div>)}
  </div>);
};

export default AnswerFields;
