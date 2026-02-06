import React, { useState } from 'react';
import '../css/Infrastructure.css';
import infraExterior from '../assets/infra_exterior.jpg';
import infraReception from '../assets/infra_reception.jpg';
import infraExam from '../assets/infra_exam_room.jpg';
import infraXray from '../assets/infra_xray.jpg';
import heroSurgeryLight from '../assets/hero_surgery_light.jpg';
import heroDentalDog from '../assets/hero_dental_dog.jpg';

const Infrastructure = () => {
    const [activeTab, setActiveTab] = useState('clinics');

    const infraImages = {
        'clinics': infraExterior,
        'vets': infraExam,
        'grooming': infraReception,
        'care': infraXray
    };

    return (
        <section className="infra-section">
            <div className="container">
                <div className="infra-header" data-aos="fade-up">
                    <h2 className="features-title" style={{ marginBottom: 0 }}>Explore the Dorado Pet Healthcare Services and Infrastructure</h2>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="w-6 h-6 hidden md:block" alt="star" style={{ width: '24px' }} /> */}
                </div>

                {/* Tabs */}
                <div className="infra-tabs" id="infra-tabs">
                    <button className={`tab-btn ${activeTab === 'clinics' ? 'active' : ''}`} onClick={() => setActiveTab('clinics')}>Clinics</button>
                    <button className={`tab-btn ${activeTab === 'vets' ? 'active' : ''}`} onClick={() => setActiveTab('vets')}>Expert Vets</button>
                    <button className={`tab-btn ${activeTab === 'grooming' ? 'active' : ''}`} onClick={() => setActiveTab('grooming')}>Grooming</button>
                    <button className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`} onClick={() => setActiveTab('care')}>24/7 Care</button>
                </div>

                {/* Tab Content */}
                <div className="infra-grid">
                    <div className="main-image-wrapper group">
                        <img id="main-infra-img" src={infraImages[activeTab]} className="infra-main-image" alt="Infrastructure" />
                        <div className="feature-overlay"></div>
                    </div>
                    <div className="side-images-col">
                        <div className="side-image-wrapper group">
                            <img src={heroSurgeryLight} className="infra-side-image" alt="Side View" />
                            <div className="feature-tag">More options</div>
                        </div>
                        <div className="side-image-wrapper group">
                            <img src={heroDentalDog} className="infra-side-image" alt="Pet Waiting" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10" style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
                    <button className="btn-black">
                        Book Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
