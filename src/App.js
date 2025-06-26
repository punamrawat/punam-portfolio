// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App({ toggleTheme }) {
  return (
    <Box sx={{ pt: 8 }} >
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
