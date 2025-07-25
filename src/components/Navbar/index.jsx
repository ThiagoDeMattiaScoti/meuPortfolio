import React from 'react';
import './styles.css';

const Navbar = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={handleScroll}>Meu Portfólio</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={handleScroll}>Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={handleScroll}>Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={handleScroll}>Habilidades</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={handleScroll}>Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
