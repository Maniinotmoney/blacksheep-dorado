import React from "react";
import { motion } from "framer-motion";
import "../css/KineticMarquee.css";

// Images
import img1 from "../assets/hero_vet_cat.jpg";
import img2 from "../assets/feature_grooming.png";
import img3 from "../assets/hero_dental_dog.jpg";
import img4 from "../assets/feature_emergency.png";

const marqueeVariants = {
    animate: {
        x: ["0%", "-50%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Slower for better visibility
                ease: "linear",
            },
        },
    },
};

const KineticMarquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-wrapper">
                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <div className="marquee-item">VETERINARY SURGERY</div>
                    <img src={img1} alt="Vet" className="marquee-img" />
                    <div className="marquee-item">PET GROOMING</div>
                    <img src={img2} alt="Grooming" className="marquee-img" />
                    <div className="marquee-item">DENTAL CARE</div>
                    <img src={img3} alt="Dental" className="marquee-img" />
                    <div className="marquee-item">URGENT CARE</div>
                    <img src={img4} alt="Emergency" className="marquee-img" />

                    {/* Duplicate for infinite loop */}
                    <div className="marquee-item">VETERINARY SURGERY</div>
                    <img src={img1} alt="Vet" className="marquee-img" />
                    <div className="marquee-item">PET GROOMING</div>
                    <img src={img2} alt="Grooming" className="marquee-img" />
                    <div className="marquee-item">DENTAL CARE</div>
                    <img src={img3} alt="Dental" className="marquee-img" />
                    <div className="marquee-item">URGENT CARE</div>
                    <img src={img4} alt="Emergency" className="marquee-img" />
                </motion.div>
            </div>
        </div>
    );
};

export default KineticMarquee;
