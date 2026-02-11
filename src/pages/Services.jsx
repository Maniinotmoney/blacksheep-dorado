import React from 'react';
import ServicesComponent from '../components/Services';

const Services = () => {
    return (
        <div className="services-page services-page-wrapper">
            <div className="container">
                <h1 className="page-title text-center" style={{ textAlign: 'center' }}>Our Services</h1>
                <p className="page-subtitle text-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    Comprehensive care for every stage of your pet's life.
                </p>
            </div>
            <ServicesComponent />
        </div>
    );
};

export default Services;
