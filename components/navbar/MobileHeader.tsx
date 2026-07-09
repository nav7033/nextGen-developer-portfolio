import React, { useState } from 'react';
import './MobileHeader.css';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mobile-header-container">
     <div className="header-main-bar">
        <div className="logo">PORTFOLIO</div>
        
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
        <span className="vector-line"></span>
          <span className="vector-line"></span>
          <span className="vector-line"></span>
        </button>
      </div>
      <nav className={`mobile-nav-menu ${isOpen ? 'show-menu' : ''}`}>
        <a href="#skills" className="nav-btn" onClick={toggleMenu}>Skills</a>
        <a href="#about" className="nav-btn" onClick={toggleMenu}>About</a>
        <a href="#projects" className="nav-btn" onClick={toggleMenu}>Projects</a>
        <a href="#contact" className="nav-btn" onClick={toggleMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default MobileHeader;