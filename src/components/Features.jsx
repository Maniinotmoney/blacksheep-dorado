import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Features.css';

// Import local assets
import expertVetsImg from '../assets/Expert_vets.avif';
import clinicImg from '../assets/infra_reception.jpg';
import groomingImg from '../assets/feature_grooming.png';
import emergencyImg from '../assets/feature_emergency.png';

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        // Dynamic 3D Stack Logic for Mobile
        const handleScroll = () => {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) return;

            const cards = document.querySelectorAll('.feature-card');
            const totalCards = cards.length;
            const windowHeight = window.innerHeight;

            cards.forEach((card, index) => {
                // Skip the last card as it doesn't need to scale down for a next card
                if (index === totalCards - 1) return;

                const nextCard = cards[index + 1];
                const nextCardTop = nextCard.getBoundingClientRect().top;

                // Approximate stuck position based on CSS (15vh + 3vh increments)
                // We can also just read the current top, but simpler to use a logic relative to viewport
                // Logic: As next card rises from bottom of screen to its stick position,
                // current card scales down from 1 to 0.9.

                // Calculate progress: 0 when next card is at bottom, 1 when next card overlaps
                // Actually, let's map: 
                // When nextCardTop is at windowHeight -> Scale 1
                // When nextCardTop is at "stuck overlap" (approx 150px or 20vh) -> Scale 0.95

                const startScaleAt = windowHeight;
                const endScaleAt = 100; // approx top of stack

                let progress = (nextCardTop - endScaleAt) / (startScaleAt - endScaleAt);

                // Clamp progress between 0 and 1
                progress = Math.min(Math.max(progress, 0), 1);

                // Calculate target scale based on index for depth effect
                // Card 0: min 0.94, Card 1: min 0.96, Card 2: min 0.98
                const minScale = 0.91 + (0.02 * index);
                const scaleRange = 1 - minScale;
                const targetScale = minScale + (scaleRange * progress);

                // Calculate brightness: 1 -> 0.9
                // Stagger brightness too?
                const minBrightness = 0.8 + (0.02 * index); // 0.9, 0.92, 0.94
                const brightnessRange = 1 - minBrightness;
                const targetBrightness = minBrightness + (brightnessRange * progress);

                card.style.transform = `scale(${targetScale})`;
                card.style.filter = `brightness(${targetBrightness})`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Reset styles on cleanup to avoid artifacts if resized
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach(card => {
                card.style.transform = '';
                card.style.filter = '';
            });
        };
    }, []);

    return (
        <section className="features-section" id="about">
            <div className="container">
                <div className="features-header" data-aos="fade-up">
                    <h2 className="features-title">WHY PETS & PARENTS<br />LOVE DORADO</h2>
                    <p className="features-desc">We combine human-grade healthcare with premium lifestyle services. Experience the new standard in veterinary excellence.</p>
                </div>

                <div className="features-grid">

                    {/* 1. Large Card - Expert Vets (Spans 2 cols) */}
                    <div className="feature-card card-large" data-aos="fade-up" data-aos-delay="0">
                        <span className="feature-number">01</span>
                        <div className="feature-tag">SPECIALISTS</div>
                        <div className="feature-image-wrapper">
                            <img src={expertVetsImg} alt="Expert Vets" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Expert Vets</h3>
                            <p className="feature-description">Multispeciality veterinarians who treat your pets like their own family.</p>
                        </div>
                    </div>

                    {/* 2. Tall Card - Clinics (Spans 2 rows, Right side) */}
                    <div className="feature-card card-tall" data-aos="fade-up" data-aos-delay="200">
                        <span className="feature-number">02</span>
                        <div className="feature-tag">INFRASTRUCTURE</div>
                        <div className="feature-image-wrapper">
                            <img src={clinicImg} alt="State-of-the-Art Clinics" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Modern Clinics</h3>
                            <p className="feature-description">Spacious, hygienic, and equipped with the latest medical technology.</p>
                        </div>
                    </div>

                    {/* 3. Standard Card - Holistic Care */}
                    <div className="feature-card card-standard" data-aos="fade-up" data-aos-delay="100">
                        <span className="feature-number">03</span>
                        <div className="feature-tag">LIFESTYLE</div>
                        <div className="feature-image-wrapper">
                            <img src={groomingImg} alt="Holistic Care" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Holistic Care</h3>
                            <p className="feature-description">Grooming & Wellness.</p>
                        </div>
                    </div>

                    {/* 4. Standard Card - Emergency */}
                    <div className="feature-card card-standard" data-aos="fade-up" data-aos-delay="200">
                        <span className="feature-number">04</span>
                        <div className="feature-tag">24/7 SUPPORT</div>
                        <div className="feature-image-wrapper">
                            <img src={emergencyImg} alt="Emergency Care" className="feature-image" />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">Emergency</h3>
                            <p className="feature-description">Always here when you need us.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
