/* eslint-disable no-unused-vars */
import React from 'react';

import './Product.scss';

function Product(props) {
  return (
    <div className="product">
    <img src={props.image} alt="product" width="100%" />
    <div className="product-info">
        <span className="product-name font-bold">{props.name}</span>
        <span className="product-price font-bold">{props.price}</span>
    </div>
    </div>
  );
}

export default Product;
