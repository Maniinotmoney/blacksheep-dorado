import React, { useRef, useState, useEffect } from 'react';
import '../css/ServicesAppPromo.css';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';


import imgVet from '../assets/hero_vet_cat.jpg';
import imgDog from '../assets/hero_dental_dog.jpg';
import imgCat from '../assets/blog_cat_health.png';
import imgFood from '../assets/blog_food_bowl.png';
import avatar1 from '../assets/avatar_dog_owner_1.png';
import avatar2 from '../assets/avatar_cat_owner_1.png';

const ServicesAppPromo = () => {
    
    const cardData = [
        {
            title: "WELLNESS",
            subhead: "Routine preventive care",
            author: "Dr. Perez",
            img: imgVet,
            listeners: "12k pets",
            meta: "Start Plan • 24m",
            avatars: [avatar1, avatar2, avatar1],
            color: "#ffffffff"
        },
        {
            title: "NUTRITION",
            subhead: "Metabolic diet planning",
            author: "Dr. Perez",
            img: imgFood,
            listeners: "8.5k pets",
            meta: "Lesson 3/10 • 15m",
            avatars: [avatar2, avatar1, avatar2],
            color: "#FFEDD5" 
        },
        {
            title: "DENTAL",
            subhead: "Oral hygiene & surgery",
            author: "Dr. Perez",
            img: imgDog,
            listeners: "5k pets",
            meta: "Lesson 1/5 • 45m",
            avatars: [avatar1, avatar2],
            color: "#DBEAFE" 
        },
        {
            title: "BEHAVIOR",
            subhead: "Anxiety & training",
            author: "Dr. Perez",
            img: imgCat,
            listeners: "2k pets",
            meta: "Lesson 2/4 • 30m",
            avatars: [avatar1, avatar2],
            color: "#F3E8FF" 
        },
        {
            title: "SURGERY",
            subhead: "Advanced procedures",
            author: "Dr. Perez",
            img: imgVet,
            listeners: "1.2k pets",
            meta: "Consultation • 1h",
            avatars: [avatar2, avatar1],
            color: "#FCE7F3" 
        },
        {
            title: "GROOMING",
            subhead: "Hygiene & style",
            author: "Dr. Perez",
            img: imgDog,
            listeners: "15k pets",
            meta: "Daily Tips • 10m",
            avatars: [avatar1, avatar2, avatar1],
            color: "#FEE2E2" 
        }
    ];

    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-300, 300], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-300, 300], [-15, 15]), { stiffness: 150, damping: 20 });

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const containerCenter = container.getBoundingClientRect().width / 2;

        const cards = container.querySelectorAll('.lesson-card');
        let closestIndex = 0;
        let minDiff = Infinity;

        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const diff = Math.abs(containerCenter - cardCenter);

            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseMove = (e) => {
        if (!scrollContainerRef.current) return;

        const rect = scrollContainerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    
    useEffect(() => {
        if (scrollContainerRef.current) {
            const cardWidth = 340 + 32;
            scrollContainerRef.current.scrollLeft = cardWidth * 0.5;
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const isMobile = window.innerWidth < 768;
            
            const scrollAmount = isMobile ? (window.innerWidth * 0.85) : 370;

            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const isMobile = window.innerWidth < 768;
            
            const scrollAmount = isMobile ? (window.innerWidth * 0.85) : 370;

            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            className="services-app-promo-section"
            style={{
                backgroundColor: cardData[activeIndex].color,
                transition: 'background-color 1s ease-in-out'
            }}
        >
            <div className="promo-container">
                <div className="promo-header-row" data-aos="fade-up">
                    <div className="promo-header-left">
                        <div>
                            
                            <h2 className="promo-h2">Dorado Plans </h2>
                            
                        </div>
                    </div>
                </div>

                <div
                    className="carousel-wrapper"
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="carousel-track"
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        {cardData.map((card, index) => {
                            const isActive = activeIndex === index;
                            const style = isActive ? { rotateX, rotateY, zIndex: 10 } : {};

                            return (
                                <motion.div
                                    key={index}
                                    className={`lesson-card ${isActive ? 'active-card' : ''}`}
                                    style={style}
                                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                                >
                                    <div className="card-bg-dark"></div>
                                    <img src={card.img} alt={card.title} className="card-image" />

                                    <div className="card-content-overlay">
                                        <div className="card-top">
                                            <h3 className="card-headline">{card.title}</h3>
                                            <p className="card-subhead">{card.subhead}</p>
                                            <p className="card-author">by {card.author}</p>

                                            <div className="pill-listeners">
                                                <span>👥 {card.listeners}</span>
                                            </div>
                                        </div>

                                        <div className="card-bottom">
                                            <div className="card-avatars">
                                                {card.avatars.map((av, i) => (
                                                    <img key={i} src={av} alt="user" className="avatar-stack" />
                                                ))}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="carousel-controls">
                    <button onClick={scrollLeft} className="nav-btn">←</button>
                    <button onClick={scrollRight} className="nav-btn">→</button>
                </div>
            </div>
        </section>
    );
};

export default ServicesAppPromo;
