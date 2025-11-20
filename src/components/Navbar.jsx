import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home');

    const navLinks = [
        { id: '#home', label: 'Home' },
        { id: '#about', label: 'About' },
        { id: '#services', label: 'Services' },
        { id: '#contact', label: 'Contact' }
    ];

    return (
        <motion.nav
            className="liquid-navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="nav-content">
                <div className="nav-logo-container">
                    <img src={logo} alt="CanadaLocalProduce" className="nav-logo" />
                </div>

                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id} className="nav-item">
                            <a
                                href={link.id}
                                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                                onClick={() => setActiveLink(link.id)}
                            >
                                {link.label}
                                {activeLink === link.id && (
                                    <motion.div
                                        className="active-blob"
                                        layoutId="activeBlob"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
