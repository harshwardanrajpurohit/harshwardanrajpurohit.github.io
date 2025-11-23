import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Project Alpha",
        description: "A futuristic web application built with React and Three.js.",
        tags: ["React", "Three.js", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        title: "Mobile App Beta",
        description: "Cross-platform mobile app for productivity using React Native.",
        tags: ["React Native", "Firebase", "Redux"],
        link: "#",
        github: "#"
    },
    {
        title: "AI Dashboard",
        description: "Analytics dashboard powered by machine learning algorithms.",
        tags: ["Python", "TensorFlow", "React"],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="section-padding">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="h-48 rounded-xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 mb-6 flex items-center justify-center">
                                <span className="text-gray-500">Project Preview</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-cyan-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
