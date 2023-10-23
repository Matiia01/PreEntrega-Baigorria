import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // Copia el carrito actual y agrega el nuevo producto con la cantidad
    setCart([...cart, { ...product, quantity }]);
  };  

  return (
    <Router>
      <div>
        <NavBar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a FireShop!" addToCart={addToCart} />} />
          <Route path="/category/:category" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
