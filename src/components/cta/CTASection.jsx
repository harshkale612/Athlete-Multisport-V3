import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sportsData } from '../../data/sportsData';
import { ArrowRight, Mail, Instagram, Linkedin, Youtube } from 'lucide-react';
import { athleteProfile } from '../../data/athleteProfile';

const CTASection = () => {
    return (
        <section id="cta" className="section-padding relative overflow-hidden bg-background border-t border-white/5">

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    {/* Main CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tight">
                            Start The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-white to-primary opacity-90 animate-pulse">
                                Journey
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                            Connect for collaborations, sponsorship, or to follow the path to championship.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href={`mailto:${athleteProfile.socialLinks.email}`}
                            className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:bg-primary-hover transition-all shadow-glow"
                        >
                            Contact Now
                        </a>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: Instagram, href: athleteProfile.socialLinks.instagram },
                                { Icon: Linkedin, href: athleteProfile.socialLinks.linkedin },
                                { Icon: Youtube, href: athleteProfile.socialLinks.youtube }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary hover:bg-surface/50 transition-all hover:scale-110"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Nav */}
                    <div className="pt-20 border-t border-white/5 mt-20">
                        <div className="flex flex-wrap justify-between items-center gap-6">
                            <span className="font-display font-bold text-lg tracking-tight">
                                {athleteProfile.name}
                            </span>
                            <div className="flex gap-6 text-sm text-text-muted uppercase tracking-wider">
                                {sportsData.map(sport => (
                                    <Link key={sport.key} to={sport.route} className="hover:text-primary transition-colors">
                                        {sport.name}
                                    </Link>
                                ))}
                            </div>
                            <span className="text-xs text-text-subtle">
                                © 2024 All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
