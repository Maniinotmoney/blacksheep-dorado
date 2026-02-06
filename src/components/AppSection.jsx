import React from 'react';
import '../css/AppSection.css';

const AppSection = () => {
    return (
        <section className="app-section">
            <div className="container">
                <div className="app-wrapper">
                    <div className="app-content" data-aos="fade-right">
                        <h2 className="app-title">Dorado - Pet Clinic &<br />Grooming App</h2>
                        <ul className="app-list">
                            <li className="app-list-item">
                                <i className="fa-solid fa-check-double text-primary" style={{ color: 'var(--primary)' }}></i> Timely reminders for all your pet's needs
                            </li>
                            <li className="app-list-item">
                                <i className="fa-solid fa-check-double text-primary" style={{ color: 'var(--primary)' }}></i> Doorstep delivery of pet products within 2 Hours
                            </li>
                            <li className="app-list-item">
                                <i className="fa-solid fa-check-double text-primary" style={{ color: 'var(--primary)' }}></i> Health and vaccination records, all in one place
                            </li>
                        </ul>
                        <div className="app-buttons">
                            <button className="store-btn">
                                <i className="fa-brands fa-apple" style={{ fontSize: '1.5rem' }}></i>
                                <div className="text-left">
                                    <div className="store-text-small">Download on the</div>
                                    <div className="store-text-large">App Store</div>
                                </div>
                            </button>
                            <button className="store-btn">
                                <i className="fa-brands fa-google-play" style={{ fontSize: '1.5rem' }}></i>
                                <div className="text-left">
                                    <div className="store-text-small">Get it on</div>
                                    <div className="store-text-large">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="app-content" style={{ display: 'flex', justifyContent: 'center' }} data-aos="fade-left">
                        {/* Phone Mockup using HTML/CSS */}
                        <div className="iphone-mockup">
                            {/* Notch */}
                            <div className="iphone-notch"></div>
                            {/* Screen Content */}
                            <div className="iphone-screen">
                                <div className="mockup-header">
                                    <div style={{ fontWeight: 'bold' }}>dorado</div>
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="mockup-search">
                                    <i className="fa-solid fa-magnifying-glass"></i> Search
                                </div>
                                {/* Simulated App UI */}
                                <div className="mockup-icons">
                                    <div className="mockup-icon-card">
                                        <div className="icon-circle" style={{ backgroundColor: '#dbeafe' }}></div>
                                        <div style={{ fontSize: '10px' }}>Doctor</div>
                                    </div>
                                    <div className="mockup-icon-card">
                                        <div className="icon-circle" style={{ backgroundColor: '#fce7f3' }}></div>
                                        <div style={{ fontSize: '10px' }}>Grooming</div>
                                    </div>
                                    <div className="mockup-icon-card">
                                        <div className="icon-circle" style={{ backgroundColor: '#ffedd5' }}></div>
                                        <div style={{ fontSize: '10px' }}>Food</div>
                                    </div>
                                </div>
                                <div className="mockup-card">
                                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9a3412', marginBottom: '0.25rem' }}>Follow Up</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '2rem', height: '2rem', backgroundColor: '#d1d5db', borderRadius: '50%' }}></div>
                                        <div>
                                            <div style={{ fontSize: '10px', fontWeight: 'bold' }}>Simba's Follow Up</div>
                                            <div style={{ fontSize: '8px', color: '#6b7280' }}>by Doctor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppSection;
