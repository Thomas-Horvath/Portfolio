import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content-container">
            <div className="footer-social-media">
                <Link className="soc-icon" href="https://www.facebook.com/ThomasHorvath86" target="_blank">
                    <i className="bi bi-facebook"></i></Link>
                <Link className="soc-icon" href="https://www.linkedin.com/in/thomas-horvath-8886b2273/" target="_blank">
                    <i className="bi bi-linkedin"></i></Link>
                <Link className="soc-icon" href="https://github.com/Thomas-Horvath" target="_blank">
                    <i className="bi bi-github"></i></Link>
            </div>
            <div className="footerInfo">
                <a href="./policy.html">Adatkezelési irányelvek</a>
                <a href="./impresszum.html">Impresszum</a>
                <a href="./cookies.html">Sütik kezelése</a>
            </div>
        </div>

        <div className="copyright-container">
            <p className="text">Copyright &copy; 2024</p>
            <p> Minden jog fenntartva!</p>
        </div>

    </footer>
  )
}

export default Footer