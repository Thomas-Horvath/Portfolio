import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import projects from '../../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));
    const navigate = useNavigate();
  


    if (!project) return <p>Project not found</p>;

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <img className="project-image" src={project.imageSrc} alt={project.imageAlt} />
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
            <button onClick={() => navigate(-1)}>Vissza</button> {/* Gomb, ami visszavisz az előző oldalra */}
        </div>
    );
}

export default ProjectDetail;
