import React, { useState } from 'react';
import '../../src/index.css';
import Button from './button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on left */}
        <div className="logo-container">
          <img src='../../src/assets/logo.png' alt="AC Wallah Logo" className="logo" />
        </div>
        
        {/* Right side navigation and auth */}
        <div className="nav-right">
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">AC Listing</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">About Us</a>
          </div>
          
          {/* Login/Signup Button */}
          <div className="auth-button">
          <Button text="Login / Signup" className="default-button" />
          </div>
        </div>
        
        {/* Mobile Menu Button - only visible on small screens */}
        <div className="mobile-menu-button">
          <button onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-nav-link active">Home</a>
          <a href="#" className="mobile-nav-link">AC Listing</a>
          <a href="#" className="mobile-nav-link">Pricing</a>
          <a href="#" className="mobile-nav-link">About Us</a>
          <button className="mobile-login-button">Login / Signup</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
