import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
