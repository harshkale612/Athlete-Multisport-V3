import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/timelineData';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportJourney = ({ config }) => {
    const { sportKey } = config;
    const theme = getThemeBySport(sportKey);
    
    // Filter timeline for this sport
    const sportTimeline = timelineData.filter(
        item => item.sportKey === sportKey
    );

    // If no timeline items, show placeholder
    if (sportTimeline.length === 0) {
        return null;
    }

    return (
        <section id="journey" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl"
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
                        Journey
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
                        The Path to{' '}
                        <span style={{ color: theme.accentColor }}>Excellence</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div 
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 -translate-x-1/2 opacity-20"
                        style={{ backgroundColor: theme.accentColor }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-12 md:space-y-16">
                        {sportTimeline.map((item, index) => {
                            const isEven = index % 2 === 0;
                            
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-start gap-6 md:gap-8 ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div 
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-background flex items-center justify-center"
                                            style={{ backgroundColor: theme.accentColor }}
                                        >
                                            <div 
                                                className="w-2 h-2 md:w-4 md:h-4 rounded-full"
                                                style={{ backgroundColor: theme.accentColor }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 glass-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 ${
                                        item.isHighlight ? 'border-l-4' : ''
                                    }`}
                                    style={item.isHighlight ? { borderLeftColor: theme.accentColor } : {}}
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span 
                                                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                                style={{ 
                                                    backgroundColor: theme.accentColor + '20',
                                                    color: theme.accentColor
                                                }}
                                            >
                                                {item.yearOrDate}
                                            </span>
                                            {item.isHighlight && (
                                                <span 
                                                    className="text-xs font-bold uppercase tracking-widest"
                                                    style={{ color: theme.accentColor }}
                                                >
                                                    Highlight
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportJourney;

