import React from 'react';
import './styles.css';
import linkedinIcon from '../../assets/linkedin.svg';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h2>Contato</h2>
      <p>Entre em contato comigo através do email: <a href="mailto:seuemail@example.com">thiago_de_mattia_scoti@outlook.com</a></p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-button">
          <img src={linkedinIcon} alt="LinkedIn" width="24" height="24" style={{ filter: 'invert(1)' }} />
          LinkedIn
        </a>
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
          GitHub
        </a>
      </div>
      <a href="https://wa.me/5548999052315?text=Ol%C3%A1!%20Estava%20precisando%20de%20seus%20servi%C3%A7os%20para%20meu%20projeto%2C%20pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer" className="btn btn--primary contact-button">
        Contratar Serviços
      </a>
    </section>
  );
};

export default Contact;
