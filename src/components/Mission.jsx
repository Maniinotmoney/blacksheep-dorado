import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Mission.css';

const Mission = ({ showIntro = true }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="mission-section">
            <div className="container">
                
                {showIntro && (
                    <div className="mission-intro" data-aos="fade-up">
                        <h2 className="mission-title">Trusted Veterinary & Surgical Care<br />for your Beloved Pet</h2>
                        <div className="mission-text-container">
                            <p className="mission-text">
                                We provide compassionate, high-quality veterinary and surgical care in a welcoming, low-stress environment for pets and their families in Oceanside. Our experienced veterinary team takes the time to listen, clearly explain treatment options, and create personalized care plans—so you feel confident in every decision regarding your pet's health.
                            </p>
                            <p className="mission-text">
                                We believe comprehensive, honest, and efficient communication is a vital part of excellent veterinary medicine. That's why we provide clear guidance, client education, and ongoing support to help protect your pet's health and well-being at every stage of life. From check-in to follow-up, our animal hospital team is here to answer your questions, prioritize your pet's comfort, and deliver attentive, trusted veterinary care you can rely on.
                            </p>
                        </div>
                    </div>
                )}

                
                <div className="values-grid">
                    
                    <div className="value-card" data-aos="fade-up" data-aos-delay="0">
                        <h3 className="value-title">Vision</h3>
                        <p className="value-text">
                            To be Oceanside’s trusted animal hospital, providing personalized care, advanced medicine, and clear communication that supports pets throughout their lives.
                        </p>
                    </div>

                    
                    <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="value-title">Mission</h3>
                        <p className="value-text">
                            To support the lifelong health and well-being of pets by delivering exceptional veterinary and surgical care, guided by compassion, honesty, and a deep respect for the families who trust us.
                        </p>
                    </div>

                    
                    <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="value-title">Values</h3>
                        <p className="value-text">
                            We value empathy, open communication, collaboration, and ongoing learning—so every choice we make supports your pet’s health and your confidence in their care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
