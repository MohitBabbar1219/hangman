import React from 'react';

const NextMovie = (props) => {
  return props.show ? <div className={"next-movie text-center mt-2"}>
      <button onClick={props.nextMovie} className="btn text-primary btn-outline-primary">Next Movie!</button>
    </div> : null;
};

export default NextMovie;
