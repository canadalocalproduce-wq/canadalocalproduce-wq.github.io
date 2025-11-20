import React from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';
import serviceWeb from '../assets/service_web.png';
import serviceMobile from '../assets/service_mobile.png';
import serviceAI from '../assets/service_ai.png';

const services = [
    {
        id: 1,
        title: 'Web Apps',
        description: 'Building strong foundations with modern frameworks. Fast, SEO-optimized, and responsive websites.',
        image: serviceWeb
    },
    {
        id: 2,
        title: 'Mobile Apps',
        description: 'Expanding your reach to every pocket. Native and cross-platform apps designed for engagement.',
        image: serviceMobile
    },
    {
        id: 3,
        title: 'AI Solutions',
        description: 'Reaping insights from your data. Smart algorithms and automation to optimize your operations.',
        image: serviceAI
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="services-simple-container">
            <div className="services-simple-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Expertise
                </motion.h2>
            </div>

            <div className="services-simple-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="service-simple-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                        <div className="service-image-wrapper">
                            <img src={service.image} alt={service.title} className="service-image" />
                        </div>
                        <div className="service-content">
                            <h3 className="simple-title">{service.title}</h3>
                            <p className="simple-description">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
