import React from 'react';
import './Projects.css';  
import p1 from '../assets/p1.png'; 
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p10 from '../assets/p10.png';
import p0 from '../assets/p0.png';
const Projects = () => {
  const projectList = [
     { 
        title: "deliGo – Food Delivery App 🚀🍔", 
        description: "A fast and user-friendly food delivery app built with React, Node.js, Express, and MongoDB. Users can browse restaurants, add items to cart, place orders, track deliveries, and make secure online payments. The app includes an admin dashboard for managing orders and menus. Fully responsive for a seamless experience on any device.",
        link: "#",
        demoLink: "https://food-delivery-app-lilac-psi.vercel.app/",
        codeLink: "https://github.com/Anvithshetty17/food-delivery-app",
        img: p5,
        languages: ["React", "CSS", "JavaScript"]
      },
    {

    title: "GoText – Student’s All-in-One Hub 🎓📚", 
description: "A web-based all-in-one toolkit for students. Features include professional resume builder, note sharing, CGPA tracker, and a gaming zone with 10+ casual games. Designed to help students stay organized, collaborate, and take fun breaks, all in one place. Simple, free, and easy to use on the web.",
link: "#",
demoLink: "https://gotext.vercel.app/",
codeLink: "#",
img: p10,
languages: ["HTML", "CSS", "JavaScript","mern stack"]
},

{ 
  title: "Real-Time Chat App 💬⚡", 
  description: "A secure and responsive chat application built with the MERN stack and Socket.IO. Supports real-time 1-on-1 messaging, user authentication with JWT, typing indicators, online/offline status, and chat timestamps. Powered by WebSockets for low-latency message delivery and MongoDB for message persistence.",
  link: "#",
  demoLink: "https://chat-app-psi-pink.vercel.app/login",
  codeLink: "https://github.com/Anvithshetty17/chat-app",
  img: p0,
  languages: ["React", "Node.js", "Socket.IO", "MongoDB"]
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
      }, 

{ 
        title: "mini projects", 
        description: "Quiz Website: An interactive platform where users can test their knowledge through multiple-choice questions. Features include real-time score tracking and user-friendly design.   Calculator Website: A sleek, responsive calculator for basic arithmetic operations with an intuitive interface and quick functionality..",
        link: "#",
        demoLink: "https://mini-projects-liart.vercel.app/",
        codeLink: "https://github.com/Anvithshetty17/mini-projects.git",
        img: p4,
        languages: ["HTML", "CSS", "JavaScript"]
      },
    {
    title: "Employee Attendance Management System",
    description: "A C-based console application for managing employee records and tracking daily attendance. Features include an admin dashboard for employee management, a user panel for marking attendance, and CSV file-based data storage.",
    link: "#",
    demoLink: "#",
    codeLink: "https://github.com/Anvithshetty17/Employee-Attendance-Management-Using-C",
    img: p6,
    languages: ["C", "File Handling", "Linked Lists"]
}
,
    {
  title: "Interview Preparation Quiz",
  description: "🧠 An interactive web-based quiz platform designed to help users prepare for technical interviews. It features critical thinking coding questions, a joke section, motivational quotes, and fun facts. Users can also contribute new questions to the quiz. Built using React and modern web technologies.",
  link: "https://interview-preparation-nine.vercel.app/",
  demoLink: "https://interview-preparation-nine.vercel.app/",
  codeLink: "https://github.com/Anvithshetty17/interview-preparation-",
  img: p7, 
  languages: ["React", "JavaScript", "CSS", "Vite"]
}
,
    { 
      title: "From Paper to Pixels", 
      description: "❖ From Paper to Pixels – Web Based Attendance Alert System. It is a web-based application that can be accessed over the web. This system can be used to automate the workflow of attendance status and SMS alert features - Php, MySQL, HTML, CSS, Javascript.",
      link: "https://anvith.byethost7.com/",
      demoLink: "https://anvith.byethost7.com/",
      codeLink: "https://github.com/Anvithshetty17/UGI---attendance-sms-alert-system-",
      img: p1,
      languages: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className='p-0.5 animated-gradient-bg hover2 rounded-lg flex' >
          <div className="project ">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
