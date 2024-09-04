
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

const ProjectCard = ({ data }) => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="project-card">
            <img src={`${process.env.PUBLIC_URL}${data.imageSrc}`}  alt={data.imageAlt} />
            <div className="project-card-content">
                <h2 className="project-card-title">{data.title}</h2>
                <Link to={`/projects/${data.id}`} className="project-card-button">
                    {translations.projectCard.buttonDetails}
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
