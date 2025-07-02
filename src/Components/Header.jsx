
import React from "react";
import { FaDownload } from 'react-icons/fa';
import { FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Anvith Shetty</h1>
        <p>Web Developer</p>
      </div>
      <nav>
        <ul>
           <li>
            
            <a href="/ANVITH.pdf" > <FaDownload id="icon" />Resume</a>
          </li>
          <li >
            <a href="#about"> <FaUser id="icon" /> About</a>
          </li>
          <li >
            
            <a href="#projects"><FaFolderOpen id="icon"/> Projects</a>
          </li>
          <li >
            
            <a href="#contact"> <FaEnvelope id="icon" /> Contact</a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
