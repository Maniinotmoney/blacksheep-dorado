import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">
                            <i className="fa-solid fa-heart-pulse"></i>
                            <span>dorado</span>
                        </div>
                        <p className="footer-desc">
                            3502 College Blvd Suite A,<br />
                            Oceanside, California<br />
                            92056, tel- (760) 730-6626 .
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">Contact Us</a></li>
                            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Career</a></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="footer-heading">Download App</h4>
                        <div className="footer-app-btns">
                            <button className="footer-app-btn">
                                <i className="fa-brands fa-apple" style={{ fontSize: '1.25rem' }}></i>
                                <div className="text-left">
                                    <div className="store-text-small">Download on the</div>
                                    <div className="store-text-large" style={{ fontSize: '0.75rem' }}>App Store</div>
                                </div>
                            </button>
                            <button className="footer-app-btn">
                                <i className="fa-brands fa-google-play" style={{ fontSize: '1.25rem' }}></i>
                                <div className="text-left">
                                    <div className="store-text-small">GET IT ON</div>
                                    <div className="store-text-large" style={{ fontSize: '0.75rem' }}>Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div> */}

                    <div>
                        <h4 className="footer-heading">Stay in the Loop!</h4>
                        <p className="footer-desc" style={{ marginBottom: '1rem' }}>Sign up for pet care tips and updates.</p>
                        <div className="footer-newsletter">
                            <input type="email" placeholder="Enter Your Email" className="newsletter-input" />
                            <button className="newsletter-btn"><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2026 Dorado Animal Hospital & Surgical Center.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
