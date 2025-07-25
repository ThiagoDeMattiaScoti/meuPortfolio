import typescriptIcon from './assets/typescript.svg';
import nodeIcon from './assets/node.svg';
import dockerIcon from './assets/docker.svg';
import jwtIcon from './assets/jwt.svg';
import postgresqlIcon from './assets/postgresql.svg';
import prismaIcon from './assets/prisma.svg';
import jestIcon from './assets/jest.png';
import gitIcon from './assets/git.svg';
import awsIcon from './assets/aws.svg';

const projectsData = [
  {
    id: 1,
    name: "Projeto 1: API de E-commerce",
    description: "Desenvolvimento de uma API RESTful completa para um sistema de e-commerce, incluindo autenticação de usuários, gerenciamento de produtos, carrinho de compras e processamento de pedidos. Foco em escalabilidade e segurança.",
    skills: [
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: null },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Prisma", icon: prismaIcon, invert: true },
      { name: "Docker", icon: dockerIcon },
      { name: "Jest", icon: jestIcon },
      { name: "JWT", icon: jwtIcon },
      { name: "Git", icon: gitIcon },
    ],
    githubLink: "https://github.com/seu-usuario/projeto1-repo",
  },
  {
    id: 2,
    name: "Projeto 2: Dashboard Interativo",
    description: "Criação de um dashboard interativo para visualização de dados, permitindo filtros dinâmicos e gráficos personalizáveis. Interface intuitiva e responsiva para diferentes dispositivos.",
    skills: [
      { name: "TypeScript", icon: typescriptIcon },
      { name: "React", icon: null }, // Assuming React is used, but no specific icon provided yet
      { name: "Node.js", icon: nodeIcon },
      { name: "AWS", icon: awsIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Git", icon: gitIcon },
    ],
    githubLink: "https://github.com/seu-usuario/projeto2-repo",
  },
  {
    id: 3,
    name: "Projeto 3: Aplicação Mobile Híbrida",
    description: "Desenvolvimento de uma aplicação mobile híbrida para gerenciamento de tarefas, com funcionalidades offline e sincronização de dados. Experiência de usuário fluida e design moderno.",
    skills: [
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: null },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Prisma", icon: prismaIcon, invert: true },
      { name: "JWT", icon: jwtIcon },
      { name: "Git", icon: gitIcon },
    ],
    githubLink: "https://github.com/seu-usuario/projeto3-repo",
  },
];

export default projectsData;
