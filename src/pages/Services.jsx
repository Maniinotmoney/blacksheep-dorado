import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesAppPromo from '../components/ServicesAppPromo';
import ServicesModern from '../components/ServicesModern';
import KineticMarquee from '../components/KineticMarquee';
import FAQ from '../components/FAQ';
// import ServicesComponent from '../components/Services'; // Keep for backup

const Services = () => {
    return (
        <div className="services-page-wrapper" style={{ paddingTop: 0 }}>
            <ServicesHero />
            <KineticMarquee />
            <ServicesAppPromo />
            {/* The new component handles its own layout/container mostly, 
                  but we can keep the wrapper if needed for global page styles */}
            <ServicesModern />
            <FAQ />
        </div>
    );
};
export default Services;
