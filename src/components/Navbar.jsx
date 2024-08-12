import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Shopping Website</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/shop" activeClassName="active-link">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active-link">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/stories" activeClassName="active-link">Stories</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
