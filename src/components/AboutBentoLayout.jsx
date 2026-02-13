import React from 'react';
import aboutImage from '../assets/Expert_vets.avif';

const AboutBentoLayout = () => {
    return (
        <div className="bento-grid-container">
            
            <div className="bento-box bento-hero" data-aos="fade-up">
                <img src={aboutImage} alt="Dorado Team" className="bento-hero-img" />
                <div className="bento-hero-overlay">
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Expert Care, Delivered with Love</h2>
                </div>
            </div>

            
            <div className="bento-box bento-content" data-aos="fade-up" data-aos-delay="100">
                <h3 className="bento-title">Our Story</h3>
                <p className="bento-text">
                    Founded with a vision to provide exceptional care for pets in Oceanside, we have grown into a
                    trusted community resource. Every pet deserves to be treated like family.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                    <a href="#contact" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'var(--primary)' }}>Read more →</a>
                </div>
            </div>

            
            <div className="bento-box bento-stat" data-aos="fade-up" data-aos-delay="200">
                <div className="bento-number">15+</div>
                <div className="bento-label">Years of Service</div>
            </div>

        </div>
    );
};

export default AboutBentoLayout;
