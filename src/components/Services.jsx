import React from 'react';
import '../css/Services.css';

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="features-header" data-aos="fade-up">
                    <h2 className="features-title">Pet Healthcare Services at the Dorado Clinic</h2>
                    <p className="features-desc">State-of-the-art tailored services for each pet and ultimate convenience for every pet parent.</p>
                </div>

                <div className="services-grid">
                    {/* 1. Wellness Exam */}
                    <div className="service-card" data-aos="zoom-in">
                        <div className="service-header">
                            <i className="fa-solid fa-clipboard-list service-icon-box"></i>
                            <h3 className="service-title">Wellness Exam</h3>
                        </div>
                        <p className="service-text">
                            Our wellness and preventive care services help keep your pet healthy year-round through routine exams and early detection. We monitor overall health, track changes over time, and address concerns before they become serious. Care plans include vaccinations, parasite prevention, and nutrition or weight support tailored to your pet's needs.
                        </p>
                    </div>

                    {/* 2. Vaccination */}
                    <div className="service-card" data-aos="zoom-in" data-aos-delay="50">
                        <div className="service-header">
                            <i className="fa-solid fa-syringe service-icon-box"></i>
                            <h3 className="service-title">Vaccination & Preventive Care</h3>
                        </div>
                        <p className="service-text">
                            Vaccination and preventive care help protect your pet from common, serious illnesses before they start. We create a personalized vaccine plan based on your pet’s age, lifestyle, and risk factors. With routine screenings and parasite prevention, we support long-term health and peace of mind.
                        </p>
                    </div>

                    {/* 3. Surgery */}
                    <div className="service-card highlight-service" data-aos="zoom-in" data-aos-delay="100">
                        <div className="service-header">
                            <i className="fa-solid fa-user-doctor service-icon-box"></i>
                            <h3 className="service-title">Surgery (Soft Tissue & Orthopedic)</h3>
                        </div>
                        <p className="service-text">
                            Advanced soft tissue and orthopedic surgery are performed with precision, safety, and compassionate care. Orthopedic procedures are completed by a visiting board-certified specialist for expert-level treatment. From diagnosis to recovery, we prioritize comfort, clear communication, and the best possible outcomes.
                        </p>
                    </div>

                    {/* 4. Imaging */}
                    <div className="service-card" data-aos="zoom-in" data-aos-delay="150">
                        <div className="service-header">
                            <i className="fa-solid fa-laptop-medical service-icon-box"></i>
                            <h3 className="service-title">Imaging Services</h3>
                        </div>
                        <p className="service-text">
                            Our imaging services, including ultrasound and endoscopy, allow us to examine internal organs with precision and minimal discomfort. These advanced tools help us diagnose conditions accurately and create effective treatment plans. By identifying issues early, we support faster care and better outcomes.
                        </p>
                    </div>

                    {/* 5. Technician Appointments */}
                    <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="service-header">
                            <i className="fa-solid fa-tooth service-icon-box"></i>
                            <h3 className="service-title">Dental Care</h3>
                        </div>
                        <p className="service-text">
                            Comprehensive oral exams and professional dental cleanings to maintain oral health and help prevent periodontal disease.
                        </p>
                    </div>

                    {/* 6. Emergency Walk-Ins */}
                    <div className="service-card" data-aos="zoom-in" data-aos-delay="250">
                        <div className="service-header">
                            <i className="fa-solid fa-truck-medical service-icon-box"></i>
                            <h3 className="service-title">Emergency Walk-Ins</h3>
                        </div>
                        <p className="service-text">
                            Emergency walk-ins are accepted during regular business hours for urgent and unexpected situations. Our team is prepared to assess your pet quickly and provide immediate care when it matters most. We recommend calling ahead when possible so we can be ready for your arrival.
                        </p>
                    </div>

                    {/* 7. Dental Care */}


                    {/* CTA Card */}
                    <div className="service-cta-card" data-aos="fade-up">
                        <div>
                            <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Grooming, Check-up, or Food?</h3>
                            <p className="features-desc" style={{ margin: 0 }}>What Does Your Pet Need Today?</p>
                        </div>
                        <button className="btn-black" style={{ marginTop: '1rem' }}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
