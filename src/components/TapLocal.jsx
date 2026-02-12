import React from 'react';
import { motion } from 'framer-motion';
import doradoVid from '../assets/video/dorado-vid.mp4';
import '../css/TapLocal.css';

const TapLocal = () => {
    return (
        <section className="tap-local">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="tap-local-video"
                poster="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg"
                src={doradoVid}
            >
                Your browser does not support the video tag.
            </video>
            <div className="tap-local-overlay"></div>
            <motion.div
                className="tap-local-content container"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 50, duration: 1 }}
            >
                <p className="tap-local-quote">
                    "WHERE COMPASSION MEETS CUTTING-EDGE VETERINARY CARE."
                </p>
                <h2 className="tap-local-heading">
                    EXPERIENCE THE DORADO DIFFERENCE
                </h2>
                {/* <div className="tap-local-divider"></div> */}
                <p className="tap-local-subtext">
                    Open <strong>6 Days A Week</strong> for your convenience <br />
                    <strong>8:30 AM - 10:00 PM</strong>
                </p>
            </motion.div>
        </section>
    );
};

export default TapLocal;
