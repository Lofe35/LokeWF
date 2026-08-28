import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticumIPage from './pages/PracticumIPage';
import PracticumIIPage from './pages/PracticumIIPage';
import GalleryPage from './pages/GalleryPage';
import WeekDetailPage from './pages/WeekDetailPage';
import Lenis from '@studio-freight/lenis';

// Page wrapper with transition animation
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/practicum-i" element={<PageWrapper><PracticumIPage /></PageWrapper>} />
        <Route path="/practicum-ii" element={<PageWrapper><PracticumIIPage /></PageWrapper>} />
        <Route path="/practicum-i/week/:weekNumber" element={<PageWrapper><WeekDetailPage practicumType="i" /></PageWrapper>} />
        <Route path="/practicum-ii/week/:weekNumber" element={<PageWrapper><WeekDetailPage practicumType="ii" /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><HomePage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
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
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
