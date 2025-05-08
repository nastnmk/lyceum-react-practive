import './App.css';
import './index.css';
import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage';
import Header from './components/Header';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from './data/products'; // массив с товарами

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<MainPage cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/cart" element={<SecondPage cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;
