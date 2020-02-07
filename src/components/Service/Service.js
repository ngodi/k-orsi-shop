/* eslint-disable no-unused-vars */
import React from 'react';

import './Service.scss';

function Service(props) {
  return (
    <div className="service">
     <i className={props.icon}></i>
     <p className="service-title">
         {props.title}
     </p>
     <p className="service-desc">
         {props.description}
     </p>
    </div>
  );
}

export default Service;
