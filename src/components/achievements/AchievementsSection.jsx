import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievementsData';
import { getThemeBySport } from '../../hooks/useThemeBySport';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const iconMap = {
    Trophy: Trophy,
    Medal: Medal,
    Award: Award,
    Star: Star
};

const AchievementCard = ({ achievement, index }) => {
    const theme = getThemeBySport(achievement.sportKey);
    const Icon = iconMap[achievement.icon] || Trophy;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 rounded-2xl bg-surface/30 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
        >
            {/* Sport Accent Line */}
            <div className={`absolute top-0 left-6 w-12 h-1 ${theme.tailwindBg}`} />

            <div className="flex items-start justify-between mb-4 mt-2">
                <div className={`p-3 rounded-xl bg-white/5 ${theme.tailwindText} group-hover:bg-white/10 transition-colors`}>
                    <Icon size={24} />
                </div>
                <span className="text-4xl font-bold text-white/5 font-mono group-hover:text-white/10 transition-colors pointer-events-none select-none">
                    {achievement.year}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{achievement.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{achievement.description}</p>

            <div className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${theme.tailwindBorder} ${theme.tailwindText} bg-transparent`}>
                {theme.label}
            </div>
        </motion.div>
    );
};

const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-[-50%] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Trophy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Cabinet</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg">Milestones of excellence across the board.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievementsData.map((item, index) => (
                        <AchievementCard key={item.id} achievement={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
