import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Activity } from 'lucide-react';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportDetailModal = ({ sport, onClose }) => {
    if (!sport) return null;
    const theme = getThemeBySport(sport.accentKey);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className={`p-8 ${theme.tailwindBg} text-white relative`}>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <h2 className="text-4xl font-bold mb-2">{sport.name}</h2>
                        <p className="text-white/80 text-lg">{sport.role} | {sport.level}</p>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <div className="mb-8">
                            <h3 className={`text-xl font-bold ${theme.tailwindText} mb-4 flex items-center gap-2`}>
                                <Activity size={20} /> My Perspective
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {sport.description}
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${theme.tailwindText} mb-4 flex items-center gap-2`}>
                                <Trophy size={20} /> Key Stats
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {sport.keyStats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="text-gray-500 text-sm mb-1">{stat.label}</div>
                                        <div className="text-2xl font-mono text-white">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SportDetailModal;
