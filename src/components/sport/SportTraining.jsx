import React from 'react';
import { motion } from 'framer-motion';

const SportTraining = ({ config }) => {
    const { training, accentColor } = config;

    if (!training || training.length === 0) return null;

    return (
        <section className="py-20 bg-black/20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Training Regimen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {training.map((day, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-white">{day.day}</h3>
                                <div className="flex gap-2">
                                    {day.focusAreas.map(area => (
                                        <span key={area} className={`text-[10px] px-2 py-1 rounded bg-${accentColor}/20 text-${accentColor} uppercase`}>
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                {day.sessions.map((session, sIndex) => (
                                    <div key={sIndex} className="bg-black/20 p-3 rounded-lg">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="text-white font-medium text-sm">{session.title}</span>
                                            <span className={`text-xs ${session.intensity === 'High' ? 'text-red-400' :
                                                    session.intensity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                                                }`}>{session.intensity}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">{session.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportTraining;
