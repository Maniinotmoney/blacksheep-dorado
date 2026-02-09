import React from 'react';
import '../css/index.css';
import '../css/Hero.css'; // Import the new CSS file
import heroVetCat from '../assets/hero_vet_cat.jpg';
import heroDentalDog from '../assets/hero_dental_dog.jpg';
import heroSurgeryDark from '../assets/hero_surgery_dark.jpg';
import heroXrayRoom from '../assets/hero_xray_room.jpg';
import heroSurgeryLight from '../assets/hero_surgery_light.jpg';

const Hero = () => {
    const scrollContainerRef = React.useRef(null);

    const lastScrollRef = React.useRef(0);
    const velocityRef = React.useRef(0);
    const rafIdRef = React.useRef(null);

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        // Auto-scroll logic
        const scrollInterval = setInterval(() => {
            if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
                const cardWidth = scrollContainer.children[0].offsetWidth;
                const gap = 24;
                const scrollAmount = cardWidth + gap;
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

                if (scrollContainer.scrollLeft >= maxScroll - 10) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000);

        // Kinetic Skew Logic
        const updateSkew = () => {
            if (!scrollContainer) return;

            const currentScroll = scrollContainer.scrollLeft;
            const delta = currentScroll - lastScrollRef.current;

            // Calculate velocity Tracking
            velocityRef.current = delta;

            // Apply skew: limit max skew to avoid breaking layout
            const skewStrength = 0.2;
            const maxSkew = 15;

            let skew = velocityRef.current * skewStrength;

            if (skew > maxSkew) skew = maxSkew;
            if (skew < -maxSkew) skew = -maxSkew;

            // Apply to children
            Array.from(scrollContainer.children).forEach(item => {
                // Using transform directly for smoothness
                item.style.transform = `skewX(${-skew}deg)`;
            });

            lastScrollRef.current = currentScroll;
            rafIdRef.current = requestAnimationFrame(updateSkew);
        };

        rafIdRef.current = requestAnimationFrame(updateSkew);

        return () => {
            clearInterval(scrollInterval);
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        };
    }, []);

    return (
        <section className="hero" id="home">
            {/* Scattered Grid */}
            <div className="grid-container" ref={scrollContainerRef}>

                {/* Item 01 - Large Left */}
                <div className="grid-item item-1">
                    <img src={heroVetCat} alt="Expert Vet Care" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">01</span>
                        <span className="hero-label">EXPERT CARE</span>
                    </div>
                </div>

                {/* Item 02 - Small Top Mid */}
                <div className="grid-item item-2">
                    <img src={heroDentalDog} alt="Dental Care" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">02</span>
                        <span className="hero-label">ADVANCED DENTISTRY</span>
                    </div>
                </div>

                {/* Item 03 - Vertical Mid */}
                <div className="grid-item item-3">
                    <img src={heroSurgeryDark} alt="Surgery" className="hero-image grayscale-image" />
                    <div className="hero-caption">
                        <span className="hero-number">03</span>
                        <span className="hero-label">CERTIFIED SURGEONS</span>
                    </div>
                </div>

                {/* Item 04 - Featured Color Box Center-Right */}
                <div className="grid-item item-4">
                    <div className="color-box-content">
                        <img src={heroXrayRoom} alt="X-Ray Room" className="blend-image" />
                    </div>
                    <div className="hero-caption text-black">
                        <span className="hero-number">04</span>
                        <span className="hero-label">MODERN DIAGNOSTICS</span>
                    </div>
                </div>

                {/* Item 05 - Small Right */}
                <div className="grid-item item-5">
                    <img src={heroSurgeryLight} alt="Surgery Detail" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">05</span>
                        <span className="hero-label">PRECISION</span>
                    </div>
                </div>
            </div>

            {/* Big Typography Bottom */}
            <div className="big-text-container">
                <h1 className="big-text">
                    {/* Split text for alphabetical animation */}
                    {"DORADO".split("").map((char, index) => (
                        <span
                            key={`d-${index}`}
                            className="letter-span"
                            style={{ animationDelay: `${0.8 + (index * 0.05)}s` }}
                        >
                            {char}
                        </span>
                    ))}
                    <br />
                    {"PETS".split("").map((char, index) => (
                        <span
                            key={`p-${index}`}
                            className="letter-span"
                            style={{ animationDelay: `${1.1 + (index * 0.05)}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </h1>
            </div>

        </section>
    );
};

export default Hero;
