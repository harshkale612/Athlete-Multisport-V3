import React, { useState } from 'react';
import { mediaData } from '../../data/mediaData';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';

const MediaGallery = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredMedia = mediaData.filter(item =>
        filter === 'all' ? true : item.sportKey === filter
    );

    return (
        <section id="media" className="py-32 bg-background relative border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
                        Visual <br />
                        <span className="text-white/20">Chronicles</span>
                    </h2>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        {['all', 'chess', 'football', 'cricket'].map(key => (
                            <button
                                key={key}
                                onClick={() => setFilter(key)}
                                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${filter === key ? 'bg-white text-black border-white' : 'text-text-muted border-white/10 hover:border-white/30'}`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    <AnimatePresence mode="popLayout">
                        {filteredMedia.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setSelectedMedia(item)}
                                className="group relative aspect-[4/3] bg-surface overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={item.placeholderUrl}
                                    alt={item.thumbnailAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex justify-end">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                            <ArrowUpRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{item.sportKey}</span>
                                        <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                                    </div>
                                </div>

                                {/* Center Play Button for Video */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Play className="text-white fill-current ml-1" size={24} />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-full max-w-6xl max-h-full flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src={selectedMedia.placeholderUrl}
                                    alt={selectedMedia.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="mt-8 text-center max-w-2xl">
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedMedia.title}</h3>
                                <p className="text-gray-400">{selectedMedia.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MediaGallery;
