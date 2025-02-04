import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <h1>Anvith Shetty</h1>
        <p>Web Developer</p>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      
      <div className="cta-buttons">
        <motion.a
          href="mailto:your-email@example.com"
          className="hire-me"
          whileHover={{ scale: 1.1 }}
        >
          Hire Me
        </motion.a>
        <motion.a
          href="/resume.pdf"
          download
          className="download-resume"
          whileHover={{ scale: 1.1 }}
        >
          Download Resume
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
