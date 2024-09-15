import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { img } from '../../assets/assets.js';


const ITEMS_PER_PAGE = 3;

const ProjectPage = () => {
  const { translations, language } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(translations.projects);
  const [activeCategory, setActiveCategory] = useState('All');




  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); 
  };


  const categoryMap = {
    Webpage: {
      en: 'Website',
      hu: 'Weboldal',
    },
    Backend: {
      en: 'Back-end',
      hu: 'Back-end',
    },
    App: {
      en: 'Application',
      hu: 'Alkalmazás',
    },
  };
  

 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // categória szerinti szűrés
  useEffect(() => {
    if (activeCategory === 'All' || activeCategory === '') {
      setFilteredProjects(translations.projects);
    } else {
      const selectedCategory = categoryMap[activeCategory][language];
      setFilteredProjects(translations.projects.filter(project => project.type === selectedCategory));
    }
  }, [activeCategory, translations, language]);

 
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);





  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 0);
  //   return () => clearTimeout(timer);
  // }, [currentPage, filteredProjects]);




  return (
    <section className="portfolio section-link project-page" data-observe>
    <img src={img.wave_reverse} alt="fekete fordított hullám háttér" className="wave-reverse" />
      <div className="portfolio-wrapper" id="projects">
        <div className="main-heading">
          <h2>{translations.projectPageContent.headingTitle}</h2>
          <span>{translations.projectPageContent.subHeading}</span>
        </div>
        <div className="project-btn-group">
          <button
            className={`btn ${activeCategory === 'All' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('All')}
          >
            {translations.projectPageContent.buttonsAll}
          </button>
          <button
            className={`btn ${activeCategory === 'Webpage'  ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Webpage')}
          >
            {translations.projectPageContent.buttonFront}
          </button>
          <button
            className={`btn ${activeCategory === 'Backend' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Backend')}
          >
            {translations.projectPageContent.buttonBack}
          </button>
          <button
            className={`btn ${activeCategory === 'App' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('App')}
          >
            {translations.projectPageContent.buttonApps}
          </button>
        </div>
        <div className="project-grid">
          {paginatedProjects.map(project => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
        <div className="pagination js-pagination">
          {[...Array(totalPages).keys()].map(page => (
            <button
              key={page + 1}
              className={`pagination-btn btn ${currentPage === page + 1 ? 'activeBtn' : ''}`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
      <img src={img.wave} alt="fekete hullám háttér" className="about-wave" />
    </section>
  );
}

export default ProjectPage;
