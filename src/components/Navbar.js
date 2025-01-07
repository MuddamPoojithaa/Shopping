// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'; // Importing CSS for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Shop</h1>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
