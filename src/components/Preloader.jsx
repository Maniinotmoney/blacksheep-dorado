import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Preloader.css';

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
                const increment = Math.random() * 10; // Slightly slower for effect
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    // Trigger completion when progress hits 100
    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                onComplete();
            }, 1000); // 1s delay to see the full "100%" state
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="preloader-container"
            exit={{
                opacity: 0,
                // slide up like a sophisticated panel
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <div className="xray-wrapper">
                {/* The Scanner Beam */}
                <div className="scanner-line"></div>

                {/* Base Layer: Normal Dog/Cat */}
                <div className="xray-base">
                    <i className="fa-solid fa-dog"></i>
                </div>

                {/* Top Layer: X-Ray Skeleton (using a different icon or style) */}
                {/* Visual trick: We clip this layer to reveal it as the bar moves */}
                <div className="xray-reveal">
                    <i className="fa-solid fa-dog"></i>
                    {/* Ideally, use a skeleton icon if available, e.g., fa-skull or custom SVG.
                        For now, we glow the same dog icon to simulate "energy" inside. */}
                </div>
            </div>

            <div className="progress-text">
                {Math.round(progress)}%
            </div>
            <div className="loading-label">
                Dorado
            </div>
        </motion.div>
    );
};

export default Preloader;
