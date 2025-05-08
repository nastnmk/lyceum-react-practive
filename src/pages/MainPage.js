import logo from '../logo.svg';
import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import './MainPage.css';
import { products } from '../data/products';


function MainPage({cart, setCart, setCartCount}) {

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartCount(updatedCart.length);
  };


  return (
    <div className="main-container">
      <h2>Товары</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
        ))}
      </div>

    </div>
  );
}

export default MainPage;