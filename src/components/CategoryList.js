import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList({ categories }) {
  return (
    <ul className="nav">
      {categories.map((category) => (
        <li className="nav-item" key={category}>
          <Link to={`/category/${category}`} className="nav-link">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
