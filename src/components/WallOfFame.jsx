import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cloud } from 'lucide-react';

const achievements = [
    {
        title: "AWS Certified Solutions Architect",
        org: "Amazon Web Services",
        icon: <Award size={32} className="text-yellow-400" />,
        date: "2024"
    },
    {
        title: "Meta Front-End Developer",
        org: "Meta",
        icon: <Code2 size={32} className="text-blue-400" />,
        date: "2023"
    },
    {
        title: "Google Cloud Digital Leader",
        org: "Google Cloud",
        icon: <Cloud size={32} className="text-red-400" />,
        date: "2023"
    }
];

const WallOfFame = () => {
    return (
        <section className="py-20 relative">
            <div className="section-padding">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Wall of <span className="text-gradient">Fame</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t border-white/10 hover:border-cyan-500/30 transition-all"
                        >
                            <div className="mb-4 p-4 rounded-full bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-cyan-400 text-sm mb-1">{item.org}</p>
                            <p className="text-gray-500 text-xs">{item.date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WallOfFame;
