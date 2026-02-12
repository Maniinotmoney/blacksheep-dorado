import React, { useRef } from 'react';
import img1 from '../assets/hero_vet_cat.jpg';
import img2 from '../assets/hero_surgery_light.jpg';
import '../css/ServicesHero.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]); // Parallax in opposite direction

    return (
        <section ref={ref} className="services-hero-section">

            {/* Massive Background Text */}
            <div className="services-hero-bg-text">
                SERVICE
            </div>

            {/* Two Images Centered */}
            <div className="services-hero-images-wrapper">
                <motion.div className="services-hero-img-container service-img-wrapper-1" style={{ y: y1 }}>
                    <img src={img1} alt="Veterinary Care" className="services-hero-img service-img-1" />
                </motion.div>

                <motion.div className="services-hero-img-container service-img-wrapper-2" style={{ y: y2 }}>
                    <img src={img2} alt="Surgery" className="services-hero-img service-img-2" />
                </motion.div>
            </div>

            {/* Bottom Content Grid */}
            <div className="services-hero-content-grid">
                {/* Left Text Block */}
                <div className="services-text-block" data-aos="fade-up" data-aos-delay="200">
                    <p>
                        Comprehensive care tailored to every stage of your pet's life.
                        From routine wellness exams to advanced surgical procedures,
                        we prioritize your pet's health and your peace of mind.
                    </p>
                </div>

                {/* Right Text Block */}
                <div className="services-text-block" data-aos="fade-up" data-aos-delay="400" >
                    <p style={{ textAlign: 'right' }}>
                        Our state-of-the-art facility meets compassionate expertise.
                        We believe in proactive health management, ensuring a longer,
                        happier life for your furry companions.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default ServicesHero;
