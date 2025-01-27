import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Menu - Centered Links */}
        <div className="navbar-links">
          <a href="#home" className="navbar-link">
            Home
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <a href="#home" className="navbar-mobile-link" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="navbar-mobile-link" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className="navbar-mobile-link" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="navbar-mobile-link" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
