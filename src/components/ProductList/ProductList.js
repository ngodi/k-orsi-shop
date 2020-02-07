/* eslint-disable no-unused-vars */
import React from 'react';

import './ProductList.scss';

import Product from '../Product/Product';
import Button from '../Button/Button';
import productData from '../Product/productData';

function ProductList() {
    const productList = productData.map(product => (
        <Product image={product.image} name={product.name} price={product.price} />
    ))
  return (
    <div className="product-list">
      <div className="product-list-header">
          <span className="product-list-title sub-heading">All Products</span>
          <div className="product-list-header-buttons">
              <Button color="yellow" text="Hand Made" />
              <Button color="gray" text="Factory Made" />
          </div>
      </div>
      <div className="product-list-content">
         {productList}
      </div>
      <div className="centered-item">
         <Button color="white-btn" text="See All Item" />
      </div>
    </div>
  );
}

export default ProductList;
