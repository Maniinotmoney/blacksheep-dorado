import React, { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));

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

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'shadow' : ''}`}>
        <div className="header-container">

          {/* 1. Left: Brand / Logo */}
          <div className="logo-area">
            <a href="#" className="logo-link">
              <i className="fa-solid fa-heart-pulse logo-icon"></i>
              <span>dorado</span>
            </a>
          </div>

          {/* 2. Middle: Time & Nav */}
          <div className="middle-area">

            {/* Nav - Desktop Only */}
            <div className="desktop-nav">
              <a href="#home" className="nav-link">HOME</a>
              <span className="nav-separator">/</span>
              <a href="#about" className="nav-link">ABOUT</a>
              <span className="nav-separator">/</span>
              <a href="#services" className="nav-link">SERVICES</a>
              <span className="nav-separator">/</span>
              <a href="#contact" className="nav-link">CONTACT</a>
            </div>
          </div>

          {/* 3. Right: CTA & Mobile Button */}
          <div className="cta-area">
            <a href="#contact" className="cta-link">BOOK A CALL</a>
          </div>

          {/* Mobile Controls (Visible only on mobile) */}
          <div className="mobile-controls">
            <button className="hamburger-btn" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay - Editorial Redesign */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <span className="mobile-menu-title">MENU</span>
          <button className="close-btn" onClick={toggleMenu}>✕</button>
        </div>

        <div className="mobile-links">
          <div className="mobile-link-item">
            <span className="mobile-link-number">01</span>
            <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">02</span>
            <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">03</span>
            <a href="#services" className="mobile-link" onClick={toggleMenu}>Services</a>
          </div>
          <div className="mobile-link-item">
            <span className="mobile-link-number">04</span>
            <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>
          </div>
        </div>

        {/* <div className="mobile-menu-footer">
          <div className="mobile-socials">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
          </div>
          <a href="#contact" className="mobile-cta-btn" onClick={toggleMenu}>BOOK NOW</a>
        </div> */}
      </div>
    </>
  );
};

export default Header;
