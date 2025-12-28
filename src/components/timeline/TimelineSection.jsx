import React, { useRef } from 'react';
import { timelineData } from '../../data/timelineData';
import { motion, useScroll, useSpring } from 'framer-motion';

const TimelineItem = ({ item, index, isLast }) => {
    return (
        <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isLast ? 'pb-0' : 'pb-32'}`}>

            {/* Even: Text Left, Date Right (Desktop) */}
            {index % 2 === 0 ? (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-right hidden md:block"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed mb-4">{item.description}</p>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80 border border-primary/20 px-3 py-1 rounded-full">
                            {item.sportKey}
                        </span>
                    </motion.div>

                    {/* Center Point - Absolute */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/20 z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full h-full bg-primary rounded-full"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="pl-12 md:pl-0"
                    >
                        <span className="text-[8rem] leading-none font-display font-bold text-white/5 select-none absolute -top-8 left-0 md:left-auto md:-top-16 transition-colors duration-700 hover:text-white/10">
                            {item.yearOrDate.split(" ")[0]}
                        </span>
                        {/* Mobile Content */}
                        <div className="md:hidden relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">{item.description}</p>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    {/* Odd: Date Left, Text Right (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hidden md:block text-right pr-0 relative"
                    >
                        <span className="text-[8rem] leading-none font-display font-bold text-white/5 select-none absolute -top-16 right-0 transition-colors duration-700 hover:text-white/10">
                            {item.yearOrDate.split(" ")[0]}
                        </span>
                    </motion.div>

                    {/* Center Point */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-white/20 z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full h-full bg-primary rounded-full"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="pl-12 md:pl-0 text-left"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed mb-4">{item.description}</p>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80 border border-primary/20 px-3 py-1 rounded-full">
                            {item.sportKey}
                        </span>

                        {/* Mobile Date Overlay if needed, but simplified layout handles it */}
                        <div className="md:hidden mt-2">
                            <span className="text-4xl font-display font-bold text-white/10 block mb-2">{item.yearOrDate.split(" ")[0]}</span>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
}

const TimelineSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="timeline" ref={containerRef} className="py-32 bg-background relative overflow-hidden">

            <div className="container-custom relative z-10">
                <div className="mb-40 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter"
                    >
                        The Path
                    </motion.h2>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="w-px bg-primary mx-auto mt-8"
                    />
                </div>

                <div className="relative">
                    {/* The Beam (Progress Line) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/5 opacity-50" />
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-purple-500"
                    />

                    <div className="relative z-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
