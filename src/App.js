/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import ProductList from './components/ProductList/ProductList';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <ProductList />
      <Services />
    </div>
  );
}

export default App;
