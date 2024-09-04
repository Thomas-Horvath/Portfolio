import React, { useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import BackButton from '../../components/BackButton/BackButton';


const ProjectDetail = () => {
    const { translations } = useContext(LanguageContext);
    const { id } = useParams();
    const project = translations.projects.find(p => p.id === Number(id));


    if (!project) return <p>Project not found</p>;

    return (
        <div className="project-detail-container">
            <div className="detail-wrapper">
                <div className="project-detail">
                    <div className="project-image-container">
                        <img className="project-image" src={`${process.env.PUBLIC_URL}${project.imageSrc}`} alt={project.imageAlt} />
                    </div>
                    <div className="project-info">
                        <h1>{project.title}</h1>
                        <div className="p-container">
                            <p><strong>{project.popupDescriptionTitle}</strong> {project.popupDescription}</p>
                            <p><strong>{project.popupTehnologies}</strong> {project.technologies.join(', ')}</p>
                            <p><strong>{project.popupProjectType}</strong> {project.type}</p>
                        </div>
                        <div className="project-links">
                            <Link to={project.githubLink} target="_blank" rel="noreferrer" className="btn">
                                GitHub
                            </Link>
                            <Link to={project.githubPagesLink} target="_blank" rel="noreferrer" className="btn">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
                <BackButton />
            </div>
        </div>
    );
};

export default ProjectDetail;
