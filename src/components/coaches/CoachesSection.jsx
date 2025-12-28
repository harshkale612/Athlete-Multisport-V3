import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { coachesData } from '../../data/coachesData';

const CoachCard = ({ coach, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="relative group w-full md:w-[400px] flex-shrink-0 bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-colors duration-500"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-white/10 group-hover:ring-primary/50">
                <img src={coach.imageUrl} alt={coach.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-xl font-display font-bold text-white leading-none">{coach.name}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mt-1 block">{coach.role}</span>
            </div>
        </div>

        <blockquote className="relative">
            <span className="text-6xl text-white/5 absolute -top-4 -left-4 font-serif">"</span>
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed relative z-10 italic font-serif">
                {coach.quote}
            </p>
        </blockquote>

        <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-text-muted font-mono uppercase tracking-widest">
            <span>{coach.experience}</span>
            <span className="px-2 py-1 border border-white/10 rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">{coach.sportKey}</span>
        </div>
    </motion.div>
);

const CoachesSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]); // Horizontal scroll effect if we were doing pin-scroll, but sticking to standard horizontal for usability.

    return (
        <section id="coaches" ref={targetRef} className="py-32 bg-background border-t border-white/5 overflow-hidden">
            <div className="container-custom mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Wisdom</span>
                </h2>
                <div className="h-px w-full bg-white/10" />
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex overflow-x-auto pb-12 gap-px px-4 md:px-12 hide-scrollbar">
                {/* Simulated Grid via Flex Gap-px */}
                <div className="flex gap-8">
                    {coachesData.map((coach, index) => (
                        <CoachCard key={coach.id} coach={coach} index={index} />
                    ))}
                    {/* Placeholder space at right */}
                    <div className="w-12 flex-shrink-0" />
                </div>
            </div>
        </section>
    );
};

export default CoachesSection;
