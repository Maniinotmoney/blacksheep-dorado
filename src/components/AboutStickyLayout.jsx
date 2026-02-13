import React from 'react';
import aboutImage from '../assets/Expert_vets.avif'; 

const AboutStickyLayout = () => {
    return (
        <div className="about-sticky-container">
            
            <div className="about-sticky-content">

                
                <div className="narrative-block" data-aos="fade-up">
                    <h2 className="narrative-title">Our Story</h2>
                    <p className="narrative-text">
                        Welcome to Dorado Animal Hospital, where compassion meets advanced veterinary medicine.
                        Founded with a vision to provide exceptional care for pets in Oceanside, we have grown into a
                        trusted community resource. Our journey began with a simple belief: every pet deserves to be
                        treated like family.
                    </p>
                    <p className="narrative-text" style={{ marginTop: '1rem' }}>
                        Over the years, we've expanded our facility and capabilities, but our core mission remains unchanged.
                        We strive to create a warm, welcoming environment where both you and your pet feel at ease.
                    </p>
                </div>

                
                <div className="narrative-block" data-aos="fade-up">
                    <h2 className="narrative-title">Our Mission</h2>
                    <p className="narrative-text">
                        To support the lifelong health and well-being of pets by delivering exceptional veterinary
                        and surgical care. We are guided by compassion, honesty, and a deep respect for the families who trust us.
                        We believe that educating pet owners is just as important as treating pets, empowering you to make
                        informed decisions for your furry companions.
                    </p>
                </div>

                
                <div className="narrative-block" data-aos="fade-up">
                    <h2 className="narrative-title">Our Vision</h2>
                    <p className="narrative-text">
                        To be Oceanside’s premier animal hospital, known for personalized care, advanced medicine,
                        and clear communication. We envision a future where every pet has access to the highest standard
                        of medical attention, delivered with a personal touch that makes a difference.
                    </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <button className="submit-btn" style={{ width: 'auto', padding: '1rem 2rem', borderRadius: '50px' }}>
                        Book an Appointment
                    </button>
                </div>

            </div>

            
            <div className="about-sticky-visual">
                <div className="sticky-img-wrapper" data-aos="zoom-in">
                    <img src={aboutImage} alt="Veterinarians at Dorado" className="sticky-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutStickyLayout;
