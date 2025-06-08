import React from 'react';
import './App.css';
import Product from './components/Product';

function App() {

  const products = [
        {
        name: "Apple",
        img: "/images/apple.png",
        code: "0001",
        price: 12
    },
     {
        name: "Banana",
        img: "/images/banana.png",
        code: "0002",
        price: 8
    },
     {
        name: "Orange",
        img: "/images/orange.jpg",
        code: "0003",
        price: 10
    }
]

  return (
    <>
        <h1>Products</h1>
    <div className='product-list'>
      {products.map((product) => (
        <Product product={product}/>
      ))}
    </div>
    </>
  );
}

export default App;
