import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import doradoLogo from '../assets/dorado-logo.png';


const Footer = () => {
    return (
        <footer className="footer" id="contact-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">
                            <img src={doradoLogo} alt="Dorado Logo" className="footer-logo-img" />
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
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Career</a></li>
                        </ul>
                    </div>

                    

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
