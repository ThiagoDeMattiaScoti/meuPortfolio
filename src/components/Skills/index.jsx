import React from 'react';
import './styles.css';
import typescriptIcon from '../../assets/typescript.svg';
import nodeIcon from '../../assets/node.svg';
import dockerIcon from '../../assets/docker.svg';
import jwtIcon from '../../assets/jwt.svg';
import postgresqlIcon from '../../assets/postgresql.svg';
import prismaIcon from '../../assets/prisma.svg';
import jestIcon from '../../assets/jest.png';
import gitIcon from '../../assets/git.svg';
import awsIcon from '../../assets/aws.svg';

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        <ul className="skills-row">
          <li><img src={typescriptIcon} alt="TypeScript" className="skill-icon" />TypeScript</li>
          <li><img src={nodeIcon} alt="Node.js" className="skill-icon" />Node.js</li>
          <li><img src={postgresqlIcon} alt="PostgreSQL" className="skill-icon" />PostgreSQL</li>
          <li>Express.js</li>
          <li><img src={dockerIcon} alt="Docker" className="skill-icon" />Docker</li>
          <li><img src={jestIcon} alt="Jest" className="skill-icon" />Jest</li>
        </ul>
        <ul className="skills-row">
          <li><img src={prismaIcon} alt="Prisma" className="skill-icon" style={{ filter: 'invert(1)' }} />Prisma</li>
          <li><img src={awsIcon} alt="AWS" className="skill-icon" />AWS</li>
          <li><img src={gitIcon} alt="Git" className="skill-icon" />Git</li>
          <li><img src={jwtIcon} alt="JWT" className="skill-icon" />JWT</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
