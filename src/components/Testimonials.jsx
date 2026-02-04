import React from 'react';
import '../css/Testimonials.css';

const Testimonials = () => {
    return (
        <section className="reviews-section">
            <div className="container">
                <div className="reviews-header" data-aos="fade-up">
                    <h2 className="features-title" style={{ marginBottom: 0 }}>Meet Our Happy Pets & Happier Pet Parents</h2>
                    <div className="rating-display">
                        <div className="rating-score">4.9 <i className="fa-solid fa-star star-icon"></i></div>
                        <div className="rating-count">72K+ Ratings</div>
                    </div>
                </div>

                <div className="reviews-grid">
                    {/* Review 1 */}
                    <div className="review-card" data-aos="fade-up">
                        <div className="review-header">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="reviewer-avatar" alt="User" />
                            <div>
                                <h4 className="reviewer-name">Akash Yadav</h4>
                                <p className="pet-name">Oreo</p>
                            </div>
                            <div className="review-badge">
                                <i className="fa-brands fa-google text-blue-500" style={{ color: '#3b82f6' }}></i> 5.0
                            </div>
                        </div>
                        <p className="review-text">"Prompt response, even at 1am. Oreo started vomiting around midnight. Dorado treated him immediately at night and within a couple of days he is ok, he's now fit and fine."</p>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="review-header">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="reviewer-avatar" alt="User" />
                            <div>
                                <h4 className="reviewer-name">Sakshi Singh</h4>
                                <p className="pet-name">Jacky</p>
                            </div>
                            <div className="review-badge">
                                <i className="fa-brands fa-google" style={{ color: '#3b82f6' }}></i> 4.9
                            </div>
                        </div>
                        <p className="review-text">"I would like to thank the vet for treating my dog and explaining me how to take care of my dog. Highly recommend Dorado to all pet parents for grooming and treatment."</p>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="review-header">
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" className="reviewer-avatar" alt="User" />
                            <div>
                                <h4 className="reviewer-name">Salman</h4>
                                <p className="pet-name">Rosy</p>
                            </div>
                            <div className="review-badge">
                                <i className="fa-brands fa-google" style={{ color: '#3b82f6' }}></i> 5.0
                            </div>
                        </div>
                        <p className="review-text">"Our cat was diagnosed with pyometra. The clinic is well equipped, very neat and clean. The doctors are experienced. All staff are very polite and know how to handle cats."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
