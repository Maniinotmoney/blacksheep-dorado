import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesAppPromo from '../components/ServicesAppPromo';
import ServicesModern from '../components/ServicesModern';
import KineticMarquee from '../components/KineticMarquee';
import FAQ from '../components/FAQ';


const Services = () => {
    return (
        <div className="services-page-wrapper" style={{ paddingTop: 0 }}>
            <ServicesHero />
            <KineticMarquee />
            <ServicesAppPromo />
            
            <ServicesModern />
            <FAQ />
        </div>
    );
};
export default Services;
