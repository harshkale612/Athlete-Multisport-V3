import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { getThemeBySport } from '../../hooks/useThemeBySport';
import { sportsData } from '../../data/sportsData';

const SportHero = ({ config }) => {
    const { sportName, tagline, description, accentColor, heroHighlights, sportKey } = config;
    const sportInfo = sportsData.find(s => s.key === sportKey);
    const theme = getThemeBySport(sportKey);
    const accentColorHex = theme.accentColor;

    // Parallax effects
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    const yImage = useTransform(scrollY, [0, 500], [0, 50]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Player image - prefer config-specific image, then sportsData image, then fallback
    const primaryMediaImage = config?.media?.find?.((item) => item.type === 'image')?.src;
    const PLAYER_IMAGE = primaryMediaImage
        || sportInfo?.image
        || "https://images.unsplash.com/photo-1618517048289-4646902edaf5?fm=jpg&q=60&w=2000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background with Sport Accent */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: accentColorHex }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

                {/* Animated gradient orb */}
                <motion.div
                    className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ backgroundColor: accentColorHex }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
                {/* Left: Text Content */}
                <motion.div
                    style={{ y: yText, opacity }}
                    className="relative z-20 space-y-6 md:space-y-8 text-center lg:text-left"
                >
                    {/* Sport Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center lg:justify-start gap-3"
                    >
                        <div
                            className="h-px w-12 md:w-20 rounded-full"
                            style={{ backgroundColor: accentColorHex }}
                        />
                        <span
                            className="text-xs md:text-sm font-bold uppercase tracking-widest"
                            style={{ color: accentColorHex }}
                        >
                            {sportName}
                        </span>
                        <div
                            className="h-px w-12 md:w-20 rounded-full"
                            style={{ backgroundColor: accentColorHex }}
                        />
                    </motion.div>

                    {/* Sport Name & Tagline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight"
                    >
                        {sportInfo?.name || sportName}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl lg:text-2xl text-text-muted font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                    >
                        {tagline}
                    </motion.p>

                    {/* Role/Position */}
                    {sportInfo?.role && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-sm md:text-base uppercase tracking-widest font-medium"
                            style={{ color: accentColorHex }}
                        >
                            {sportInfo.role}
                        </motion.p>
                    )}

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-6 md:gap-8 justify-center lg:justify-start pt-4"
                    >
                        {heroHighlights?.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center lg:items-start">
                                <span
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1"
                                    style={{ color: accentColorHex }}
                                >
                                    {stat.value}
                                </span>
                                <span className="text-xs md:text-sm text-text-muted uppercase tracking-widest font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Player Image */}
                <motion.div
                    style={{ y: yImage, opacity }}
                    className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-first lg:order-last"
                >
                    {/* Player Image - NOT boxed, full bleed */}
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        src={PLAYER_IMAGE}
                        alt={`${sportName} athlete`}
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 lg:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent opacity-0 lg:opacity-100" />

                    {/* Sport Accent Overlay */}
                    <div
                        className="absolute inset-0 mix-blend-overlay opacity-20"
                        style={{ backgroundColor: accentColorHex }}
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-[10px] uppercase tracking-widest text-text-muted animate-pulse">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="p-2 rounded-full border glass"
                    style={{ borderColor: accentColorHex + '40' }}
                >
                    <ArrowDown size={16} style={{ color: accentColorHex }} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SportHero;
