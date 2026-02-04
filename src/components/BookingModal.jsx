import React from 'react';

const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <div style={styles.content}>
                    <h3 style={styles.title}>
                        Looking for Advanced, Human-Grade Care for Your Pet?
                    </h3>

                    <form onSubmit={(e) => { e.preventDefault(); alert('Booking Submitted!'); onClose(); }}>
                        <div style={styles.field}>
                            <label style={styles.label} htmlFor="name">Your Name</label>
                            <input style={styles.input} id="name" type="text" placeholder="Fullname" />
                        </div>
                        <div style={styles.field}>
                            <label style={styles.label} htmlFor="phone">Phone Number</label>
                            <input style={styles.input} id="phone" type="tel" placeholder="Phone Number" />
                        </div>

                        <button type="submit" style={styles.btn}>
                            <i className="fa-solid fa-bolt" style={{ color: '#facc15' }}></i> Book Appointment
                        </button>
                    </form>

                    <div style={styles.footer}>
                        4.9 <i className="fa-solid fa-star" style={{ color: '#facc15' }}></i> in <i className="fa-brands fa-google"></i> Ratings | 125K+ Happy Pet Parents
                    </div>
                </div>
                <button onClick={onClose} style={styles.closeBtn}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(17, 24, 39, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '28rem',
        position: 'relative',
        transform: 'scale(1)',
        transition: 'all 0.3s',
    },
    content: {
        padding: '1.5rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#111827',
    },
    field: {
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        color: '#374151',
        fontSize: '0.875rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid #d1d5db',
        fontSize: '1rem',
        outline: 'none',
        boxSizing: 'border-box',
    },
    btn: {
        width: '100%',
        backgroundColor: '#111827',
        color: '#fff',
        fontWeight: 700,
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem',
        cursor: 'pointer',
    },
    footer: {
        marginTop: '1rem',
        textAlign: 'center',
        fontSize: '0.75rem',
        color: '#6b7280',
    },
    closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        fontSize: '1.25rem',
        color: '#9ca3af',
        cursor: 'pointer',
    }
};

export default BookingModal;
