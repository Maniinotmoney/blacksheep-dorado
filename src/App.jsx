import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './css/index.css';

// ScrollToTop component to ensure page starts at top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // Check session storage to prevent double-loading on same session refreshes (optional but smoother)
  // Or just default to true. If user wants it every time, keep true.
  // To debug "double run", let's use a ref to track if we've started.
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  // AOS Init
  useEffect(() => {
    if (!loading) {
      AOS.init({
        once: true,
        offset: 100,
        duration: 800,
      });
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasLoaded', 'true');
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        ) : (
          <>
            <ScrollToTop />
            <Header />
            <div key="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
