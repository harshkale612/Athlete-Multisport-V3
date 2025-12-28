import React from 'react';
import { trainingData } from '../../data/trainingData';
import { motion } from 'framer-motion';

const TrainingSection = () => {
    return (
        <section id="training" className="py-32 bg-background border-t border-white/5 relative">
            <div className="container-custom">
                <div className="mb-24">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-none">
                        Unseen <br />
                        <span className="text-white/20">Work.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainingData.map((day, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-500 rounded-none relative"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                                {day.day}
                            </span>

                            <div className="space-y-6 mt-8">
                                {day.sessions.map((session, j) => (
                                    <div key={j} className="relative pl-4 border-l border-white/10 group-hover:border-white/30 transition-colors">
                                        <h4 className="text-white font-bold">{session.title}</h4>
                                        <p className="text-text-muted text-sm mt-1">{session.description}</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className={`h-1.5 w-1.5 rounded-full ${session.intensity === 'High' ? 'bg-red-500' : session.intensity === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                            <span className="text-[10px] uppercase font-bold text-white/40">{session.intensity} Intensity</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_currentColor]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
