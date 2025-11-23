import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Socials = () => {
    const socialLinks = [
        { icon: <Github size={24} />, href: "https://github.com/harshwardanrajpurohit", color: "hover:text-white" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/harshwardan07/", color: "hover:text-blue-400" },
        { icon: <Twitter size={24} />, href: "https://x.com/harshwardan_x", color: "hover:text-sky-400" },
        { icon: <Dribbble size={24} />, href: "https://dribbble.com/harshwardan_x", color: "hover:text-pink-400" }
    ];

    return (
        <div className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col gap-6 items-center">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`text-gray-400 transition-colors ${social.color}`}
                >
                    {social.icon}
                </motion.a>
            ))}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ delay: 2, duration: 1 }}
                className="w-[1px] bg-gradient-to-b from-gray-400 to-transparent"
            />
        </div>
    );
};

export default Socials;
