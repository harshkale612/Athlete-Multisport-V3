import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const StatCard = ({ label, value, subtext, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse number from string (e.g. "15+" -> 15)
    // If value is not a number (e.g. "95%"), handles it gracefully
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
    const isNumber = !isNaN(numericValue);

    const count = useSpring(0, { duration: 2000, bounce: 0 });
    const rounded = useTransform(count, (latest) => {
        if (!isNumber) return value; // Return original string if not a number

        // Format logic: if int, show int. If float, show 1 decimal? 
        // For simplicity, rounding to int or keeping logic simple
        return Math.floor(latest).toLocaleString();
    });

    useEffect(() => {
        if (isInView && isNumber) {
            const timeout = setTimeout(() => {
                count.set(numericValue);
            }, delay * 1000); // delay is in seconds
            return () => clearTimeout(timeout);
        }
    }, [isInView, numericValue, count, delay, isNumber]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
        >
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {isNumber ? (
                    <motion.span>{rounded}</motion.span>
                ) : (
                    <span>{value}</span>
                )}
                {/* Append suffix if removed (like + or %) */}
                {typeof value === 'string' && value.includes('+') && <span>+</span>}
                {typeof value === 'string' && value.includes('%') && <span>%</span>}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{label}</div>
            {subtext && <div className="text-gray-500 text-xs mt-2">{subtext}</div>}
        </motion.div>
    );
};

export default StatCard;
