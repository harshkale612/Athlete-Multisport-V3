import React from 'react';
import { motion } from 'framer-motion';
import { getThemeBySport } from '../../hooks/useThemeBySport';
import { Trophy, ChevronRight } from 'lucide-react';

const SportCard = ({ sport, onClick, index = 0 }) => {
    const theme = getThemeBySport(sport.accentKey);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`group relative p-8 rounded-3xl bg-surface/30 backdrop-blur-md border border-white/10 hover:border-${theme.accentColor} transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl hover:shadow-${theme.accentColor}/20`}
            onClick={onClick}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div className={`absolute top-0 left-0 w-1.5 h-full ${theme.tailwindBg}`} />

            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${theme.accentColor}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6 text-white group-hover:${theme.tailwindText} group-hover:border-${theme.accentColor}/50 transition-colors`}>
                        <Trophy size={24} />
                    </div>
                    <h3 className={`text-3xl font-bold text-white mb-2 group-hover:${theme.tailwindText} transition-colors`}>{sport.name}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{sport.role}</p>
                </div>

                <p className="text-gray-300 mb-8 italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">"{sport.shortTagline}"</p>

                <div className="space-y-4 mb-8 flex-grow">
                    {sport.keyStats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="flex justify-between text-sm py-2 border-b border-white/5">
                            <span className="text-gray-500 font-medium">{stat.label}</span>
                            <span className="text-white font-mono font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>

                <div className={`flex items-center text-sm font-bold uppercase tracking-wider ${theme.tailwindText} gap-2 mt-auto`}>
                    View Details <ChevronRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default SportCard;
