import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projects';
import { img } from '../../assets/assets.js';


const MainProjekt = () => {
  const data = projects.slice(0, 3).map(project => <ProjectCard key={project.id} data={project} />);

  return (
    <section className="portfolio">

      <img src={img.wave_reverse} alt="fekete fordított hullám háttér" className="wave-reverse" />

      <div className="portfolio-wrapper section-link" id="projects" data-observe>
        <div className="main-heading">
          <h2>portfólió</h2>
          <span>Néhány projektem</span>
        </div>
        <div className="project-grid js-card-wrapper">
          {data}
        </div>

        <Link to="/projects" className="btn-secund portfolio-btn">További munkáim <i
          className="fa-solid fa-arrow-right"></i></Link>
      </div>

      <img src={img.wave} alt="fekete hullám háttér" className="about-wave" />
    </section>
  )
}

export default MainProjekt;