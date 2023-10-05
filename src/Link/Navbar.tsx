import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="/" className="brand-logo">
          React入门实战（二）
        </a>

        <ul className="right">
          <li>
            <Link to="/">Home页面</Link>
          </li>
          <li>
            <Link to="/about">About页面</Link>
          </li>
          <li>
            <Link to="/contact">Contact页面</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
