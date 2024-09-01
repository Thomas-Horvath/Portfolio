// import React from 'react';
// import { HashLink } from 'react-router-dom';
// import Logo from '../../assets/img/Logo_Thomas_main_color.svg'

// function Navbar({ isOpen, toggleMenu }) {
//   return (
//     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
//       <img className="nav-logo-img" src={Logo} alt="arany színű logo" />
//       <ul className="nav-links">
//         <li><HashLink className="nav-link" to="/" onClick={toggleMenu}>Kezdőlap</HashLink></li>
//         <li><HashLink className="nav-link" to="/#about" onClick={toggleMenu}>Rólam</HashLink></li>
//         <li><HashLink className="nav-link" to="/#skills" onClick={toggleMenu}>Ismereteim</HashLink></li>
//         <li><HashLink className="nav-link" to="/#portfolio" onClick={toggleMenu}>Munkáim</HashLink></li>
//         <li><HashLink className="nav-link" to="/#blog" onClick={toggleMenu}>Blog</HashLink></li>
//         <li><HashLink className="nav-link" to="/#contact" onClick={toggleMenu}>Kapcsolat</HashLink></li>
//         <li><HashLink className="nav-link" to="/projects" onClick={toggleMenu}>Projektek</HashLink></li>
//       </ul>
//       <button className="hamburger-btn-close js-hamburger-close-btn" onClick={toggleMenu}>
//         <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useContext } from 'react';
import { Link  } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { LanguageContext } from '../../contexts/LanguageContext';
import Logo from '../../assets/img/Logo_Thomas_main_color.svg'

const Navbar = ({ isOpen, toggleMenu }) => {
  const { translations } = useContext(LanguageContext);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <img className="nav-logo-img" src={Logo} alt="arany színű logo" />
      <ul className="nav-links">
        <li>
          <HashLink className="nav-link"  to="/#home" onClick={toggleMenu}>
            {translations.nav.link1}
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link"  to="/#about" onClick={toggleMenu}>
            {translations.nav.link2}
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link"  to="/#skills" onClick={toggleMenu}>
            {translations.nav.link3}
          </HashLink>
        </li>
        <li>
          <Link className="nav-link" to="/projects" onClick={toggleMenu}>
            {translations.nav.link4}
          </Link>
        </li>
        <li>
          <HashLink className="nav-link"  to="/#blog" onClick={toggleMenu}>
            {translations.nav.link5}
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link"  to="/#contact" onClick={toggleMenu}>
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
