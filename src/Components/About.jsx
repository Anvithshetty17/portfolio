
import React from "react";
import "./About.css";
import mypic from "../assets/mypic.png"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello, I'm <strong>Anvith Shetty</strong>, a passionate web developer with a keen eye for detail and a love for creating seamless user experiences. I specialize in building modern, responsive websites using the latest web technologies such as React, JavaScript, HTML5, and CSS3. 
            </p>
            <p>
              My goal is to craft fast, beautiful, and interactive applications that solve real-world problems. With a focus on front-end development, I work closely with clients and teams to deliver high-quality projects that exceed expectations. I’m constantly expanding my knowledge and love staying up-to-date with new tools and frameworks in the web development ecosystem.
            </p>
          </div>
         <div className="about-img-wrapper">
  <div className="animated-shape"></div>
  <div className="about-img">
    <img src={mypic} alt="Anvith Shetty" />
  </div>
</div>

        </div>
        <div className="skills">
          <h3>Technologies & Tools I Work With</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>MongoDB</li>
            <li>C programming</li>
            <li>PHP</li>
            <li>java</li>
            <li>Python</li>
            <li>APIs (RESTful,MealDB)</li>
            <li>Responsive Design</li>
            <li>Agile Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
