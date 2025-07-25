import React, { useState } from 'react';
import './styles.css';
import projectsData from '../../projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-container" id="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-title-wrapper">
              <h3>{project.name}</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>
            <div className="project-skills-summary">
              {project.skills.slice(0, 6).map((skill, index) => (
                skill.icon && <img key={index} src={skill.icon} alt={skill.name} className="skill-icon" style={skill.invert ? { filter: 'invert(1)' } : {}} />
              ))}
            </div>
            <button className="minimal-button" onClick={() => handleShowMore(project)}>Mostrar Mais</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details-content">
            <button className="close-button" onClick={handleCloseDetails}>&times;</button>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <h4>Habilidades Utilizadas:</h4>
            <ul className="project-details-skills">
              {selectedProject.skills.map((skill, index) => (
                <li key={index}>
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" style={skill.invert ? { filter: 'invert(1)' } : {}} />}
                  {skill.name}
                </li>
              ))}
            </ul>
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Ver no GitHub</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
