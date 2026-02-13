import React from 'react';
import '../css/index.css';
import '../css/Hero.css'; 
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

        
        const updateSkew = () => {
            if (!scrollContainer) return;

            const currentScroll = scrollContainer.scrollLeft;
            const delta = currentScroll - lastScrollRef.current;

            
            velocityRef.current = delta;

            
            const skewStrength = 0.2;
            const maxSkew = 15;

            let skew = velocityRef.current * skewStrength;

            if (skew > maxSkew) skew = maxSkew;
            if (skew < -maxSkew) skew = -maxSkew;

            
            Array.from(scrollContainer.children).forEach(item => {
                
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
            
            <div className="grid-container" ref={scrollContainerRef}>

                
                <div className="grid-item item-1">
                    <img src={heroVetCat} alt="Expert Vet Care" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">01</span>
                        <span className="hero-label">EXPERT CARE</span>
                    </div>
                </div>

                
                <div className="grid-item item-2">
                    <img src={heroDentalDog} alt="Dental Care" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">02</span>
                        <span className="hero-label">ADVANCED DENTISTRY</span>
                    </div>
                </div>

                
                <div className="grid-item item-3">
                    <img src={heroSurgeryDark} alt="Surgery" className="hero-image grayscale-image" />
                    <div className="hero-caption">
                        <span className="hero-number">03</span>
                        <span className="hero-label">CERTIFIED SURGEONS</span>
                    </div>
                </div>

                
                <div className="grid-item item-4">
                    <div className="color-box-content">
                        <img src={heroXrayRoom} alt="X-Ray Room" className="blend-image" />
                    </div>
                    <div className="hero-caption text-black">
                        <span className="hero-number">04</span>
                        <span className="hero-label">MODERN DIAGNOSTICS</span>
                    </div>
                </div>

                
                <div className="grid-item item-5">
                    <img src={heroSurgeryLight} alt="Surgery Detail" className="hero-image" />
                    <div className="hero-caption">
                        <span className="hero-number">05</span>
                        <span className="hero-label">PRECISION</span>
                    </div>
                </div>
            </div>

            
            

        </section>
    );
};

export default Hero;
