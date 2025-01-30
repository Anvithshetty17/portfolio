import React from 'react';
import './Projects.css';  
import p1 from '../assets/p1.png'; 
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.png';

const Projects = () => {
  const projectList = [
    { 
      title: "From Paper to Pixels", 
      description: "❖ From Paper to Pixels – Web Based Attendance Alert System. It is a web-based application that can be accessed over the web. This system can be used to automate the workflow of attendance status and SMS alert features - Php, MySQL, HTML, CSS, Javascript.",
      link: "#",
      demoLink: "#",
      codeLink: "#",
      img: p1,
      languages: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    { 
        title: "Delicious Recipes", 
        description: "❖ Delicious Recipes - A recipe website that helps users discover, search, and explore a variety of dishes from around the world. Features include smart search, detailed meal information, and easy-to-follow instructions for every level of cook.",
        link: "#",
        demoLink: "https://recipe-website-swart-zeta.vercel.app/",
        codeLink: "https://github.com/Anvithshetty17/recipe-website",
        img: p2,
        languages: ["React","React Router","CSS","TheMealDB API","Vite","Git and GitHub","Deployment Platform : Vercel"]
      },
      { 
        title: "Tic-Tac-Toe Game", 
        description: "❖ Tic-Tac-Toe Game - A simple, interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Players take turns marking a 3x3 grid, aiming to get three marks in a row. The app tracks the game state, declares a winner, and allows for multiple rounds. It’s a fun way to showcase my skills in building interactive web applications.",
        link: "#",
        demoLink: "https://tic-tac-toe1-jn2q.vercel.app/",
        codeLink: "https://github.com/Anvithshetty17/tic-tac-toe1",
        img: p3,
        languages: ["HTML", "CSS", "JavaScript"]
      }

{ 
        title: "mini projects", 
        description: "❖ Tic-Tac-Toe Game - A simple, interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Players take turns marking a 3x3 grid, aiming to get three marks in a row. The app tracks the game state, declares a winner, and allows for multiple rounds. It’s a fun way to showcase my skills in building interactive web applications.",
        link: "#",
        demoLink: "https://tic-tac-toe1-jn2q.vercel.app/",
        codeLink: "https://github.com/Anvithshetty17/tic-tac-toe1",
        img: p3,
        languages: ["HTML", "CSS", "JavaScript"]
      }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-languages">
              <strong>Technologies used:</strong> {project.languages.join(', ')}
            </div>
            <div className="project-buttons">
              <a href={project.demoLink} className="btn demo-btn" target="_blank" rel="noopener noreferrer">View Demo</a>
              <a href={project.codeLink} className="btn code-btn" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
