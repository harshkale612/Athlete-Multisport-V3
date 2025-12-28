import React from 'react';
import { athleteProfile } from '../../data/athleteProfile';
import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Mail, href: athleteProfile.socialLinks.email, label: 'Email' },
        { icon: Linkedin, href: athleteProfile.socialLinks.linkedin, label: 'LinkedIn', external: true },
        { icon: Instagram, href: athleteProfile.socialLinks.instagram, label: 'Instagram', external: true },
        { icon: Youtube, href: athleteProfile.socialLinks.youtube, label: 'YouTube', external: true },
    ];

    return (
        <footer className="border-t border-border/50 bg-surface/30 backdrop-blur-sm">
            <div className="container-custom py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-display font-extrabold text-text mb-2">
                            {athleteProfile.name}
                        </h2>
                        <p className="text-sm text-text-muted">
                            &copy; {currentYear} All Rights Reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon;
                            const linkProps = social.external
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {};
                            
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    {...linkProps}
                                    className="p-2.5 rounded-full glass hover:bg-surface/50 text-text-muted hover:text-primary transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
