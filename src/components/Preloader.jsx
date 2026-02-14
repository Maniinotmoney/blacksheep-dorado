import React, { useEffect, useState } from 'react';
import '../css/Preloader.css';
import heroDentalDog from '../assets/dorado-logo-big-D.png';

const Preloader = ({ onLoadComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                if (onLoadComplete) onLoadComplete();
            }, 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    if (onLoadComplete && isExiting && !document.querySelector('.preloader-container')) return null;

    return (
        <div className={`preloader-container ${isExiting ? 'preloader-exit' : ''}`}>
            <div className="scanner-wrapper">
                <img src={heroDentalDog} alt="Loading..." className="dog-image" />

                <div className="xray-overlay">
                    <img src={heroDentalDog} alt="X-Ray Scan" className="dog-image" />
                </div>

                <div className="scan-line"></div>
            </div>

            <div className="loading-text">DORADO PETS</div>
        </div>
    );
};

export default Preloader;
