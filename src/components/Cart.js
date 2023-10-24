import React from 'react';

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function Cart({ cart }) {
    return (
        <div className="container">
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio total: ${item.price * item.quantity}</p>
                    </li>
                ))}
            </ul>
            <p>Precio total del carrito: ${calculateTotal(cart)}</p>
        </div>
    );
}

export default Cart;
