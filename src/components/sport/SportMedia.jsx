import React from 'react';
import { motion } from 'framer-motion';

const SportMedia = ({ config }) => {
    const { media } = config;

    if (!media || media.length === 0) return null;

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <center><h2 className="text-3xl font-bold text-white mb-12">Action Shots</h2></center>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {media.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-xl aspect-video"
                        >
                            <img
                                src={item.src}
                                alt={item.alt || 'Sport Media'}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium border border-white px-4 py-2 rounded uppercase tracking-wider">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportMedia;
