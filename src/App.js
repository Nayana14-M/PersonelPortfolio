// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import About from './About';
import Education from './Education';
import Interests from './Interests';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Intro from './Intro';

 function App() {
  return (
    <>
    <Routes>
    
        <Route path="/" element={<Intro/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/interests" element={<Interests/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    </>
  );
}

export default App;
