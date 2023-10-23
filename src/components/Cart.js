import React from 'react';

function Cart({ cart }) {
  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - Cantidad: 1 - Precio total: ${product.price}
          </li>
        ))}
      </ul>
      <p>Precio total del carrito: ${cart.reduce((total, product) => total + product.price, 0)}</p>
    </div>
  );
}

export default Cart;
