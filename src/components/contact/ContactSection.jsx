import React, { useState } from 'react';
import { athleteProfile } from '../../data/athleteProfile';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1500);
    };

    return (
        <section id="contact" className="py-32 bg-black relative border-t border-white/10">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Heading & Info */}
                    <div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-white leading-none mb-12">
                            What's <br />
                            <span className="text-primary">Next?</span>
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Email</h4>
                                <a href={`mailto:${athleteProfile.socialLinks.email}`} className="text-2xl md:text-3xl text-white hover:text-primary transition-colors underline decoration-white/20 underline-offset-8 decoration-1">
                                    {athleteProfile.socialLinks.email}
                                </a>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Base</h4>
                                <p className="text-xl text-white">{athleteProfile.location}</p>
                            </div>
                        </div>

                        <div className="mt-20">
                            <p className="text-text-muted text-sm">
                                &copy; {new Date().getFullYear()} {athleteProfile.name}. All Rights Reserved.
                            </p>
                        </div>
                    </div>

                    {/* Right: Minimal Form */}
                    <div className="lg:pt-8">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div className="group relative">
                                <textarea
                                    placeholder="Message"
                                    rows="1"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'sent'}
                                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
                                >
                                    {status === 'idle' && 'Send Message'}
                                    {status === 'sending' && 'Sending...'}
                                    {status === 'sent' && 'Sent'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
