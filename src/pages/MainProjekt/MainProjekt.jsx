import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import { img } from '../../assets/assets.js';
import { LanguageContext } from '../../contexts/LanguageContext';


const MainProjekt = () => {
  const { translations } = useContext(LanguageContext);
  const data = translations.projects.slice(0, 3).map(project => <ProjectCard key={project.id} data={project} />);

  return (
    <section className="portfolio">

      <img src={img.wave_reverse} alt="fekete fordított hullám háttér" className="wave-reverse" />

      <div className="portfolio-wrapper section-link" id="projects" data-observe>
        <div className="main-heading">
          <h2>{translations.mainProjectPage.headingTitle}</h2>
          <span>{translations.mainProjectPage.subHeading}</span>
        </div>
        <div className="project-grid js-card-wrapper">
          {data}
        </div>

        <Link to="/projects" className="btn-secund portfolio-btn">{translations.mainProjectPage.buttonNext} <i
          className="fa-solid fa-arrow-right"></i></Link>
      </div>

      <img src={img.wave} alt="fekete hullám háttér" className="about-wave" />
    </section>
  )
}

export default MainProjekt;