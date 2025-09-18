import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import PortfolioSection from './PortfolioSection';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <PortfolioSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;