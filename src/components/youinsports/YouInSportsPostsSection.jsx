import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, Heart, MessageCircle } from 'lucide-react';
import { youinsportsPosts, formatRelativeTime, getSportDisplayName } from '../../data/youinsportsPosts';
import YouInSportsPostCard from './YouInSportsPostCard';

const YouInSportsPostsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // State for modal
    const [selectedPostIndex, setSelectedPostIndex] = useState(null);

    // TODO: Replace with real authentication check
    // For now, assume user is NOT logged in
    const isLoggedIn = false;

    // Show 12 recent posts publicly
    const publicPosts = youinsportsPosts.slice(0, 12);
    const selectedPost = selectedPostIndex !== null ? publicPosts[selectedPostIndex] : null;

    // Navigation Handlers
    const handleClose = () => setSelectedPostIndex(null);
    const handleNext = (e) => {
        e?.stopPropagation();
        setSelectedPostIndex((prev) => (prev + 1) % publicPosts.length);
    };
    const handlePrev = (e) => {
        e?.stopPropagation();
        setSelectedPostIndex((prev) => (prev - 1 + publicPosts.length) % publicPosts.length);
    };
    const handlePostClick = (index) => {
        setSelectedPostIndex(index);
    };

    // Keyboard Support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedPostIndex === null) return;

            switch (e.key) {
                case 'Escape':
                    handleClose();
                    break;
                case 'ArrowRight':
                    handleNext();
                    break;
                case 'ArrowLeft':
                    handlePrev();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPostIndex]);

    // TODO: Replace with real YouInSports login URL if different path
    const youinsportsLoginUrl = 'https://www.uinsports.com/login';

    // TODO: Replace with real athlete profile URL when logged in
    const athleteProfileUrl = 'https://www.uinsports.com/athlete/profile';

    const handleCTAClick = () => {
        if (isLoggedIn) {
            // TODO: Redirect to athlete's YouInSports profile
            window.open(athleteProfileUrl, '_blank');
        } else {
            // Redirect to YouInSports login page
            window.open(youinsportsLoginUrl, '_blank');
        }
    };

    return (
        <section
            ref={containerRef}
            id="youinsports-posts"
            className="section-padding relative bg-background"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-surface-elevated via-background to-background opacity-40 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    style={{ y: yTitle }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20"
                >
                    <div className="space-y-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest pl-1 border-l-2 border-primary">
                            Social Updates
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none uppercase">
                            Latest from <span className="text-transparent text-edge-outline">YouInSports</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Instagram-style Puzzle Grid */}
                <div className="relative max-w-5xl mx-auto mb-16">
                    <div className="grid grid-cols-3 gap-0.5 md:gap-1 border-2 border-surface-elevated rounded-lg overflow-hidden shadow-2xl bg-surface-elevated">
                        {publicPosts.map((post, index) => (
                            <YouInSportsPostCard
                                key={post.id}
                                post={post}
                                index={index}
                                isPuzzleGrid={true}
                                onClick={() => handlePostClick(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={handleCTAClick}
                        className="group relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:bg-primary-hover transition-all shadow-glow"
                    >
                        <span>View more posts on YouInSports</span>
                        <ExternalLink
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </button>
                </motion.div>
            </div>

            {/* Full Screen Post Modal */}
            <AnimatePresence>
                {selectedPostIndex !== null && selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
                    >
                        {/* Navigation Controls (Outside Content for clearer click-off) */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 md:px-12 z-50">
                            <button
                                onClick={handlePrev}
                                className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 group"
                                aria-label="Previous Post"
                            >
                                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 group"
                                aria-label="Next Post"
                            >
                                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:rotate-90"
                            aria-label="Close Modal"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Content Card */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-auto max-h-[85vh] bg-surface-elevated rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 z-40"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-[60%] bg-black relative flex items-center justify-center overflow-hidden">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.caption}
                                    className="w-full h-full object-contain max-h-[50vh] md:max-h-full"
                                />
                                {selectedPost.sport && (
                                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                        {getSportDisplayName(selectedPost.sport)}
                                    </div>
                                )}
                            </div>

                            {/* Details Section */}
                            <div className="w-full md:w-[40%] flex flex-col bg-surface border-l border-white/5">
                                {/* Header */}
                                <div className="p-6 border-b border-white/5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg">
                                        <span className="font-bold text-white text-sm">YS</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text text-sm md:text-base">Athlete Name</h3>
                                        <span className="text-xs text-text-muted">@{getSportDisplayName(selectedPost.sport)?.toLowerCase() || 'athlete'} • YouInSports</span>
                                    </div>
                                </div>

                                {/* Scrollable Caption */}
                                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                                    <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                                        {selectedPost.caption}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2 text-primary text-xs font-medium">
                                        #{getSportDisplayName(selectedPost.sport)?.toLowerCase().replace(' ', '')} #athlete #journey #youinsports
                                    </div>
                                </div>

                                {/* Footer Stats */}
                                <div className="p-6 border-t border-white/5 bg-surface-elevated">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-text hover:text-red-500 transition-colors group">
                                                <Heart size={24} className="group-hover:fill-current transition-colors" />
                                                <span className="text-sm font-bold">{selectedPost.likesCount}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-text hover:text-blue-400 transition-colors">
                                                <MessageCircle size={24} />
                                                <span className="text-sm font-bold">{selectedPost.commentsCount}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-xs text-text-subtle uppercase tracking-wider font-mono">
                                        {formatRelativeTime(selectedPost.createdAt)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default YouInSportsPostsSection;
