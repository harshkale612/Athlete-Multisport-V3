import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sportsData } from '../../data/sportsData';
import { ArrowRight } from 'lucide-react';

const SportsOverview = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // Helper to get accent color variable based on sport key
    const getAccentColor = (key) => `var(--color-${key})`;

    return (
        <section
            ref={containerRef}
            id="sports"
            className="section-padding relative bg-background"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-elevated via-background to-background opacity-40 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    style={{ y: yTitle }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-24"
                >
                    <div className="space-y-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest pl-1 border-l-2 border-primary">
                            Multi-Active
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none uppercase">
                            Disci<span className="text-transparent text-edge-outline">plines</span>
                        </h2>
                    </div>
                    <p className="text-text-muted max-w-md text-sm md:text-base leading-relaxed">
                        Mastery requires range. Explore the unique challenges and triumphs across the board, field, and court.
                    </p>
                </motion.div>

                {/* Sports Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {sportsData.map((sport, index) => {
                        const accentColor = getAccentColor(sport.key);

                        return (
                            <motion.div
                                key={sport.key}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    to={sport.route}
                                    className="group relative flex flex-col justify-between h-[500px] p-8 rounded-[2rem] bg-surface border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                                    style={{
                                        '--sport-accent': accentColor
                                    }}
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={sport.image}
                                            alt={sport.imageAlt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                        />
                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-transparent" />

                                        {/* Accent Color Overlay on Hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                                            style={{ backgroundColor: accentColor }}
                                        />
                                    </div>

                                    {/* Top Content */}
                                    <div className="relative z-10 w-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <span className="font-mono text-xs font-bold text-white/70 group-hover:text-[var(--sport-accent)] transition-colors backdrop-blur-sm px-2 py-1 rounded-md bg-black/20">
                                                0{index + 1} / 0{sportsData.length}
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-[var(--sport-accent)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                                <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-display font-bold uppercase leading-none mb-2 text-white drop-shadow-lg">
                                            {sport.name}
                                        </h3>
                                        <div className="h-1 w-12 bg-[var(--sport-accent)] rounded-full group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_var(--sport-accent)]" />
                                    </div>

                                    {/* Middle Placeholder (Empty to show image) */}
                                    <div className="flex-1 relative" />

                                    {/* Bottom Content: Stats */}
                                    <div className="relative z-10 pt-6 border-t border-white/10 group-hover:border-[var(--sport-accent)]/30 transition-colors duration-500">
                                        <p className="text-sm text-gray-200 mb-4 line-clamp-2 font-light drop-shadow-md">
                                            {sport.shortTagline}
                                        </p>
                                        <div className="flex items-center gap-6">
                                            {sport.keyStats.slice(0, 2).map((stat, i) => (
                                                <div key={i} className="backdrop-blur-sm px-3 py-1.5 rounded-lg bg-black/20 border border-white/5">
                                                    <span className="block text-lg font-bold text-[var(--sport-accent)] drop-shadow-sm">
                                                        {stat.value}
                                                    </span>
                                                    <span className="text-[10px] uppercase tracking-wider text-gray-300">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SportsOverview;
