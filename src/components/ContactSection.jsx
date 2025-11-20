import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Let's <span className="highlight-red">Grow</span> Together</h2>
                    <p>Ready to plant the seeds for your next big project? Get in touch.</p>
                    <p className="contact-email">
                        <a href="mailto:support@canadalocalproduce.ca">support@canadalocalproduce.ca</a>
                    </p>
                </motion.div>

                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell us about your project" className="form-textarea" rows="5"></textarea>
                    </div>
                    <button type="submit" className="liquid-button">
                        <span>Send Message</span>
                    </button>
                </motion.form>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} CanadaLocalProduce. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default ContactSection;
