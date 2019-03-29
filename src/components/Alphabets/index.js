import React from 'react';

const Alphabets = (props) => {
  return (<div className="answer-options text-center mt-2">
    {"abcdefghijklmnopqrstuvwxyz".split('').map(alphabet => <button key={alphabet} disabled={props.tries.includes(alphabet) || props.disableAllKeys} onClick={() => props.letterPressed(alphabet)} className="option-alphabets text-capitalize bg-light btn m-2 text-dark btn-dark">
      {alphabet}
    </button>)}
  </div>);
};

export default Alphabets;
