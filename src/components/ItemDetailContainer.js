import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount'; // Importa el componente ItemCount

const ItemDetailContainer = ({ addToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      {/* Flecha de retroceso */}
      <Link to="#" onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-left"></i>
      </Link>
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
          <ItemCount // Agrega el componente ItemCount
            initial={1} // Define el valor inicial
            stock={10} // Define el stock disponible
            onAdd={(count) => addToCart(product, count)} // Callback para agregar al carrito
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
