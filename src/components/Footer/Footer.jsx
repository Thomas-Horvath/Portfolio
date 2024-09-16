import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
    const { translations } = useContext(LanguageContext);
    return (

        <footer className="footer">
            <div className="footer-content-container">
                <div className="footer-social-media">
                    <Link className="soc-icon" to="https://www.facebook.com/ThomasHorvath86" target="_blank">
                        <i className="bi bi-facebook"></i></Link>
                    <Link className="soc-icon" to="https://www.linkedin.com/in/thomas-horvath-8886b2273/" target="_blank">
                        <i className="bi bi-linkedin"></i></Link>
                    <Link className="soc-icon" to="https://github.com/Thomas-Horvath" target="_blank">
                        <i className="bi bi-github"></i></Link>
                </div>
                <div className="footerInfo">
                    <Link to="/info/policy">{translations.footer.policy}</Link>
                    <Link to="/info/impresszum">{translations.footer.impressum}</Link>
                    <Link to="/info/cookies">{translations.footer.cookies}</Link>
                </div>
            </div>

            <div className="copyright-container">
                <p className="text">Copyright &copy; 2024</p>
                <p> {translations.footer.additionalText}</p>
            </div>
        </footer>

    )
}

export default Footer;