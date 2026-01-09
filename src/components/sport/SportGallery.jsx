import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportGallery = ({ config }) => {
    const { sportKey, media = [] } = config;
    const theme = getThemeBySport(sportKey);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Default images if none provided
    const galleryImages = media.length > 0 
        ? media.filter(item => item.type === 'image')
        : [
            { src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000', alt: 'Sport action' },
            { src: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1000', alt: 'Sport training' },
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000', alt: 'Sport competition' },
        ];

    const openImage = (index) => {
        setCurrentImageIndex(index);
        setSelectedImage(galleryImages[index]);
        setZoomLevel(1);
    };

    const navigateImage = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentImageIndex + 1) % galleryImages.length;
        } else {
            newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        }
        setCurrentImageIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
        setZoomLevel(1);
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
    };

    const resetZoom = () => {
        setZoomLevel(1);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            switch (e.key) {
                case 'ArrowLeft':
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    navigateImage('next');
                    break;
                case 'Escape':
                    setSelectedImage(null);
                    break;
                case '+':
                case '=':
                    handleZoomIn();
                    break;
                case '-':
                case '_':
                    handleZoomOut();
                    break;
                case '0':
                    resetZoom();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentImageIndex, zoomLevel, galleryImages.length]);

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
                            onClick={() => openImage(index)}
                        >
                            <img
                                src={item.src || item.url}
                                alt={item.alt || `Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000';
                                }}
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
                        {/* Navigation Controls */}
                        {galleryImages.length > 1 && (
                            <>
                                {/* Previous Button */}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('prev');
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-surface/50 transition-all duration-300 group"
                                >
                                    <ChevronLeft size={24} className="text-text group-hover:scale-110 transition-transform" />
                                </motion.button>

                                {/* Next Button */}
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('next');
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-surface/50 transition-all duration-300 group"
                                >
                                    <ChevronRight size={24} className="text-text group-hover:scale-110 transition-transform" />
                                </motion.button>
                            </>
                        )}

                        {/* Image Counter */}
                        {galleryImages.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass text-sm font-mono text-text"
                            >
                                {currentImageIndex + 1} / {galleryImages.length}
                            </motion.div>
                        )}

                        {/* Zoom Controls */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full glass"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomOut();
                                }}
                                className="p-2 rounded-full hover:bg-surface/50 transition-colors"
                                disabled={zoomLevel <= 0.5}
                            >
                                <ZoomOut size={18} className="text-text" />
                            </motion.button>
                            
                            <span className="px-3 py-1 text-xs font-mono text-text">
                                {Math.round(zoomLevel * 100)}%
                            </span>
                            
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleZoomIn();
                                }}
                                className="p-2 rounded-full hover:bg-surface/50 transition-colors"
                                disabled={zoomLevel >= 3}
                            >
                                <ZoomIn size={18} className="text-text" />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    resetZoom();
                                }}
                                className="p-2 rounded-full hover:bg-surface/50 transition-colors"
                            >
                                <RotateCcw size={18} className="text-text" />
                            </motion.button>
                        </motion.div>

                        {/* Main Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div 
                                className="relative w-full h-full flex items-center justify-center"
                                style={{ 
                                    transform: `scale(${zoomLevel})`,
                                    transition: 'transform 0.3s ease-out',
                                    cursor: zoomLevel > 1 ? 'move' : 'default'
                                }}
                            >
                                <img
                                    src={selectedImage.src || selectedImage.url}
                                    alt={selectedImage.alt || 'Gallery image'}
                                    className="max-w-full max-h-[80vh] object-contain rounded-xl"
                                    draggable={false}
                                />
                            </div>
                            
                            {/* Close Button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-surface/50 transition-all duration-300 group"
                            >
                                <X size={24} className="text-text group-hover:rotate-90 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>

                        {/* Keyboard Navigation Hint */}
                        {galleryImages.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-4 right-4 text-xs text-text-subtle font-mono"
                            >
                                Use ← → arrows to navigate
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SportGallery;

