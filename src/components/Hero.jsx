import React from 'react';
import { motion } from 'framer-motion';
import profileImg1 from '../assets/profile1.jpg';
import profileImg2 from '../assets/profile2.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[100px]" />
            </div>

            <div className="section-padding grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <span className="text-cyan-400 font-medium">Available for Freelance</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        I'm <span className="text-gradient">Harshwardan</span>
                        <br />
                        <span className="text-white">Rajpurohit</span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Specializing in AIML, Full Stack Development (Web & Mobile), and DevOps.
                        Building future-proof digital experiences with precision and passion.
                    </p>

                    <div className="flex gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 glass-card rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
                        >
                            View Work
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center h-[500px]"
                >
                    {/* Main Image Container with Hover Swap */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-20 w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden glass-card p-2 shadow-2xl shadow-cyan-500/20 group cursor-pointer"
                    >
                        {/* Default Image (Formal) */}
                        <img
                            src={profileImg1}
                            alt="Harshwardan Rajpurohit Formal"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                        />
                        {/* Hover Image (Selfie) */}
                        <img
                            src={profileImg2}
                            alt="Harshwardan Rajpurohit Selfie"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        className="absolute -right-8 top-20 z-30 glass-card p-3 rounded-xl flex items-center gap-2"
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Web & Mobile</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        className="absolute -left-8 bottom-20 z-30 glass-card p-3 rounded-xl flex items-center gap-2"
                    >
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium">DevOps</span>
                    </motion.div>

                    {/* Decorative Circle behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
