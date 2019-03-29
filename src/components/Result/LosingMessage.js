import React from 'react';

const LosingMessage = (props) => {
  return props.lost ? <div className="result text-center mt-3">
    <h1 className="text-danger">You lose!</h1>
  </div> : null
};

export default LosingMessage;
