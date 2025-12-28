import React from 'react';
import { motion } from 'framer-motion';

const SportTimeline = ({ config }) => {
    const { timeline, accentColor } = config;

    if (!timeline || timeline.length === 0) return null;

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey</h2>
                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-white/10" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.id || index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-start gap-8"
                        >
                            <div className={`w-16 pt-2 font-mono text-${accentColor} text-right text-sm font-bold flex-shrink-0 z-10 bg-background`}>
                                {item.yearOrDate}
                            </div>
                            <div className={`w-4 h-4 rounded-full bg-${accentColor} mt-3 border-4 border-background z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
                            <div className="flex-1 pb-8 border-b border-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportTimeline;
