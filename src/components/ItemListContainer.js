import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Item from './Item';

function ItemListContainer({ greeting, addToCart }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'Dajajs');
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    }

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => category ? product.category === category : true);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <Item product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
