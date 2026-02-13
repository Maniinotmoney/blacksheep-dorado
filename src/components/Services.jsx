import React, { useEffect, useState } from 'react';
import '../pages/css/Services.css';
import { client } from '../sanityClient';

const defaultServices = [
    {
        title: "Wellness Exam",
        description: "Our wellness and preventive care services help keep your pet healthy year-round through routine exams and early detection. We monitor overall health, track changes over time, and address concerns before they become serious. Care plans include vaccinations, parasite prevention, and nutrition or weight support tailored to your pet's needs.",
        icon: "fa-solid fa-clipboard-list"
    },
    {
        title: "Vaccination & Preventive Care",
        description: "Vaccination and preventive care help protect your pet from common, serious illnesses before they start. We create a personalized vaccine plan based on your pet’s age, lifestyle, and risk factors. With routine screenings and parasite prevention, we support long-term health and peace of mind.",
        icon: "fa-solid fa-syringe"
    },
    {
        title: "Surgery (Soft Tissue & Orthopedic)",
        description: "Advanced soft tissue and orthopedic surgery are performed with precision, safety, and compassionate care. Orthopedic procedures are completed by a visiting board-certified specialist for expert-level treatment. From diagnosis to recovery, we prioritize comfort, clear communication, and the best possible outcomes.",
        icon: "fa-solid fa-user-doctor",
        highlight: true
    },
    {
        title: "Imaging Services",
        description: "Our imaging services, including ultrasound and endoscopy, allow us to examine internal organs with precision and minimal discomfort. These advanced tools help us diagnose conditions accurately and create effective treatment plans. By identifying issues early, we support faster care and better outcomes.",
        icon: "fa-solid fa-laptop-medical"
    },
    {
        title: "Dental Care",
        description: "Comprehensive oral exams and professional dental cleanings to maintain oral health and help prevent periodontal disease.",
        icon: "fa-solid fa-tooth"
    },
    {
        title: "Emergency Walk-Ins",
        description: "Emergency walk-ins are accepted during regular business hours for urgent and unexpected situations. Our team is prepared to assess your pet quickly and provide immediate care when it matters most. We recommend calling ahead when possible so we can be ready for your arrival.",
        icon: "fa-solid fa-truck-medical"
    }
];

const Services = () => {
    const [services, setServices] = useState(defaultServices);

    useEffect(() => {
        client.fetch(`*[_type == "services"] | order(_createdAt asc)`)
            .then(data => {
                if (data && data.length > 0) {
                    setServices(data);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="features-header" data-aos="fade-up">
                    <h2 className="features-title">Pet Healthcare Services at the Dorado Clinic</h2>
                    <p className="features-desc">State-of-the-art tailored services for each pet and ultimate convenience for every pet parent.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={service._id || index} className={`service-card ${service.highlight ? 'highlight-service' : ''}`} data-aos="zoom-in" data-aos-delay={index * 50}>
                            <div className="service-header">
                                {service.icon && <i className={`${service.icon} service-icon-box`}></i>}
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <p className="service-text">{service.description}</p>
                        </div>
                    ))}

                    
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
