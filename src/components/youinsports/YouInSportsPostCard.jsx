import React from 'react';
import { motion } from 'framer-motion';
import { formatRelativeTime, getSportDisplayName } from '../../data/youinsportsPosts';
import { Heart, MessageCircle } from 'lucide-react';

const YouInSportsPostCard = ({ post, index, isPuzzleGrid = false }) => {
    const sportDisplayName = getSportDisplayName(post.sport);
    const relativeTime = formatRelativeTime(post.createdAt);
    
    // Helper to get accent color variable based on sport key
    const getAccentColor = (sportKey) => {
        if (!sportKey) return 'var(--color-primary)';
        return `var(--color-${sportKey})`;
    };

    const accentColor = getAccentColor(post.sport);

    if (isPuzzleGrid) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
            >
                {/* Post Image */}
                <img
                    src={post.image}
                    alt={post.caption.substring(0, 50)}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Seamless gradient overlay for blending effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tropical color overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-emerald-400/10 mix-blend-multiply" />
                
                {/* Hover content overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                    {/* Caption snippet */}
                    <p className="text-white text-xs font-medium line-clamp-2 mb-2">
                        {post.caption}
                    </p>
                    
                    {/* Engagement stats */}
                    <div className="flex items-center justify-between text-white/90 text-xs">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <Heart size={12} fill="currentColor" />
                                <span>{post.likesCount}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MessageCircle size={12} />
                                <span>{post.commentsCount}</span>
                            </div>
                        </div>
                        <span className="text-white/70">{relativeTime}</span>
                    </div>
                </div>
                
                {/* Sport tag for puzzle grid */}
                {sportDisplayName && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {sportDisplayName}
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-xl"
        >
            {/* Post Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-elevated">
                <img
                    src={post.image}
                    alt={post.caption.substring(0, 50)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sport Tag Overlay */}
                {sportDisplayName && (
                    <div
                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition-all duration-300"
                        style={{
                            backgroundColor: `${accentColor}20`,
                            borderColor: accentColor,
                            color: accentColor
                        }}
                    >
                        {sportDisplayName}
                    </div>
                )}
            </div>

            {/* Post Content */}
            <div className="flex flex-col flex-1 p-6 space-y-4">
                {/* Caption */}
                <p className="text-sm text-text-muted line-clamp-3 leading-relaxed group-hover:text-text transition-colors duration-300">
                    {post.caption}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 text-xs text-text-subtle">
                        <div className="flex items-center gap-1.5">
                            <Heart size={14} className="text-text-muted" />
                            <span>{post.likesCount}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MessageCircle size={14} className="text-text-muted" />
                            <span>{post.commentsCount}</span>
                        </div>
                    </div>

                    {/* Time */}
                    <span className="text-xs text-text-subtle font-mono">
                        {relativeTime}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default YouInSportsPostCard;

