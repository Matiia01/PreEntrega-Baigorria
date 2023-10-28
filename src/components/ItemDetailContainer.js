import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemCount from './ItemCount'; 

const ItemDetailContainer = ({ addToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'Dajajs', id);
      console.log("Product ID:", id);
      const productSnapshot = await getDoc(productRef);
      console.log("Product Snapshot:", productSnapshot.data()); 
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      } else {
        navigate('/');
      }
    }
    fetchData();
  }, [id, navigate]);
  

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="container">
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
          <ItemCount
        initial={1}
        stock={10}
        onAdd={(count) => addToCart(product, count)}
      />
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
