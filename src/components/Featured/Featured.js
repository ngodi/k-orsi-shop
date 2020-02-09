import React from 'react';

import './Featured.scss';

import Circle from '../Circle/Circle';
import Button from '../Button/Button';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top-featured">
          <span className="featured-title">
            <p>
              Our Featured Item
            </p>
          </span>
          <span className="featured-desc">
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             </p>
            </span>
          <div className="featured-controls">
             <i class="fas fa-arrow-right"></i>
             <i class="fas fa-arrow-left"></i>
          </div>
      </div>
      <div className="bottom-featured">
        <div className="number">
          <p>01</p>
          <p></p>
        </div>
        <img src="./images/featured.png" alt="featured product" width="60%" />
        <div className="color-choice">
          <p>Color<br />Choice</p>
         <Circle color="fas fa-circle yellow-circle" />
         <Circle color="fas fa-circle green-circle" />
         <Circle color="fas fa-circle blue-circle" />
         <Circle color="fas fa-circle pink-circle" />
          
        </div>
      </div>
      <div className="centered-item">
         <Button color="white-btn" text="See All Item" />
      </div>
     
    </div>
  );
}

export default Featured;
