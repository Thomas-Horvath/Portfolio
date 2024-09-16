// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import { img } from '../../assets/assets.js';
// import { LanguageContext } from '../../contexts/LanguageContext';

// const Home = () => {
//   const { translations } = useContext(LanguageContext);

//   return (
//     <>
//       <section className="home section-link" id="home" data-observe >
//         <h1>{translations.home.name}</h1>
//         <div className="content-container">
//           <p>{translations.home.profession1}</p>
//           <p>{translations.home.profession2}</p>
//         </div>
//         <h3>{translations.home.subTitle}</h3>

//         <HashLink to="/#contact" className="btn home-btn">
//           <i className="fa-solid fa-paper-plane"></i>{translations.home.buttonText}
//         </HashLink>

//         <div className="home-social-media">
//           <Link
//             className="soc-icon"
//             to="https://www.facebook.com/ThomasHorvath86"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="bi bi-facebook"></i>
//           </Link>
//           <Link
//             className="soc-icon"
//             to="https://www.linkedin.com/in/thomas-horvath-8886b2273/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="bi bi-linkedin"></i>
//           </Link>
//           <Link
//             className="soc-icon"
//             to="https://github.com/Thomas-Horvath"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="bi bi-github"></i>
//           </Link>
//         </div>
//       </section>
//       <img
//         src={img.wave}
//         alt="fekete hullám háttér"
//         className="wave js-wave"
//       />
//     </>
//   );
// }

// export default Home;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { img } from '../../assets/assets.js';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  // Animációs konfigurációk
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const animationVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationVariantsBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="home section-link" id="home" data-observe>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.6 }}
          className="home-title"
        >
          {translations.home.name}
        </motion.h1>
        <motion.div
          className="content-container"
          initial="hidden"
          animate="visible"
          variants={animationVariantsLeft}
          transition={{ duration: 0.6}}
        >
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariantsLeft}
            transition={{ duration: 0.6 }}
            className="home-paragraph"
          >
            {translations.home.profession1}
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariantsLeft}
            transition={{ duration: 0.6 }}
            className="home-paragraph"
          >
            {translations.home.profession2}
          </motion.p>
        </motion.div>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={animationVariantsRight}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="home-subtitle"
        >
          {translations.home.subTitle}
        </motion.h3>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariantsBottom}
          transition={{ duration: 0.6, delay: 0.8 }}

        >
          <HashLink to="/#contact" className="btn home-btn">
            <i className="fa-solid fa-paper-plane"></i>{translations.home.buttonText}
          </HashLink>
        </motion.div>

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
