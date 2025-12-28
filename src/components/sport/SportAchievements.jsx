import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievementsData';
import { getThemeBySport } from '../../hooks/useThemeBySport';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const iconMap = {
    Trophy: Trophy,
    Medal: Medal,
    Award: Award,
    Star: Star
};

const SportAchievements = ({ config }) => {
    const { sportKey } = config;
    const theme = getThemeBySport(sportKey);
    
    // Filter achievements for this sport
    const sportAchievements = achievementsData.filter(
        achievement => achievement.sportKey === sportKey
    );

    // If no achievements, show placeholder
    if (sportAchievements.length === 0) {
        return null;
    }

    return (
        <section id="achievements" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
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
                        Achievements
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
                        Milestones &{' '}
                        <span style={{ color: theme.accentColor }}>Awards</span>
                    </h2>
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {sportAchievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon] || Trophy;
                        
                        return (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative glass-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                            >
                                {/* Accent Line */}
                                <div 
                                    className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ backgroundColor: theme.accentColor }}
                                />

                                {/* Icon */}
                                <div className="mb-4">
                                    <div 
                                        className="inline-flex p-3 rounded-xl mb-4"
                                        style={{ backgroundColor: theme.accentColor + '20' }}
                                    >
                                        <Icon 
                                            size={24} 
                                            style={{ color: theme.accentColor }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-text">
                                            {achievement.title}
                                        </h3>
                                        <span 
                                            className="text-sm font-bold px-3 py-1 rounded-full"
                                            style={{ 
                                                backgroundColor: theme.accentColor + '20',
                                                color: theme.accentColor
                                            }}
                                        >
                                            {achievement.year}
                                        </span>
                                    </div>
                                    <p className="text-base text-text-muted leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SportAchievements;

