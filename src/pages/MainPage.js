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


// import Aside from '../components/Aside';
// import { useState } from 'react';

// function MainPage({ setCartCount }) {
//   const categories = ["Игровые ноутбуки", "Игровые мышки", "Гарнитуры", "Коврики"];
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const allProducts = [
//     { id: 1, name: "MSI Gaming Laptop", category: "Игровые ноутбуки" },
//     { id: 2, name: "Logitech G502", category: "Игровые мышки" },
//     { id: 3, name: "HyperX Cloud II", category: "Гарнитуры" },
//     { id: 4, name: "Razer Firefly", category: "Коврики" },
//   ];

//   const filteredProducts = selectedCategory
//     ? allProducts.filter(p => p.category === selectedCategory)
//     : allProducts;

//   const handleAddToCart = () => {
//     setCartCount(prev => prev + 1);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Aside categories={categories} onSelectCategory={setSelectedCategory} />
//       <main style={{ padding: '20px', flex: 1 }}>
//         <h1>{selectedCategory || 'Все товары'}</h1>
//         <ul>
//           {filteredProducts.map(product => (
//             <li key={product.id}>
//               {product.name} <button onClick={handleAddToCart}>В корзину</button>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default MainPage;
