import React, { useState } from 'react';
import '../assets/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = ['Home', 'Features', 'Pricing', 'About'];

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setIsOpen(false); 
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="logo" onClick={() => handleLinkClick('Home')}>
          7tech<span> it services</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeLink === item ? 'active' : ''}
                  onClick={() => handleLinkClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#signup"
            className="nav-btn"
            onClick={() => setIsOpen(false)}
          >
            Inquiry
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
