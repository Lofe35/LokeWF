import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PracticumISection from './components/PracticumISection';
import PracticumIISection from './components/PracticumIISection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <PracticumISection />
      <PracticumIISection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default App;
