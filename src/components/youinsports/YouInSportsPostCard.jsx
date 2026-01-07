import React from 'react';
import { motion } from 'framer-motion';
import { formatRelativeTime, getSportDisplayName } from '../../data/youinsportsPosts';
import { Heart, MessageCircle } from 'lucide-react';

const YouInSportsPostCard = ({ post, index }) => {
    const sportDisplayName = getSportDisplayName(post.sport);
    const relativeTime = formatRelativeTime(post.createdAt);
    
    // Helper to get accent color variable based on sport key
    const getAccentColor = (sportKey) => {
        if (!sportKey) return 'var(--color-primary)';
        return `var(--color-${sportKey})`;
    };

    const accentColor = getAccentColor(post.sport);

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

