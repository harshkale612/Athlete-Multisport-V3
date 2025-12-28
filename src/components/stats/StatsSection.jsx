import React from 'react';
import { statsData } from '../../data/statsData';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseFloat(String(value).replace(/[^0-9.]/g, ''));
            const incrementTime = (duration / end) * 1000;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                }
            }, 50); // Cap speed for readability

            // A simpler lerp approach for very large numbers
            if (end > 100) {
                clearInterval(timer);
                let startTime;
                const animate = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / (duration * 1000), 1);
                    setCount(Math.floor(percentage * end));
                    if (percentage < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{String(value).includes('%') ? `${count}%` : count}{String(value).includes('+') ? '+' : ''}</span>;
}

const StatPanel = ({ label, value, subtext }) => (
    <div className="flex flex-col items-start p-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-500">
        <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">{label}</span>
        <div className="text-6xl md:text-8xl font-display font-bold text-white mb-2">
            <AnimatedCounter value={value} />
        </div>
        <p className="text-text-muted text-sm">{subtext}</p>
    </div>
);

const StatsSection = () => {
    const { overall } = statsData;

    return (
        <section id="stats" className="py-32 bg-background relative border-t border-white/5">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        By The <br />
                        <span className="text-primary">Numbers</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10">
                    <StatPanel label="Years Active" value={overall.yearsTraining} subtext="Dedication to the craft" />
                    <StatPanel label="Competitions" value={overall.totalMatchesOrEvents} subtext="Proven in the arena" />
                    <StatPanel label="Disciplines" value={overall.sportsCount} subtext="Versatility across fields" />
                    <StatPanel label="Win Rate" value={overall.overallWinRate} subtext="Consistent performance" />
                </div>

                {/* Visual Data Representation (Abstract) */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {['Chess', 'Football', 'Cricket'].map((sport) => (
                        <div key={sport} className="relative group">
                            <div className="flex justify-between items-end mb-4">
                                <h3 className={`text-2xl font-bold text-${sport.toLowerCase()}`}>{sport}</h3>
                                <span className="text-xs font-mono text-text-muted uppercase">Performance Index</span>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${80 + Math.random() * 15}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className={`h-full bg-${sport.toLowerCase()} rounded-full`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
