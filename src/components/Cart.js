import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
    const removeFromCart = (product) => {
        // Filtra el carrito para excluir el producto a eliminar
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    const removeAllItems = () => {
        setCart([]); // Elimina todos los productos del carrito
    };

    // Función para calcular el precio total del carrito
    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <div className="container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div>
                    <p>No hay productos en el carrito.</p>
                    <Link to="/">Ir al Inicio</Link>
                </div>
            ) : (
                <><div className="card-container">
                    {cart.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Cantidad: {item.quantity}</p>
                                <p className="card-text">Precio total: ${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(item)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div><div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Precio Total</h5>
                            <p className="card-text">Total: ${calculateTotal(cart)}</p>
                            {/* Botón para "Terminar mi compra" */}
                            <button className="btn btn-success">Terminar mi compra</button>
                            {/* Botón para "Eliminar Todo el Carrito" */}
                            <button onClick={removeAllItems} className="btn btn-danger">Eliminar Todo el Carrito</button>
                        </div>
                    </div></>
            )}
            {cart.length > 0 && (
                <div className="cart-widget">
                    {/* Contenido del CartWidget */}
                </div>
            )}
        </div>
    );
}

export default Cart;