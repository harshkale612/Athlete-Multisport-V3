import React from 'react';
import { motion } from 'framer-motion';
import { athleteProfile } from '../../data/athleteProfile';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { sportsData } from '../../data/sportsData';
import { getThemeBySport } from '../../hooks/useThemeBySport';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const scrollTo = useScrollToSection();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* 1. Cinematic Background layers */}

            {/* Deep gradient overlay */}
            <div className="absolute inset-0 bg-hero-gradient z-0" />

            {/* Animated Glow Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, active: "anticipate" }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"
            />

            {/* Subtle Grid Texture (Optional high-tech feel) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" />

            {/* 2. Main Content */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Floating Sport Chips - Top decor */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    {sportsData.map((sport, i) => {
                        // Apply specific animations or colors per sport if needed
                        const theme = getThemeBySport(sport.accentKey);
                        return (
                            <motion.div
                                key={sport.id}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`
                                    px-4 py-1.5 rounded-full 
                                    bg-white/5 backdrop-blur-md border border-white/10 
                                    text-xs md:text-sm uppercase tracking-wider font-bold
                                    shadow-lg hover:shadow-${sport.accentKey}-500/20
                                    transition-all duration-300
                                    ${theme.tailwindText}
                                `}
                            >
                                {sport.name}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Name & Title */}
                <motion.div variants={itemVariants} className="mb-6 relative">
                    <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase drop-shadow-2xl">
                        {athleteProfile.name}
                    </h1>
                    {/* Optional Glow behind text */}
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-40"></div>
                </motion.div>

                {/* Tagline / Stats Summary */}
                <motion.p
                    className="text-xl md:text-3xl text-gray-300 mb-10 font-light max-w-3xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    <span className="text-white font-normal">Pushing limits</span> across {sportsData.map(s => s.name).join(' • ')}
                    <br />
                    <span className="text-base md:text-lg text-gray-400 mt-2 block">{athleteProfile.tagline}</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-5 w-full max-w-md mx-auto"
                    variants={itemVariants}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollTo('timeline')}
                        className="flex-1 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-glow flex items-center justify-center gap-2 group"
                    >
                        View Journey
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollTo('media')}
                        className="flex-1 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-bold text-lg hover:border-white/30 transition-all"
                    >
                        Highlights
                    </motion.button>
                </motion.div>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 mix-blend-screen cursor-pointer hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                onClick={() => scrollTo('about')}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                    <ChevronDown size={24} />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
