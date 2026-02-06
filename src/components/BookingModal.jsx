import React, { useEffect, useState } from 'react';
import '../css/BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className="booking-overlay" onClick={onClose} aria-modal="true" role="dialog">
            <div className="booking-modal" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="booking-close-btn" aria-label="Close modal">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="booking-content">
                    <div className="booking-header">
                        <div className="booking-icon-wrapper">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                        <h3 className="booking-title">
                            Book Your Pet's<br />Perfect Care
                        </h3>
                    </div>

                    <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Booking Submitted!'); onClose(); }}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <div className="form-input-wrapper">
                                <i className="fa-regular fa-user form-input-icon"></i>
                                <input className="form-input" id="name" type="text" placeholder="John Doe" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">Phone Number</label>
                            <div className="form-input-wrapper">
                                <i className="fa-solid fa-phone form-input-icon"></i>
                                <input className="form-input" id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                            </div>
                        </div>

                        <button type="submit" className="booking-submit-btn">
                            <span>Confirm Appointment</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>

                    <div className="booking-footer">
                        <div className="rating-badge">
                            <span className="rating-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <span>4.9/5 Average Rating</span>
                        </div>
                        <div>Trusted by 2,000+ Happy Pet Parents</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
