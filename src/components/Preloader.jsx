import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/index.css';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    // Simulate loading progress
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        return () => clearInterval(timer);
    }, []);

    // Trigger completion when progress hits 100
    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                onComplete();
            }, 800); // Slight delay to show 100%
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="preloader-container"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#ffffff', // Or your brand color
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        margin: 0,
                        lineHeight: 1
                    }}
                >
                    DORADO
                </motion.h1>
            </div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                style={{
                    height: '4px',
                    backgroundColor: 'var(--secondary)',
                    marginTop: '2rem',
                    borderRadius: '2px',
                    maxWidth: '300px',
                    width: '0%' // Handled by animate prop
                }}
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    marginTop: '1rem',
                    fontFamily: 'var(--font-family)',
                    color: 'var(--text-light)',
                    fontSize: '0.9rem'
                }}
            >
                {Math.round(progress)}%
            </motion.p>

        </motion.div>
    );
};

export default Preloader;
