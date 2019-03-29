import React from 'react';

const WinningMessage = (props) => {
  return props.won ? <div className="result text-center mt-3">
    <h1 className="text-success">You win!</h1>
  </div> : null
};

export default WinningMessage;
