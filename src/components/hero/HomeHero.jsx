import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { athleteProfile } from '../../data/athleteProfile';
import { sportsData } from '../../data/sportsData';
import { Link } from 'react-router-dom';

const HomeHero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax Effects
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const yImage = useTransform(scrollY, [0, 500], [0, 50]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    // Split name
    const [firstName, lastName] = athleteProfile.name.split(' ');

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center overflow-hidden bg-background"
        >
            {/* ==============================================
                MOBILE BACKGROUND IMAGE (Visible only on small screens)
                ============================================== */}
            <div className="absolute inset-0 lg:hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                    alt="Athlete Portrait"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* ==============================================
                DESKTOP BACKGROUND ELEMENTS
                ============================================== */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_20%_50%,black,transparent)]" />

                {/* Glow Orb */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:justify-between pt-20 lg:pt-0">

                {/* ==============================================
                    LEFT CONTENT (Text & CTA)
                    ============================================== */}
                <motion.div
                    style={{ y: yText, opacity: opacityHero }}
                    className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 mt-12 lg:mt-0 lg:pr-12"
                >
                    {/* Identity Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono tracking-widest uppercase text-text-muted">
                            Multi-Disciplinary Athlete
                        </span>
                    </motion.div>

                    {/* Name Typography */}
                    <div className="relative">
                        <h1 className="flex flex-col font-display font-extrabold tracking-tighter leading-[0.9]">
                            {/* Outline/Stroke Effect for First Name */}
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-transparent text-edge-outline"
                            >
                                {firstName}
                            </motion.span>

                            {/* Filled Effect for Last Name */}
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-text"
                            >
                                {lastName}
                            </motion.span>
                        </h1>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-xl text-text-muted max-w-lg font-light leading-relaxed"
                    >
                        {athleteProfile.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <Link
                            to="/sport/football"
                            className="group relative px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Journey
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <button className="group flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-text hover:text-primary transition-colors">
                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                <Play size={14} className="fill-current" />
                            </span>
                            Watch Showreel
                        </button>
                    </motion.div>

                    {/* Sport Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex items-center gap-4 pt-8 lg:pt-12"
                    >
                        <span className="text-xs font-mono text-text-subtle uppercase">Domains</span>
                        <div className="h-px flex-1 bg-border/50 max-w-[100px]" />
                        <div className="flex gap-3">
                            {sportsData.slice(0, 4).map((sport) => (
                                <div
                                    key={sport.key}
                                    className="w-2 h-2 rounded-full bg-border hover:bg-primary transition-colors"
                                    title={sport.name}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* ==============================================
                    RIGHT CONTENT (Desktop Hero Image)
                    ============================================== */}
                <motion.div
                    style={{ y: yImage, opacity: opacityHero }}
                    className="hidden lg:block w-1/2 h-screen absolute right-0 top-0 bottom-0"
                >
                    {/* Image Container with Gradient Mask */}
                    <div className="h-full w-full relative">
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-transparent" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                            alt="Athlete Dynamic Pose"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HomeHero;
