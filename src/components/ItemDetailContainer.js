import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

function ItemDetailContainer() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const addToCart = () => {
    // Agregar el producto al carrito con la cantidad seleccionada
    // Puedes usar la función addToCart que definiste en App.js
    // Debes pasar el producto y la cantidad al addToCart
  };

  return (
    <div className="container">
      <h2>Detalles del Producto {product.name}</h2>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={`Imagen de ${product.name}`} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Precio: ${product.price}</p>
          <p className="card-text">Categoría: {product.category}</p>
          <p className="card-text">Prestaciones: {product.brand}</p>
          <p className="card-text">Peso: {product.weight}</p>
          <p className="card-text">Colores: {product.color}</p>
          <div className="form-group">
            <button onClick={addToCart} className="btn btn-primary">
              Agregar al Carrito
            </button>
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
