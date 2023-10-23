import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data';

function ItemListContainer({ greeting }) {
  const { category } = useParams();

  const filteredProducts = products.filter((product) => category ? product.category === category : true);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={`Imagen de ${product.name}`} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
