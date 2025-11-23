import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit } from 'lucide-react';

const skills = [
    {
        icon: <BrainCircuit size={32} className="text-purple-400" />,
        title: 'AIML',
        description: 'Artificial Intelligence & Machine Learning solutions that drive innovation.',
        color: 'from-purple-500/20 to-blue-500/5'
    },
    {
        icon: <Code2 size={32} className="text-cyan-400" />,
        title: 'Full Stack Dev',
        description: 'Building scalable Web and Mobile applications using modern technologies.',
        color: 'from-cyan-500/20 to-blue-500/5'
    },
    {
        icon: <Server size={32} className="text-pink-400" />,
        title: 'DevOps',
        description: 'Streamlining deployment pipelines and ensuring robust infrastructure.',
        color: 'from-pink-500/20 to-purple-500/5'
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-gradient">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I combine technical depth with creative problem-solving across three core domains.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`glass-card p-8 rounded-2xl bg-gradient-to-b ${skill.color} border-white/5 hover:border-white/20 transition-all duration-300`}
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
