import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer (Dev Intern)",
    company: "SonicWall",
    duration: "Jan 2026 - Present",
    location: "Bengaluru, Karnataka, India (Hybrid)",
    description: "Assisting in the development and optimization of enterprise software solutions. Collaborating with cross-functional teams to design new features, write clean and maintainable code, and participate in code reviews to ensure system scalability and performance.",
  },
  {
    id: 2,
    role: "Software Engineer (QA Intern)",
    company: "SonicWall",
    duration: "Nov 2025 - Dec 2025",
    location: "Bengaluru, Karnataka, India (Hybrid)",
    description: "Conducted rigorous manual and automated testing to identify software defects. Worked closely with the development team to troubleshoot bugs, execute comprehensive test cases, and ensure the reliability and security of core applications prior to release.",
  },
  {
    id: 3,
    role: "PHP Web Developer Intern",
    company: "Codelab Systems",
    duration: "Feb 2024 - Mar 2024",
    location: "Mangaluru, Karnataka, India",
    description: "Developed and maintained dynamic web applications using the LAMP stack (PHP, MySQL). Implemented robust backend functionality, integrated responsive user interfaces, and optimized database queries to enhance overall website performance and user experience.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      {/* Animated Background Shapes */}
      <div className="experience-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="experience-container">
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          My Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={exp.id}
                className={`timeline-item ${isLeft ? 'left-timeline' : 'right-timeline'}`}
              >
                {/* The Dot popping up */}
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 200 }}
                />

                {/* The Content sliding in */}
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: "easeOut" }}
                >
                  <h3 className="exp-role">{exp.role}</h3>
                  
                  <h4 className="exp-company">
                    <Briefcase size={18} color="#ff7f50" />
                    {exp.company}
                  </h4>
                  
                  <p className="exp-duration">
                    <Calendar size={16} color="#777" />
                    {exp.duration}
                  </p>

                  <p className="exp-location">
                    <MapPin size={16} color="#777" />
                    {exp.location}
                  </p>
                  
                  <p className="exp-desc">{exp.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
