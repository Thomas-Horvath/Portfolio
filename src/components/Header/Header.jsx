import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LogoLight from '../../assets/img/Logo_Thomas_light.png';

import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to update header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            className="nav-logo-img js-main-logo"
            src={LogoLight} 
            alt="fehér színű logo"
          />
        </Link>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="icons">
          <LanguageSelector />
          <div className="icon-container hamburger-btn-open js-hamburger-open-btn" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
