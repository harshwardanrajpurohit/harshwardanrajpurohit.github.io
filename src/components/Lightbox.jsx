import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, currentIndex, photos, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen || currentIndex === null) return null;

    const currentPhoto = photos[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X size={24} className="text-white" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        className="absolute left-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft size={32} className="text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight size={32} className="text-white" />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        key={currentIndex}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-6xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentPhoto.src}
                            alt={currentPhoto.title}
                            className="w-full h-full object-contain rounded-lg"
                        />

                        {/* Caption */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">{currentPhoto.title}</h3>
                            <p className="text-gray-300">{currentPhoto.desc}</p>
                        </motion.div>
                    </motion.div>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 px-4 py-2 rounded-full">
                        {currentIndex + 1} / {photos.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
