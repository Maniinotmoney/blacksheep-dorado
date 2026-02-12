import React, { useEffect, useState, useRef } from 'react';
import '../css/ServicesModern.css';
import { client } from '../sanityClient';
import { motion, AnimatePresence } from 'framer-motion';

const defaultServices = [
    {
        title: "Wellness Exam",
        description: "Our wellness and preventive care services help keep your pet healthy year-round through routine exams and early detection.",
        id: "01"
    },
    {
        title: "Vaccination",
        description: "Vaccination and preventive care help protect your pet from common, serious illnesses before they start.",
        id: "02"
    },
    {
        title: "Surgery",
        description: "Advanced soft tissue and orthopedic surgery are performed with precision, safety, and compassionate care.",
        id: "03"
    },
    {
        title: "Imaging",
        description: "Our imaging services, including ultrasound and endoscopy, allow us to examine internal organs with precision.",
        id: "04"
    },
    {
        title: "Dental Care",
        description: "Comprehensive oral exams and professional dental cleanings to maintain oral health.",
        id: "05"
    },
    {
        title: "Emergency",
        description: "Emergency walk-ins may be accepted during regular business hours for urgent and unexpected situations.",
        id: "06"
    }
];

const ServicesModern = () => {
    const [services, setServices] = useState(defaultServices);
    const [hoveredService, setHoveredService] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [selectedService, setSelectedService] = useState(null);

    // Default images for fallback (can be replaced with real URLs)
    const placeholderImage = "./src/assets/hero_surgery_light.jpg";

    useEffect(() => {
        client.fetch(`*[_type == "services"] | order(_createdAt asc)`)
            .then(data => {
                if (data && data.length > 0) {
                    // Map sanity data to our structure if needed
                    const formatted = data.map((item, index) => ({
                        ...item,
                        id: String(index + 1).padStart(2, '0')
                    }));
                    setServices(formatted);
                }
            })
            .catch(console.error);
    }, []);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="services-modern-section" onMouseMove={handleMouseMove}>
            <div className="modern-container">
                <header className="modern-header" data-aos="fade-up">
                    <h1 className="modern-title">Our Expertise</h1>
                    <p className="modern-subtitle">Comprehensive care tailored to your pet's needs. Hover to explore.</p>
                </header>

                <div className="services-list">
                    {services.map((service, index) => (
                        <div
                            key={service.id || index}
                            className="service-item"
                            onMouseEnter={() => setHoveredService(service)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() => setSelectedService(service)}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <span className="service-id">{service.id || String(index + 1).padStart(2, '0')}</span>
                            <h2 className="service-name">{service.title}</h2>
                            <div className="service-meta">
                                <span className="service-arrow">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Image Cursor Follower */}
            <motion.div
                className={`hover-reveal ${hoveredService ? 'active' : ''}`}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    x: mousePosition.x - 150, // Center the 300px wide div
                    y: mousePosition.y - 200, // Center the 400px tall div
                    pointerEvents: 'none'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: hoveredService ? 1 : 0,
                    scale: hoveredService ? 1 : 0.8
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
                {hoveredService && (
                    <img
                        src={hoveredService.imageUrl || placeholderImage}
                        alt={hoveredService.title}
                        className="hover-reveal-img"
                    />
                )}
            </motion.div>

            {/* Selected Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="service-details-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            className="details-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{selectedService.title}</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#444' }}>
                                {selectedService.description}
                            </p>
                            <button
                                className="btn-black"
                                style={{ marginTop: '2rem' }}
                                onClick={() => setSelectedService(null)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesModern;
