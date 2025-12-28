import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
    const { themeMode, toggleTheme } = useTheme();

    const getIcon = () => {
        switch (themeMode) {
            case 'dark-cinematic':
                return <Moon size={18} />;
            case 'light-editorial':
                return <Sun size={18} />;
            case 'sport-adaptive':
                return <Palette size={18} />;
            default:
                return <Moon size={18} />;
        }
    };

    const getLabel = () => {
        switch (themeMode) {
            case 'dark-cinematic':
                return 'Dark';
            case 'light-editorial':
                return 'Light';
            case 'sport-adaptive':
                return 'Sport';
            default:
                return 'Theme';
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="relative flex items-center gap-2 px-3 py-2 rounded-full glass hover:bg-surface/80 transition-all duration-300 group"
            aria-label={`Switch theme. Current: ${getLabel()}`}
        >
            <motion.div
                key={themeMode}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {getIcon()}
            </motion.div>
            <span className="text-xs font-medium text-text-muted group-hover:text-text transition-colors hidden sm:inline">
                {getLabel()}
            </span>
        </motion.button>
    );
};

export default ThemeSwitcher;
