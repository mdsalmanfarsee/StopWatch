import React, { useState, useEffect } from 'react';
import ParticlesComponent from './components/Particles';
import Cart from './components/Cart';
//import Items from './assets/products.json';
import { list } from './assets/products.js';
import './App.css'

function App() {
  
  const [products, setProducts] = useState(list);

  useEffect(() => {
    console.log('Products:', products);
  }, [products])


  return (
    <div className="App">
      <section>
        <header>
          <h1 className="header__title">Most Popular Products</h1>
        </header>
        <div className="most-popular-products">
          {products.map((product) => (
            <Cart key={product.id} products={product} />
          ))}
        </div>
      </section>
      <ParticlesComponent />
    </div>
  );
}

export default App
