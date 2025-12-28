import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
                opacity: { duration: 0.4 }
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
