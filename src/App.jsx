import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Mission from './components/Mission';
import Services from './components/Services';
import Infrastructure from './components/Infrastructure';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
// import AppSection from './components/AppSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './css/index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />

        <Services />
        <Mission />
        <Infrastructure />
        <Testimonials />
        <Blogs />
        {/* <AppSection /> */}
      </main>
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Floating Action Button */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); openModal(); }}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          backgroundColor: '#22c55e', // green-500
          color: 'white',
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          zIndex: 50,
          transition: 'background-color 0.3s'
        }}
        className="fab-btn"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
}

export default App;
