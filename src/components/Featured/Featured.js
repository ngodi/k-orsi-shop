import React from 'react';

import './Featured.scss';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top-featured">
          <span className="featured-title"><p>Our Featured Item</p></span>
          <span className="featured-desc"></span>
          <div className="featured-controls"></div>
      </div>
    </div>
  );
}

export default Featured;
