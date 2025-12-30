import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Theme mode locked to 'dark-cinematic' (dark theme only)
const THEME_MODES = ['dark-cinematic'];

export const ThemeProvider = ({ children }) => {
    // Check localStorage, default to 'dark-cinematic'
    const [themeMode] = useState('dark-cinematic');

    useEffect(() => {
        const root = window.document.documentElement;
        // Ensure dark theme class is applied
        root.classList.add('dark-cinematic');
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ 
            theme: themeMode, 
            themeMode,
            isDark: themeMode === 'dark-cinematic',
            isLight: false,
            isSportAdaptive: false
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
