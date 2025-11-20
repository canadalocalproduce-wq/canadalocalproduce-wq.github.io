import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import './index.css';

function App() {
    return (
        <div className="app-container">
            <div className="noise-overlay"></div>
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ContactSection />
            </main>
        </div>
    );
}

export default App;
