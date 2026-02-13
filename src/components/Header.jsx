import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';

import doradoLogo from '../assets/dorado-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'shadow' : ''}`}>
        <div className="header-container">

          
          <div className="logo-area">
            <Link to="/" className="logo-link">
              <img src={doradoLogo} alt="Dorado Logo" className="header-logo-img" />
            </Link>
          </div>

          
          <div className="middle-area">

            
            <div className="desktop-nav">
              <Link to="/" className={`nav-link ${isActive('/')}`}>HOME</Link>
              <span className="nav-separator">/</span>
              <Link to="/about" className={`nav-link ${isActive('/about')}`}>ABOUT</Link>
              <span className="nav-separator">/</span>
              <Link to="/services" className={`nav-link ${isActive('/services')}`}>SERVICES</Link>
              <span className="nav-separator">/</span>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>CONTACT</Link>
            </div>
          </div>

          
          <div className="cta-area">
            <Link to="/contact" className="cta-link">BOOK A CALL</Link>
          </div>

          
          <div className="mobile-controls">
            <button className="hamburger-btn" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>

        </div>
      </nav>

      
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <span className="mobile-menu-title">MENU</span>
          <button className="close-btn" onClick={toggleMenu}>✕</button>
        </div>

        <div className="mobile-links">
          <div className="mobile-link-item">
            <span className="mobile-link-number">01</span>
            <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">02</span>
            <Link to="/about" className="mobile-link" onClick={toggleMenu}>About</Link>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">03</span>
            <Link to="/services" className="mobile-link" onClick={toggleMenu}>Services</Link>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">04</span>
            <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Header;
