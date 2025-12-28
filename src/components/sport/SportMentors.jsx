import React from 'react';
import { motion } from 'framer-motion';
import { coachesData } from '../../data/coachesData';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportMentors = ({ config }) => {
    const { sportKey } = config;
    const theme = getThemeBySport(sportKey);
    
    // Filter coaches/mentors for this sport
    const sportMentors = coachesData.filter(
        coach => coach.sportKey === sportKey
    );

    // If no mentors, show placeholder
    if (sportMentors.length === 0) {
        return null;
    }

    return (
        <section id="mentors" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: theme.accentColor }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
                >
                    <span 
                        className="text-xs font-bold uppercase tracking-widest mb-4 block"
                        style={{ color: theme.accentColor }}
                    >
                        Mentors & Coaches
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
                        Guided by{' '}
                        <span style={{ color: theme.accentColor }}>Excellence</span>
                    </h2>
                </motion.div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {sportMentors.map((mentor, index) => (
                        <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group glass-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                        >
                            {/* Mentor Image & Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <img
                                        src={mentor.imageUrl}
                                        alt={mentor.name}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border group-hover:border-primary/50 transition-colors duration-300"
                                    />
                                    <div 
                                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-background"
                                        style={{ backgroundColor: theme.accentColor }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-display font-bold text-text mb-1">
                                        {mentor.name}
                                    </h3>
                                    <span 
                                        className="text-xs font-bold uppercase tracking-widest"
                                        style={{ color: theme.accentColor }}
                                    >
                                        {mentor.role}
                                    </span>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="relative mb-6">
                                <span 
                                    className="text-5xl absolute -top-2 -left-2 font-serif opacity-20"
                                    style={{ color: theme.accentColor }}
                                >
                                    "
                                </span>
                                <p className="text-base md:text-lg text-text-muted leading-relaxed italic relative z-10 pl-4">
                                    {mentor.quote}
                                </p>
                            </blockquote>

                            {/* Experience */}
                            <div className="pt-4 border-t border-border flex items-center justify-between">
                                <span className="text-xs text-text-muted uppercase tracking-widest font-medium">
                                    {mentor.experience}
                                </span>
                                <span 
                                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                                    style={{ 
                                        backgroundColor: theme.accentColor + '20',
                                        color: theme.accentColor
                                    }}
                                >
                                    {mentor.sportKey}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportMentors;

