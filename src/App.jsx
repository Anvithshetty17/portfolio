
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import DownloadResume from './Components/DownloadResume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './index.css';  

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <DownloadResume  />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
