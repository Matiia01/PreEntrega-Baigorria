import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar({ cartCount }) {
  const categories = ["Guantes", "Cascos", "Indumentaria", "Botas", "ERA"];

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Link className="navbar-brand" to="/">FireShop</Link>
      <Nav className="mr-auto">
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          {categories.map((category) => (
            <NavDropdown.Item key={category} as={Link} to={`/category/${category}`}>
              {category}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
      <CartWidget cartCount={cartCount} />
    </Navbar>
  );
}

export default NavBar;
