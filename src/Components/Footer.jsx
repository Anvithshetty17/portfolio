// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Anvith Shetty</h3>
        <p>Passionate about building interactive and efficient applications.</p>
        
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/resume.pdf" target="_blank">Resume</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>Email: <a href="mailto:anvithshetty555@gmail.com">Anvithshetty555@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+91 7204947177</a></p>
            <p>Location: perdoor , karnataka India</p>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/Anvithshetty17/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/anvith-shetty-b371372b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:anvithshetty555@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-bottom">
      <p>Made with ❤️ by Anvith Shetty</p>
      <p>"Dream big, work hard, stay focused."</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
