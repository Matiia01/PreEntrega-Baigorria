import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CartWidget({ cartCount }) {
  return (
    <Link to="/cart" className="btn btn-primary">
      <i className="fa fa-shopping-cart"></i>
      {cartCount > 0 && <span className="cart-item-count">{cartCount}</span>}
    </Link>
  );
}

export default CartWidget;
