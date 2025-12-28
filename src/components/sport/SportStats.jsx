import React from 'react';
import { motion } from 'framer-motion';

const SportStats = ({ config }) => {
    const { stats, accentColor } = config;

    // Convert stats object to array if it is an object
    const statsArray = Array.isArray(stats) ? stats : Object.entries(stats || {}).map(([key, value]) => ({ label: key.replace(/([A-Z])/g, ' $1').trim(), value }));

    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-2">Key Metrics</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {statsArray.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl bg-${accentColor}/5 border border-${accentColor}/10 hover:border-${accentColor}/30 transition-colors`}
                        >
                            <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                            <div className={`text-3xl font-bold text-${accentColor} font-mono`}>{stat.value}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportStats;
