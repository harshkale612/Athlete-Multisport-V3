import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportGallery = ({ config }) => {
    const { sportKey, media = [] } = config;
    const theme = getThemeBySport(sportKey);
    const [selectedImage, setSelectedImage] = useState(null);

    // Default images if none provided
    const galleryImages = media.length > 0 
        ? media.filter(item => item.type === 'image')
        : [
            { src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000', alt: 'Sport action' },
            { src: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1000', alt: 'Sport training' },
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000', alt: 'Sport competition' },
        ];

    return (
        <section id="gallery" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-20">
                <div 
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
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
                        Gallery
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
                        Visual{' '}
                        <span style={{ color: theme.accentColor }}>Story</span>
                    </h2>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.src || item.url}
                                alt={item.alt || `Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                style={{ backgroundColor: theme.accentColor }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src || selectedImage.url}
                                alt={selectedImage.alt || 'Gallery image'}
                                className="w-full h-full object-contain rounded-xl"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-surface/50 transition-colors"
                            >
                                <X size={24} className="text-text" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SportGallery;

