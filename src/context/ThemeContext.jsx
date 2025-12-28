import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Theme modes: 'dark-cinematic', 'light-editorial', 'sport-adaptive'
const THEME_MODES = ['dark-cinematic', 'light-editorial', 'sport-adaptive'];

export const ThemeProvider = ({ children }) => {
    // Check localStorage, default to 'dark-cinematic'
    const [themeMode, setThemeMode] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedPref = window.localStorage.getItem('theme-mode');
            if (storedPref && THEME_MODES.includes(storedPref)) return storedPref;
        }
        return 'dark-cinematic';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove all theme classes
        root.classList.remove('dark-cinematic', 'light-editorial', 'sport-adaptive');

        // Add current theme class
        root.classList.add(themeMode);

        // Save preference
        localStorage.setItem('theme-mode', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode(prev => {
            const currentIndex = THEME_MODES.indexOf(prev);
            const nextIndex = (currentIndex + 1) % THEME_MODES.length;
            return THEME_MODES[nextIndex];
        });
    };

    const setTheme = (mode) => {
        if (THEME_MODES.includes(mode)) {
            setThemeMode(mode);
        }
    };

    return (
        <ThemeContext.Provider value={{ 
            theme: themeMode, 
            themeMode,
            setTheme, 
            toggleTheme,
            isDark: themeMode === 'dark-cinematic',
            isLight: themeMode === 'light-editorial',
            isSportAdaptive: themeMode === 'sport-adaptive'
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
