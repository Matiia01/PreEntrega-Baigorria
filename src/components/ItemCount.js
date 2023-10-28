import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary" onClick={handleDecrement}>
          -
        </button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
