import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser'; // Győződj meg róla, hogy telepítetted az emailjs-com csomagot

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const contactFormRef = useRef();

  useEffect(() => {
    const formInputs = document.querySelectorAll(".form-input");

    formInputs.forEach(input => {
      input.addEventListener("focus", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        targetLabel.classList.add("focus");
      });
      input.addEventListener("blur", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        if (input.value.length === 0) {
          targetLabel.classList.remove("focus");
        }
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      formInputs.forEach(input => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("blur", () => {});
      });
    }; 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = contactFormRef.current;
    const serviceID = process.env.REACT_APP_SERVICE_ID; 
    const templateID = process.env.REACT_APP_TEMPLATE_ID; 
    const publicKey = process.env.REACT_APP_PUBLIC_KEY; 
  

    emailjs.sendForm(serviceID, templateID, form, publicKey) 
      .then(response => {
        console.log(response.status, response.text);
        setStatusMessage("Az üzenetet sikeresen elküldtük! ✅");
        setTimeout(() => setStatusMessage(""), 4000);
        form.reset();
        const labels = form.querySelectorAll('.form-label');
        labels.forEach(label => {
          label.classList.remove('focus');
        });
      }, error => {
        console.log(error);
        setStatusMessage("Az üzenetet nem sikerült elküldeni! ❌");
        setTimeout(() => setStatusMessage(""), 4000);
      });
  };

  return (
    <section className="contact section-link" id="contact" data-observe>
      <div className="main-heading">
        <h2>Kapcsolat</h2>
        <span>Kérdezz bátran</span>
      </div>
      <div className="contact-container container">
        <div className="contact-content">
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="icon-container">
                <i className="fa-solid fa-square-phone"></i>
              </div>
              <a href="tel:+36301234567">
                <div className="contact-group">
                  <p className="contact-title">Telefon</p>
                  <p className="contact-subtitle">+36 30 123 4567</p>
                </div>
              </a>
            </div>

            <div className="contact-info-item">
              <div className="icon-container">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <a href="mailto:template@template.com">
                <div className="contact-group">
                  <p className="contact-title">Email</p>
                  <p className="contact-subtitle">thomashorvathweb@gmail.hu</p>
                </div>
              </a>
            </div>

            <div className="contact-info-item">
              <div className="icon-container">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-group">
                <p className="contact-title">Cím</p>
                <p className="contact-subtitle">Pomáz - HU</p>
              </div>
            </div>

          </div>
          <form className="form" id="contact-form" ref={contactFormRef} onSubmit={sendEmail}>
            <div className="form-container">
              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">név</label>
                  <input type="text" name="user-name" id="name" className="input-primary form-input"
                    autoComplete="off" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">email</label>
                  <input type="email" name="user-email" id="email" className="input-primary form-input"
                    autoComplete="off" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">tárgy</label>
                <input type="text" name="subject" id="subject" className="input-primary form-input"
                  autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">üzenet</label>
                <textarea name="message" id="message" className="input-primary form-input"
                  autoComplete="off" required></textarea>
              </div>
              <div className="form-status-box">
                <p>{statusMessage}</p>
              </div>
              <button type="submit" name="submit" className="btn btn-contact">
                <i className="fa-solid fa-paper-plane"></i>Küldés
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
