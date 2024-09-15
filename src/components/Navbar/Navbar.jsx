import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../contexts/LanguageContext';
import Logo from '../../assets/img/Logo_Thomas_main_color.svg';
import useIntersectionObserver from '../../utilities/Observer';

const Navbar = ({ isOpen, toggleMenu }) => {
  const { translations } = useContext(LanguageContext);

  const [activeSection, setActiveSection] = useState('');


  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Esetleg állíthatod, hogy milyen százalékban legyen látható a szekció
  };

  const entries = useIntersectionObserver(options);

  useEffect(() => {
    // Ellenőrzi az összes belépési eseményt
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    if (visibleEntries.length > 0) {
      const firstVisible = visibleEntries[0].target.id;
      setActiveSection(`#${firstVisible}`);
    }
  }, [entries]);

  const isActive = (path) => {
    if (Array.isArray(path)) {
      return path.includes(activeSection);
    }
    return activeSection === path;
  };


  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <img className="nav-logo-img" src={Logo} alt="arany színű logo" />
      <ul className="nav-links">
        <li>
          <HashLink
            className={`nav-link ${isActive('#home') ? 'active' : ''}`}
            to="/#home"
            onClick={toggleMenu}
          >
            {translations.nav.link1}
          </HashLink>
        </li>
        <li>
          <HashLink
            className={`nav-link ${isActive('#about') ? 'active' : ''}`}
            to="/#about"
            onClick={toggleMenu}
          >
            {translations.nav.link2}
          </HashLink>
        </li>
        <li>
          <HashLink
            className={`nav-link ${isActive('#skills') ? 'active' : ''}`}
            to="/#skills"
            onClick={toggleMenu}
          >
            {translations.nav.link3}
          </HashLink>
        </li>
        <li>
          <HashLink
            className={`nav-link ${isActive('#projects') ? 'active' : ''}`}
            to="/#projects"
            onClick={toggleMenu}
          >
            {translations.nav.link4}
          </HashLink>
        </li>
        <li>
          <HashLink
            className={`nav-link ${isActive('#blog') ? 'active' : ''}`}
            to="/#blog"
            onClick={toggleMenu}
          >
            {translations.nav.link5}
          </HashLink>
        </li>
        <li>
          <HashLink
            className={`nav-link ${isActive('#contact') ? 'active' : ''}`}
            to="/#contact"
            onClick={toggleMenu}
          >
            {translations.nav.link6}
          </HashLink>
        </li>
      </ul>
      <button className="hamburger-btn-close js-hamburger-close-btn" onClick={toggleMenu}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;
