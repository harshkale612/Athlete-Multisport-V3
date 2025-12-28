import { useCallback } from 'react';

export const useScrollToSection = () => {
    const scrollToSection = useCallback((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            // Offset for sticky navbar (approx 80px)
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);

    return scrollToSection;
};
