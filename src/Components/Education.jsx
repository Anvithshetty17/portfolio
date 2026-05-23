import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications - MCA",
    school: "NMAM Institute of Technology",
    duration: "Aug 2024 - Sep 2026",
    description: "Deepening my expertise in advanced computing concepts, software engineering, and full-stack development methodologies. Focusing on building robust, scalable applications and enhancing my problem-solving skills in enterprise environments."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Mangalore University",
    duration: "Oct 2021 - Jul 2024",
    description: "Developed a strong foundation in computer science and programming logic. Gained practical experience in web development, database management, and building interactive software systems."
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Animated Background Shapes */}
      <div className="education-bg-shapes">
        <div className="edu-shape edu-shape-1"></div>
        <div className="edu-shape edu-shape-2"></div>
        <div className="edu-shape edu-shape-3"></div>
      </div>

      <div className="education-container">
        <motion.h2 
          className="education-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Education
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className="education-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="edu-degree">{edu.degree}</h3>
              
              <h4 className="edu-school">
                <GraduationCap size={20} />
                {edu.school}
              </h4>
              
              <p className="edu-duration">
                <Calendar size={16} />
                {edu.duration}
              </p>
              
              <p className="edu-desc">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
