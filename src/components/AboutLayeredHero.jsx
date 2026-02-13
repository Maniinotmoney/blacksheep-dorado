import React, { useRef } from 'react';
import aboutImage from '../assets/Expert_vets.avif'; 
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutLayeredHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    
    const yString = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 
    

    
    const y = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);

    return (
        <section ref={ref} className="layered-hero-section">

            
            <div className="layered-hero-bg-text desktop-text">
                DORADO
            </div>
            <div className="layered-hero-bg-text mobile-text">
                <div>DO</div>
                <div>RA</div>
                <div>DO</div>
            </div>

            
            <div className="layered-hero-image-container" data-aos="zoom-in" data-aos-duration="1000">
                <motion.div style={{ y, height: '120%' }}>
                    
                    <img src={aboutImage} alt="Dorado Team" className="layered-hero-img" />
                </motion.div>
            </div>

            
            <div className="layered-hero-content-grid">
                
                <div className="layered-text-block" data-aos="fade-up" data-aos-delay="200">
                    <p>
                        Dorado's values are inscribed in a true sense of modernity and purpose:
                        Compassion rhymes with clarity of medicine; calm elegance aligns with
                        gentle care; comfort is balanced by sensitive sophistication.
                    </p>
                </div>

                
                <div className="layered-text-block" data-aos="fade-up" data-aos-delay="400" >
                    <p style={{ textAlign: 'right' }}>
                        Each treatment begins with integrity—from the diagnosis to the final recovery.
                        In restraint, health is revealed; in simplicity, intention is amplified. This is
                        care not to impress, but to accompany.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default AboutLayeredHero;
