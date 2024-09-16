import React from 'react';



const InfoBox = ({ title, content, isOpen, onClick }) => {


    return (
        <div className="info-group">
            <div className="info-title" onClick={onClick}>
                <h3>{title}</h3>
                <i className={`title-icon fa-solid ${isOpen ? 'fa-circle-arrow-up' : 'fa-circle-arrow-down'}`}></i>
            </div>
            <div className={`info-content ${isOpen ? 'displayBlock' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default InfoBox;