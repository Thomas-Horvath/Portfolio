import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import BackButton from '../../components/BackButton/BackButton';
import { FaGithub } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";


const ProjectDetail = () => {
    const { translations } = useContext(LanguageContext);
    const { id } = useParams();
    const project = translations.projects.find(p => p.id === Number(id));
    let content = project.popupDescription;

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
                            <p><strong>{project.popupDescriptionTitle}</strong>  </p>
                            {content.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                            <p><strong>{project.popupTehnologies}</strong> {project.technologies.join(', ')}</p>
                            <p><strong>{project.popupProjectType}</strong> {project.type}</p>
                        </div>
                        <div className="project-links">

                            {project.githubLink && project.githubPagesLink ? (
                                <>
                                    <Link to={project.githubLink} target="_blank" rel="noreferrer" className="btn">
                                        <FaGithub /> GitHub
                                    </Link>
                                    <Link to={project.githubPagesLink} target="_blank" rel="noreferrer" className="btn">
                                        <MdOutlineLiveTv /> Live Demo
                                    </Link>
                                </>
                            ) : (
                                project.downloadDocs_title && (
                                    <a download target="_blank" href={`${process.env.PUBLIC_URL}${project.docsHref}`}  rel="noreferrer" className="btn">
                                        <FaFileDownload /> {project.downloadDocs_title}
                                    </a>
                                )
                            )}


                        </div>
                    </div>
                </div>
                <BackButton />
            </div>
        </div>
    );
};

export default ProjectDetail;
