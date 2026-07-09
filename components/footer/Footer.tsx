"use client";
import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-content-container">
        <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
          <span className="arrow-icon"></span>
          <span className="btn-text">BACK TO TOP</span>
        </button>

        <div className="footer-social-vectors">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="vector-icon icon-git" aria-label="Github Profile"></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="vector-icon icon-in" aria-label="LinkedIn Profile"></a>
          <a href="mandaln51@gmail.com" className="vector-icon icon-mails" aria-label="Send Email"></a>
        </div>
        <p className="footer-copyright-string">
          © {new Date().getFullYear()} Naveen Kumar All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;