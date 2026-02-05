import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Features.css';

// Import local assets
import expertVetsImg from '../assets/Expert_vets.avif';
import clinicImg from '../assets/infra_reception.jpg';
import groomingImg from '../assets/feature_grooming.png';
import emergencyImg from '../assets/feature_emergency.png';

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="features-section" id="about">
            <div className="container">
                <div className="features-header" data-aos="fade-up">
                    <h2 className="features-title">WHY PETS & PARENTS<br />LOVE DORADO</h2>
                    <p className="features-desc">We combine human-grade healthcare with premium lifestyle services. Experience the new standard in veterinary excellence.</p>
                </div>

                <div className="features-grid">

                    {/* 1. Large Card - Expert Vets (Spans 2 cols) */}
                    <div className="feature-card card-large" data-aos="fade-up" data-aos-delay="0">
                        <span className="feature-number">01</span>
                        <div className="feature-tag">SPECIALISTS</div>
                        <div className="feature-image-wrapper">
                            <img src={expertVetsImg} alt="Expert Vets" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Expert Vets</h3>
                            <p className="feature-description">Multispeciality veterinarians who treat your pets like their own family.</p>
                        </div>
                    </div>

                    {/* 2. Tall Card - Clinics (Spans 2 rows, Right side) */}
                    <div className="feature-card card-tall" data-aos="fade-up" data-aos-delay="200">
                        <span className="feature-number">02</span>
                        <div className="feature-tag">INFRASTRUCTURE</div>
                        <div className="feature-image-wrapper">
                            <img src={clinicImg} alt="State-of-the-Art Clinics" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Modern Clinics</h3>
                            <p className="feature-description">Spacious, hygienic, and equipped with the latest medical technology.</p>
                        </div>
                    </div>

                    {/* 3. Standard Card - Holistic Care */}
                    <div className="feature-card card-standard" data-aos="fade-up" data-aos-delay="100">
                        <span className="feature-number">03</span>
                        <div className="feature-tag">LIFESTYLE</div>
                        <div className="feature-image-wrapper">
                            <img src={groomingImg} alt="Holistic Care" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Holistic Care</h3>
                            <p className="feature-description">Grooming & Wellness.</p>
                        </div>
                    </div>

                    {/* 4. Standard Card - Emergency */}
                    <div className="feature-card card-standard" data-aos="fade-up" data-aos-delay="200">
                        <span className="feature-number">04</span>
                        <div className="feature-tag">24/7 SUPPORT</div>
                        <div className="feature-image-wrapper">
                            <img src={emergencyImg} alt="Emergency Care" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Emergency</h3>
                            <p className="feature-description">Always here when you need us.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
