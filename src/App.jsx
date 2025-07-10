
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Course  from './Components/Course';
import CursorTrail from './Components/CursorTrail';
import './index.css';  
import TerminalChatbot from './Components/TerminalChatbot';
const App = () => {
  return (
    <div>
    
      <Header />
      
      <About />
      
      <Projects />
      <Course />
      <Contact />
      <Footer />
      <TerminalChatbot />
     
    </div>
  );
};

export default App;
