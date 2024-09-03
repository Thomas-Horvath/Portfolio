import React from 'react';
import { Link } from 'react-router-dom'


const ProjectCard = ({data}) => {


    return (
        <>
            <div className="portfolio-card">
                <img src={data.imageSrc} alt={data.imageAlt} className="portolio-img" />
                <h2 className="portfolio-card-title">{data.title}</h2>

                <div className="portfolio-content">
                    <p className="portfolio-description">{data.cardDescription}</p>
                    <h4 className="portfolio-details">{data.technologies.join('-')}</h4>
                    <div className="btn btn-portfolio"> {data.buttonContent}<i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>

                <div className="portfolio-popup">
                    <i className="fa-regular fa-circle-xmark close-btn"></i>
                    <h2 className="portfolio-popup-header">{data.title}</h2>
                    <div className="portfolio-popup-content-container">

                        <img src={data.imageSrc} alt={data.imageAlt} />
                        <div className="content-container">
                            <div className="portfolio-popup-content-description">
                                <h3>{data.popupDescriptionTitle}</h3>
                                <p>{data.popupDescription}</p>
                                <h3>{data.popupTehnologies}</h3>
                                <ul>
                                    {data.technologies.map(tech => `<li>${tech}</li>`).join('')}
                                </ul>
                                <h3>{data.popupProjectType}</h3>
                                <p>{data.type}</p>
                            </div>
                            <div className="portfolio-popup-btn-group">
                                <Link to={data.githubLink} rel="noreferrer"
                                    target="_blank" className="btn popup-btn">
                                    <i className="fa-brands fa-github"></i>
                                    Code</Link>
                                <Link to={data.githubPagesLink} rel="noreferrer"
                                    target="_blank" className="btn popup-btn">
                                    <i className="fa-solid fa-desktop"></i>Demo</Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectCard