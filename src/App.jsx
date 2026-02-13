import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header from './components/Header';
import Footer from './components/Footer';



import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';

import './css/index.css';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => setIsLoading(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!isLoading && (
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
    </div>
  );
}

export default App;
