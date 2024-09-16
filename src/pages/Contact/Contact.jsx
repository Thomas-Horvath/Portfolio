import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../../contexts/LanguageContext';

const Contact = () => {
  const { translations } = useContext(LanguageContext);
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
        input.removeEventListener("focus", () => { });
        input.removeEventListener("blur", () => { });
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
        setStatusMessage(translations.contactPageContent.successMessage);
        setTimeout(() => setStatusMessage(""), 4000);
        form.reset();
        const labels = form.querySelectorAll('.form-label');
        labels.forEach(label => {
          label.classList.remove('focus');
        });
      }, error => {
        console.log(error);
        setStatusMessage(translations.contactPageContent.failMessage);
        setTimeout(() => setStatusMessage(""), 4000);
      });
  };

  return (
    <section className="contact section-link" id="contact" data-observe>
      <div className="main-heading">
        <h2>{translations.contactPageContent.headingTitle}</h2>
        <span>{translations.contactPageContent.subHeading}</span>
      </div>
      <div className="contact-container container">
        <div className="contact-content">
          <div className="contact-info-list">
            {translations.contactPageContent.contactInfoItems.map((item, index) => (
              <div className="contact-info-item" key={index}>
                <div className="icon-container">
                  <i className={item.icon}></i>
                </div>
                  <div className="contact-group">
                    <p className="contact-title">{item.title}</p>
                    <p className="contact-subtitle">{item.subtitle}</p>
                  </div>
              </div>
            ))}
          </div>
          <form className="form" id="contact-form" ref={contactFormRef} onSubmit={sendEmail}>
            <div className="form-container">
              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{translations.contactPageContent.formLabels.name}</label>
                  <input
                    type="text"
                    name="user-name"
                    id="name"
                    className="input-primary form-input"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{translations.contactPageContent.formLabels.email}</label>
                  <input
                    type="email"
                    name="user-email"
                    id="email"
                    className="input-primary form-input"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">{translations.contactPageContent.formLabels.subject}</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="input-primary form-input"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">{translations.contactPageContent.formLabels.message}</label>
                <textarea
                  name="message"
                  id="message"
                  className="input-primary form-input"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div className="form-status-box">
                <p>{statusMessage}</p>
              </div>
              <button type="submit" name="submit" className="btn btn-contact">
                <i className="fa-solid fa-paper-plane"></i>{translations.contactPageContent.submitButtonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );


};

export default Contact;
