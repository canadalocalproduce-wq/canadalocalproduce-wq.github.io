import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import bentoArchitecture from '../assets/bento_architecture.png';
import bentoScalability from '../assets/bento_scalability.png';
import bentoIntelligence from '../assets/bento_intelligence.png';

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const titleAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.05
        }
    }
};

const HeroSection = () => {
    const titleText = "Homegrown".split("");
    const subtitleText = "Tech Solutions".split("");

    return (
        <section id="home" className="hero-bento-container">
            {/* Main Content Cell */}
            <motion.div
                className="bento-cell main-cell"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="cell-content">
                    <motion.h1
                        className="hero-title"
                        variants={titleAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="highlight-red word-wrapper">
                            {titleText.map((char, index) => (
                                <motion.span key={index} variants={letterAnimation} className="kinetic-char">
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <br />
                        <span className="word-wrapper">
                            {subtitleText.map((char, index) => (
                                <motion.span key={index} variants={letterAnimation} className="kinetic-char">
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Cultivating digital growth with local expertise.
                    </motion.p>

                    <motion.button
                        className="liquid-button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Let's Grow Together</span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Visual Cell 1: Architecture */}
            <motion.div
                className="bento-cell visual-cell soil-cell"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <img src={bentoArchitecture} alt="Robust Architecture" className="bento-image" />
                <div className="cell-overlay">
                    <h3>Architecture</h3>
                </div>
            </motion.div>

            {/* Visual Cell 2: Scalability */}
            <motion.div
                className="bento-cell visual-cell growth-cell"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <img src={bentoScalability} alt="Scalable Systems" className="bento-image" />
                <div className="cell-overlay">
                    <h3>Scalability</h3>
                </div>
            </motion.div>

            {/* Visual Cell 3: Intelligence */}
            <motion.div
                className="bento-cell visual-cell harvest-cell"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <img src={bentoIntelligence} alt="Business Intelligence" className="bento-image" />
                <div className="cell-overlay">
                    <h3>Intelligence</h3>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
