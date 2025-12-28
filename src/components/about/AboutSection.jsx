import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { athleteProfile } from '../../data/athleteProfile';
import { Brain, Trophy, Activity } from 'lucide-react';

const AboutSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const cards = [
        {
            title: "Experience",
            icon: Trophy,
            content: athleteProfile.profileHighlights.slice(0, 2),
            description: "Proven leadership and championship pedigree across multiple competitive arenas."
        },
        {
            title: "Mindset",
            icon: Brain,
            content: ["Strategic Thinking", "Resilience"],
            description: " approaching every challenge with a grandmaster's analytical depth and focus."
        },
        {
            title: "Discipline",
            icon: Activity,
            content: ["Multi-Sport Training", "Physical Conditioning"],
            description: "Rigorous daily regimen balancing strength, stamina, and technical skill refinement."
        }
    ];

    return (
        <section
            ref={containerRef}
            id="about"
            className="section-padding relative overflow-hidden"
        >
            {/* Background Narrative Texture */}
            <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <h1 className="text-[20vw] font-display font-black leading-none whitespace-nowrap text-text">
                    ATHLETE
                </h1>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Title & Bio */}
                    <div className="lg:col-span-12 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                            <motion.div
                                style={{ y }}
                                className="space-y-6"
                            >
                                <span className="text-xs font-bold text-primary uppercase tracking-widest block pl-1 border-l-2 border-primary">
                                    About the Athlete
                                </span>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
                                    Forged in <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                                        Competition
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-lg sm:text-xl text-text-muted font-light leading-relaxed">
                                    {athleteProfile.shortBio}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Full Width Cards Grid */}
                    <div className="lg:col-span-12 w-full pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cards.map((card, idx) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative p-8 rounded-2xl bg-surface/30 border border-white/5 hover:border-primary/30 hover:bg-surface/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        <card.icon size={64} className="text-primary" />
                                    </div>

                                    <div className="relative z-10 space-y-4">
                                        <h3 className="text-2xl font-display font-bold text-text group-hover:text-primary transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            {card.description}
                                        </p>
                                        <ul className="space-y-2 pt-2">
                                            {card.content.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-subtle">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
