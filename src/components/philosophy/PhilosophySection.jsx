import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

const PhilosophySection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const principles = [
        { label: "Adaptability", desc: "Fluid strategy across domains" },
        { label: "Precision", desc: "Exact execution under pressure" },
        { label: "Resilience", desc: "Unbreaking mental fortitude" },
        { label: "Vision", desc: "Seeing the move before it happens" }
    ];

    return (
        <section
            ref={containerRef}
            id="philosophy"
            className="section-padding relative overflow-hidden bg-background"
        >
            {/* Background Texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Interactive Title */}
                    <div className="relative">
                        <motion.div style={{ y }} className="relative z-10">
                            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">
                                The Philosophy
                            </span>
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black leading-none mb-8">
                                Mind In <br />
                                <span className="text-transparent text-edge-outline">Motion</span>
                            </h2>
                            <p className="text-lg text-text-muted max-w-md font-light leading-relaxed mb-8">
                                "The path to mastery isn't linear. It's a continuous cycle of learning, adapting, and pushing boundaries. Each discipline informs the others."
                            </p>

                            <motion.div
                                style={{ rotate }}
                                className="absolute -top-20 -left-20 w-40 h-40 border border-primary/20 rounded-full opacity-50 z-[-1]"
                            />
                        </motion.div>
                    </div>

                    {/* Right: Principles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {principles.map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-6 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/60 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="mb-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Quote size={20} className="fill-current" />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                    {item.label}
                                </h3>
                                <p className="text-sm text-text-muted leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
