import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from '../Navbar/Navbar';
import LogoLight from '../../assets/img/Logo_Thomas_light.png';
import { FaBars } from "react-icons/fa6";

import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    if (window.innerWidth <= 992) {
      setIsOpen(!isOpen);
    }
  };


  
  // Figyeli az URL-t, és beállítja a scroll állapotot az oldal függvényében
  useEffect(() => {
    const currentHash = location.pathname;
  

    if (!currentHash.startsWith('/projects/')  && !currentHash.startsWith('/info/') && !currentHash.startsWith('/blog/')) {
      // Főoldalon vagyunk, figyeljük a scroll eseményt
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Azonnal lefuttatjuk egyszer
      handleScroll();

      window.addEventListener('scroll', handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Nem a főoldalon vagyunk, alapértelmezetten true-ra állítjuk
      setIsScrolled(true);
    }
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <HashLink to="/#" className="logo">
          <img
            className="nav-logo-img js-main-logo"
            src={LogoLight}
            alt="fehér színű logo"
          />
        </HashLink>
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="icons">
          <LanguageSelector />
          <div className="icon-container hamburger-btn-open js-hamburger-open-btn" onClick={toggleMenu}>
         <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
