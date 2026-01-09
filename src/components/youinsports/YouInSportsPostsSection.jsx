import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { youinsportsPosts } from '../../data/youinsportsPosts';
import YouInSportsPostCard from './YouInSportsPostCard';

const YouInSportsPostsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    // TODO: Replace with real authentication check
    // For now, assume user is NOT logged in
    const isLoggedIn = false;

    // Show 12 recent posts publicly
    const publicPosts = youinsportsPosts.slice(0, 12);

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
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-24"
                >
                    <div className="space-y-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest pl-1 border-l-2 border-primary">
                            Social Updates
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none uppercase">
                            Latest from <span className="text-transparent text-edge-outline">YouInSports</span>
                        </h2>
                    </div>
                    <p className="text-text-muted max-w-md text-sm md:text-base leading-relaxed">
                        Updates, achievements, and moments shared by the athlete
                    </p>
                </motion.div>

                {/* Instagram-style Puzzle Grid */}
                <div className="relative max-w-4xl mx-auto mb-12">
                    <div className="grid grid-cols-3 gap-0 border-2 border-white rounded-lg overflow-hidden shadow-2xl">
                        {publicPosts.map((post, index) => (
                            <YouInSportsPostCard
                                key={post.id}
                                post={post}
                                index={index}
                                isPuzzleGrid={true}
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
        </section>
    );
};

export default YouInSportsPostsSection;

