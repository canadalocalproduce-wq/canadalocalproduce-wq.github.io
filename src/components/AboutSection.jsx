import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="about-container">
            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">From the <span className="highlight-green">Ground Up</span></h2>
                    <p>
                        Just like the best produce comes from local farms, the best technology comes from local talent.
                        At <strong>CanadaLocalProduce</strong>, we believe in the power of homegrown innovation.
                    </p>
                    <p>
                        We don't outsource your vision. We cultivate it right here in Canada, ensuring that every line of code
                        is written with the same care and quality you expect from your local community.
                    </p>
                    <div className="stats-grid">
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Canadian</span>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="stat-number">Top</span>
                            <span className="stat-label">Quality</span>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-visual"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <div className="visual-card-glass">
                        <div className="code-leaf-glow"></div>
                        <div className="card-content">
                            <h3>Local Roots</h3>
                            <p>Global Reach</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
