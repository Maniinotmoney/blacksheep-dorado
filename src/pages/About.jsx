import React from 'react';
// Layouts
import AboutLayeredHero from '../components/AboutLayeredHero';
import AboutManifesto from '../components/AboutManifesto';

const About = () => {
    // keeping layoutMode state if we still want to toggle or switch back,
    // but for now forcing the "Layered" look as requested for the first section.

    return (
        <div className="about-page" style={{ paddingTop: 0 }}>
            {/* Removing page-container default padding because LayeredHero handles its own full-screen spacing and dark bg */}

            {/* New Layered Hero Section */}
            <AboutLayeredHero />

            {/* Typography Manifesto Section */}
            <AboutManifesto />

        </div>
    );
};

export default About;
