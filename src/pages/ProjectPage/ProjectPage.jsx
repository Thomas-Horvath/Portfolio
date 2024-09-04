import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Constants
const ITEMS_PER_PAGE = 6;

const ProjectPage = () => {
  const { translations } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(translations.projects);
  const [activeCategory, setActiveCategory] = useState('All');

  // Handler for category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page on category change
  };

  // Handler for page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter projects based on the selected category
  useEffect(() => {
    if (activeCategory === 'All' || activeCategory === '') {
      setFilteredProjects(translations.projects);
    } else {
      setFilteredProjects(translations.projects.filter(project => project.type === activeCategory));
    }
  }, [activeCategory, translations.projects]);

  // Get paginated projects for the current page
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Scroll to top when page changes
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer);
  }, [currentPage, filteredProjects]);

  return (
    <section className="portfolio section-link project-page" id="projects" data-observe>
      <div className="portfolio-wrapper">
        <div className="main-heading">
          <h2>{translations.projectPageContent.headingTitle}</h2>
          <span>{translations.projectPageContent.subHeading}</span>
        </div>
        <div className="project-btn-group">
          <button
            className={`btn ${activeCategory === 'All' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange(translations.projectPageContent.buttonsAllType)}
          >
            {translations.projectPageContent.buttonsAll}
          </button>
          <button
            className={`btn ${activeCategory === 'Weboldal'  ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange(translations.projectPageContent.buttonFrontType)}
          >
            {translations.projectPageContent.buttonFront}
          </button>
          <button
            className={`btn ${activeCategory === 'Back-end' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange(translations.projectPageContent.buttonBackType)}
          >
            {translations.projectPageContent.buttonBack}
          </button>
          <button
            className={`btn ${activeCategory === 'Alkalmazás' ? 'select-active' : ''}`}
            onClick={() => handleCategoryChange(translations.projectPageContent.buttonAppsType)}
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
    </section>
  );
}

export default ProjectPage;
