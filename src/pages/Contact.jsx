import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page page-container">
            <div className="container">
                <h1 className="page-title text-center text-h1" style={{ textAlign: 'center' }}>Contact Us</h1>

                <div className="contact-grid">
                    
                    <div data-aos="fade-right">
                        <h2 className="text-h2 mb-4" style={{ marginBottom: '1rem' }}>Get in Touch</h2>
                        <p className="text-body mb-6" style={{ marginBottom: '1.5rem' }}>
                            We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
                        </p>

                        <div className="contact-details">
                            <div className="contact-info-item">
                                <i className="fa-solid fa-location-dot contact-icon"></i>
                                <div>
                                    <h3 className="contact-label">Address</h3>
                                    <p className="text-body">3502 College Blvd Suite A,<br />Oceanside, California 92056</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <i className="fa-solid fa-phone contact-icon"></i>
                                <div>
                                    <h3 className="contact-label">Phone</h3>
                                    <p className="text-body">(760) 730-6626</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <i className="fa-solid fa-envelope contact-icon"></i>
                                <div>
                                    <h3 className="contact-label">Email</h3>
                                    <p className="text-body">info@doradohospital.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container" style={{ marginTop: '2rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.0238128795!2d-117.2995966!3d33.1979944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73fa8f813bbd%3A0xe5a1a1f5f2a1a1!2s3502%20College%20Blvd%20Suite%20A%2C%20Oceanside%2C%20CA%2092056!5e0!3m2!1sen!2sus!4v1675841234567!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    
                    <div data-aos="fade-left" className="contact-form-card">
                        <h2 className="text-h2 mb-4" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Send Message</h2>
                        <form>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input className="form-input" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-input" id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea className="form-textarea" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-actions">
                                <button className="submit-btn" type="button">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
