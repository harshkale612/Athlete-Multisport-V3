import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { athleteProfile } from '../../data/athleteProfile';
import { sportsData } from '../../data/sportsData';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ThemeSwitcher from '../common/ThemeSwitcher';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
    const navBlur = useTransform(scrollY, [0, 100], [0, 12]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const handleNavClick = (id) => {
        setIsOpen(false);
        setActiveDropdown(null);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Handle scroll on mount if coming from another page
    useEffect(() => {
        if (location.state?.scrollTo && location.pathname === '/') {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
            }
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const isHomePage = location.pathname === '/';

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.4 }
        })
    };

    return (
        <motion.nav
            style={{
                backgroundColor: isHomePage && !scrolled 
                    ? 'transparent' 
                    : `rgba(var(--color-background), ${navOpacity.get() * 0.9})`,
                backdropFilter: `blur(${navBlur.get()}px)`,
                WebkitBackdropFilter: `blur(${navBlur.get()}px)`,
            }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
                ${scrolled || !isHomePage || isOpen
                    ? 'border-b border-border/50 shadow-lg'
                    : 'border-b border-transparent'}`}
        >
            <div className="container-custom flex justify-between items-center h-16 md:h-20">
                {/* Brand */}
                <Link
                    to="/"
                    className="group relative"
                >
                    <motion.span 
                        className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-text group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {athleteProfile.name.split(' ')[0]}
                        <span className="text-primary">.</span>
                    </motion.span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    <Link 
                        to="/" 
                        className={`px-4 py-2 text-sm font-medium tracking-wide uppercase rounded-full transition-all duration-300
                            ${isHomePage ? 'text-text-muted hover:text-text hover:bg-surface/30' : 'text-text-muted hover:text-primary'}`}
                    >
                        Home
                    </Link>

                    {/* Sports Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setActiveDropdown('sports')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide uppercase rounded-full transition-all duration-300 text-text-muted hover:text-text hover:bg-surface/30">
                            Sports 
                            <ChevronDown 
                                size={14} 
                                className={`transition-transform duration-300 ${activeDropdown === 'sports' ? 'rotate-180' : ''}`} 
                            />
                        </button>
                        <AnimatePresence>
                            {activeDropdown === 'sports' && (
                                <motion.div
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-card rounded-2xl shadow-xl overflow-hidden p-2"
                                >
                                    {sportsData.map((sport, idx) => (
                                        <motion.div
                                            key={sport.key}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <Link
                                                to={sport.route}
                                                className="block px-4 py-3 text-sm font-medium text-text-muted hover:text-text hover:bg-surface/50 rounded-xl transition-all duration-300 uppercase tracking-wide"
                                            >
                                                {sport.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="w-px h-6 bg-border mx-2" />
                    <ThemeSwitcher />
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-3">
                    <ThemeSwitcher />
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-text hover:text-primary transition-colors rounded-full hover:bg-surface/30"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 flex flex-col pt-24 pb-12 px-6 lg:hidden overflow-y-auto"
                    >
                        <div className="container-custom space-y-8">
                            {/* Home Link */}
                            <motion.div
                                custom={0}
                                variants={mobileItemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link 
                                    to="/" 
                                    onClick={() => setIsOpen(false)}
                                    className="block text-3xl sm:text-4xl font-display font-extrabold text-text hover:text-primary transition-colors py-2"
                                >
                                    Home
                                </Link>
                            </motion.div>

                            {/* Sports Section */}
                            <motion.div
                                custom={1}
                                variants={mobileItemVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4"
                            >
                                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
                                    Sports
                                </span>
                                <div className="grid grid-cols-2 gap-3">
                                    {sportsData.map((sport, idx) => (
                                        <motion.div
                                            key={sport.key}
                                            custom={idx + 2}
                                            variants={mobileItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <Link
                                                to={sport.route}
                                                onClick={() => setIsOpen(false)}
                                                className="block glass-card p-4 rounded-xl text-center text-sm font-semibold uppercase tracking-wide text-text hover:text-primary hover:bg-surface/50 transition-all duration-300"
                                            >
                                                {sport.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
