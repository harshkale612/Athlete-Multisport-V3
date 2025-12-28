import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getThemeBySport } from '../../hooks/useThemeBySport';

const SportThemeManager = () => {
    const location = useLocation();
    const { themeMode } = useTheme();

    useEffect(() => {
        const path = location.pathname;
        let sportKey = 'multi'; // Default to multi-sport/global blue

        // Determine sport key from path
        if (path.startsWith('/sport/')) {
            const key = path.split('/')[2];
            if (key) sportKey = key;
        }

        // Only apply sport accent if theme mode is 'sport-adaptive'
        if (themeMode === 'sport-adaptive') {
            const themeConfig = getThemeBySport(sportKey);

            // Define RGB helper
            const hexToRgb = (hex) => {
                if (!hex) return null;
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
            };

            const accentRgb = hexToRgb(themeConfig.accentColor);

            if (accentRgb) {
                // Smoothly transition the primary color
                document.documentElement.style.setProperty('--color-primary', accentRgb);
                
                // Calculate hover color (lighter version)
                const [r, g, b] = accentRgb.split(' ').map(Number);
                const hoverR = Math.min(255, Math.floor(r * 1.2));
                const hoverG = Math.min(255, Math.floor(g * 1.2));
                const hoverB = Math.min(255, Math.floor(b * 1.2));
                document.documentElement.style.setProperty('--color-primary-hover', `${hoverR} ${hoverG} ${hoverB}`);
                document.documentElement.style.setProperty('--color-primary-glow', accentRgb);
            }
        } else {
            // Reset to default primary colors for other themes
            if (themeMode === 'dark-cinematic') {
                document.documentElement.style.setProperty('--color-primary', '37 99 235');
                document.documentElement.style.setProperty('--color-primary-hover', '59 130 246');
                document.documentElement.style.setProperty('--color-primary-glow', '37 99 235');
            } else if (themeMode === 'light-editorial') {
                document.documentElement.style.setProperty('--color-primary', '37 99 235');
                document.documentElement.style.setProperty('--color-primary-hover', '29 78 216');
                document.documentElement.style.setProperty('--color-primary-glow', '37 99 235');
            }
        }

    }, [location, themeMode]);

    return null;
};

export default SportThemeManager;
