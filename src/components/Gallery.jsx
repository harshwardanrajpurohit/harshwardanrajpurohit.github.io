import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

// Import all images
import galleryImg2 from '../assets/gallery2.png';
import profileImg1 from '../assets/profile1.jpg';
import profileImg2 from '../assets/profile2.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const photos = [
    { src: event1, title: "Google WOW Team", desc: "Day 2 of Google WOW Event - Building community together", size: "large" },
    { src: event2, title: "Panel Discussion", desc: "Google WOW Event - Learning from industry experts", size: "medium" },
    { src: event3, title: "Google WOW Pune 2025", desc: "Attending Google Developer Groups event", size: "medium" },
    { src: event4, title: "3D Printing Workshop", desc: "Hands-on session exploring additive manufacturing", size: "large" },
    { src: galleryImg2, title: "Workshop", desc: "Attending with Aryan", size: "medium" },
    { src: profileImg1, title: "Professional", desc: "Corporate Headshot", size: "small" },
    { src: profileImg2, title: "Creative", desc: "Developer Mode On", size: "small" },
];

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentIndex(null);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const getSizeClass = (size) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]';
            case 'medium':
                return 'md:col-span-1 md:row-span-1 h-[300px]';
            case 'small':
                return 'md:col-span-1 md:row-span-1 h-[250px]';
            default:
                return 'md:col-span-1 md:row-span-1 h-[300px]';
        }
    };

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Life in <span className="text-gradient">Frames</span>
                </motion.h2>

                {/* Masonry Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => openLightbox(index)}
                            className={`relative rounded-2xl overflow-hidden glass-card p-2 cursor-pointer group ${getSizeClass(photo.size)}`}
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                                    <p className="text-sm text-gray-300">{photo.desc}</p>
                                </motion.div>
                            </div>

                            {/* Click indicator */}
                            <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-500/30">
                                Click to view
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 text-gray-500 text-sm"
                >
                    <span className="text-cyan-400 font-bold">{photos.length}</span> moments captured
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <Lightbox
                isOpen={lightboxOpen}
                currentIndex={currentIndex}
                photos={photos}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </section>
    );
};

export default Gallery;
