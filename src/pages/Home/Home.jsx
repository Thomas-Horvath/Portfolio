import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { img } from '../../assets/assets.js';
import { LanguageContext } from '../../contexts/LanguageContext';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <>
      <section className="home section-link" id="home" data-observe >
        <h1>{translations.home.name}</h1>
        <div className="content-container">
          <p>{translations.home.profession1}</p>
          <p>{translations.home.profession2}</p>
        </div>
        <h3>{translations.home.subTitle}</h3>

        <HashLink to="/#contact" className="btn home-btn">
          <i className="fa-solid fa-paper-plane"></i>{translations.home.buttonText}
        </HashLink>

        <div className="home-social-media">
          <Link
            className="soc-icon"
            to="https://www.facebook.com/ThomasHorvath86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
            className="soc-icon"
            to="https://www.linkedin.com/in/thomas-horvath-8886b2273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link
            className="soc-icon"
            to="https://github.com/Thomas-Horvath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </Link>
        </div>
      </section>
      <img
        src={img.wave}
        alt="fekete hullám háttér"
        className="wave js-wave"
      />
    </>
  );
}

export default Home;
