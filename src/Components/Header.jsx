
import React from "react";
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
    </header>
  );
};

export default Header;
