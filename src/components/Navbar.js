import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/" className="navbar-brand">Fitness Gym</Link>
    <div className="navbar-links">
      <Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
  );
};

export default Navbar;

