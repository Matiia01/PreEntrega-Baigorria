import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product, addToCart, showAddToCartButton }) => {
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Precio: ${product.price}</p>
          <Link to={`/item/${product.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
          {showAddToCartButton && (
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          )}
        </div>
      </div>
    );
  }
  

export default Item;
