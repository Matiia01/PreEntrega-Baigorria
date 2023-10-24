import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    quantity = parseInt(quantity, 10); // Asegura que quantity sea un número entero
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
  
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };
  
  

  return (
    <Router>
      <div>
        <NavBar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a FireShop!" addToCart={addToCart} />} />
          <Route path="/category/:category" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
