import React, { useState, useEffect } from 'react';
import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Constants
const ITEMS_PER_PAGE = 6;

const ProjectPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(projects);
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
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === activeCategory));
    }
  }, [activeCategory]);

  // Get paginated projects for the current page
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
  
      <section className="portfolio section-link project-page" id="projects" data-observe>
        <div className="portfolio-wrapper project-page-wrapper">
          <div className="project-btn-group">
            <button
              className={`btn ${activeCategory === 'All' ? 'select-active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              Összes
            </button>
            <button
              className={`btn ${activeCategory === 'Weboldal' ? 'select-active' : ''}`}
              onClick={() => handleCategoryChange('Weboldal')}
            >
              Front-end
            </button>
            <button
              className={`btn ${activeCategory === 'Back-end' ? 'select-active' : ''}`}
              onClick={() => handleCategoryChange('Back-end')}
            >
              Back-end
            </button>
            <button
              className={`btn ${activeCategory === 'Alkalmazás' ? 'select-active' : ''}`}
              onClick={() => handleCategoryChange('Alkalmazás')}
            >
              Alkalmazások
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
