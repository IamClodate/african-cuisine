// src/Navbar.jsx
import React from 'react';
import logo from './mypics/logo.jpg';
 // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#products">Products</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



// For example, in a different component:
<div className="content" style={{ marginTop: '60px' }}>
  {/* Your content */}
</div>
