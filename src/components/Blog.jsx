import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "The Future of AI in Web Development",
        date: "Nov 24, 2025",
        excerpt: "Exploring how artificial intelligence is reshaping the way we build and interact with the web."
    },
    {
        title: "Mastering React Native Animations",
        date: "Nov 18, 2025",
        excerpt: "A deep dive into creating smooth, 60fps animations in your mobile applications."
    },
    {
        title: "DevOps Best Practices for 2026",
        date: "Nov 10, 2025",
        excerpt: "Essential strategies for maintaining robust and scalable infrastructure."
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 relative">
            <div className="section-padding">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Latest <span className="text-gradient">Insights</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group cursor-pointer"
                        >
                            <p className="text-cyan-400 text-sm mb-4">{blog.date}</p>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
