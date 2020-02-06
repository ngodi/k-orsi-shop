import React from 'react';

import './Circle.scss';

const Circle = (props) => {
  return (
    <div className="circle">
      <i className={props.color} ></i>
    </div>
  );
}

export default Circle;
