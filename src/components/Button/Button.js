import React from 'react';

import './Button.scss';

const Button = (props) => {
  return (
    <div className="button">
      <button className={props.color}>{props.text}</button>
    </div>
  );
}

export default Button;
