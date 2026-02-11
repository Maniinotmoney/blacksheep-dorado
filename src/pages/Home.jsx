import React, { useEffect, useState } from 'react';
import '../css/index.css';

// Components
import Hero from '../components/Hero';
import TapLocal from '../components/TapLocal';
import Features from '../components/Features';
import Mission from '../components/Mission';
import Infrastructure from '../components/Infrastructure';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import BookingModal from '../components/BookingModal';
import Preloader from '../components/Preloader';

// Animation
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!loading) {
            AOS.init({
                once: true,
                offset: 100,
                duration: 800,
            });
        }
    }, [loading]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="home-page">
            <AnimatePresence>
                {loading ? (
                    <Preloader key="preloader" onComplete={() => setLoading(false)} />
                ) : (
                    <div key="main-content">
                        <main>
                            <Hero />
                            <Features />
                            <TapLocal />
                            {/* Keeping Mission here as well? Maybe remove if moving to About entirely. 
                  But usually Home has snippets. Let's keep it for now as per plan. */}
                            <Mission />
                            <Infrastructure />
                            <Testimonials />
                            <Blogs />
                        </main>

                        <BookingModal isOpen={isModalOpen} onClose={closeModal} />

                        {/* Floating Action Button */}
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); openModal(); }}
                            style={{
                                position: 'fixed',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: '#22c55e',
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
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
