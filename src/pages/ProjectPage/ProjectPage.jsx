import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { img, categoryMap } from '../../assets/assets.js';


const ITEMS_PER_PAGE = 3;

const ProjectPage = () => {
  const { translations, language } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(translations.projects);
  const [activeCategory, setActiveCategory] = useState('All');


  useEffect(() => {
    // Betölteni a kiválasztott kategóriát a localStorage-ból
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
  }, []);


  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    localStorage.setItem('selectedCategory', category);
  };






  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // categória szerinti szűrés
  useEffect(() => {
    if (activeCategory === 'All' || activeCategory === '') {
      // Véletlenszerű sorrendezés, ha az összes projektet szeretnéd megjeleníteni
      const shuffledProjects = [...translations.projects].sort(() => Math.random() - 0.5);
      setFilteredProjects(shuffledProjects);
    } else {
      const selectedCategory = categoryMap[activeCategory][language];
      setFilteredProjects(translations.projects.filter(project => project.type === selectedCategory));
    }
  }, [activeCategory, translations, language]);


  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);




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
            className={`btn project-select-btn ${activeCategory === 'All' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('All')}
          >
            {translations.projectPageContent.buttonsAll}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Webpage' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Webpage')}
          >
            {translations.projectPageContent.buttonFront}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Backend' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Backend')}
          >
            {translations.projectPageContent.buttonBack}
          </button>
          <button
            className={`btn project-select-btn ${activeCategory === 'Data' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange('Data')}
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
