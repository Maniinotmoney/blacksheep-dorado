import React, { useRef } from 'react';
import img1 from '../assets/hero_dental_dog.jpg';
import img2 from '../assets/hero_surgery_light.jpg';
import img3 from '../assets/feature_grooming.png';
import img4 from '../assets/infra_exam_room.jpg';
import img5 from '../assets/hero_vet_cat.jpg';
import '../css/ServicesHero.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
    const y4 = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
    const y5 = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

    return (
        <section ref={ref} className="services-hero-section">

            
            <div className="services-hero-rotated-bg">
                {[...Array(10)].map((_, i) => (
                    <div className="services-hero-marquee-row" key={i} style={{ animationDirection: i % 2 === 0 ? 'normal' : 'reverse' }}>
                        <div className="marquee-content">
                            VETERINARY • SURGERY • DENTAL • GROOMING • WELLNESS • VETERINARY • SURGERY • DENTAL • GROOMING • WELLNESS •
                        </div>
                        <div className="marquee-content">
                            VETERINARY • SURGERY • DENTAL • GROOMING • WELLNESS • VETERINARY • SURGERY • DENTAL • GROOMING • WELLNESS •
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="services-hero-bg-text">
                SERVICE
            </div>

            
            <div className="services-hero-images-wrapper">
                <motion.div className="services-hero-img-container service-img-wrapper-1" style={{ y: y1 }}>
                    <img src={img1} alt="Veterinary Care" className="services-hero-img service-img-1" />
                </motion.div>

                <motion.div className="services-hero-img-container service-img-wrapper-2" style={{ y: y2 }}>
                    <img src={img2} alt="Surgery" className="services-hero-img service-img-2" />
                </motion.div>

                <motion.div className="services-hero-img-container service-img-wrapper-3" style={{ y: y3 }}>
                    <img src={img3} alt="Grooming" className="services-hero-img service-img-3" />
                </motion.div>

                <motion.div className="services-hero-img-container service-img-wrapper-4" style={{ y: y4 }}>
                    <img src={img4} alt="Exam Room" className="services-hero-img service-img-4" />
                </motion.div>

                <motion.div className="services-hero-img-container service-img-wrapper-5" style={{ y: y5 }}>
                    <img src={img5} alt="Vet Cat" className="services-hero-img service-img-5" />
                </motion.div>
            </div>

            
            <div className="services-hero-content-grid">
                
                <div className="services-text-block" data-aos="fade-up" data-aos-delay="200">
                    <p>
                        Comprehensive care tailored to every stage of your pet's life.
                        From routine wellness exams to advanced surgical procedures,
                        we prioritize your pet's health and your peace of mind.
                    </p>
                </div>

                
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
