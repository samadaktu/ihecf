import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Play, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { galleryImages } from '../utils/galleryImages';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-32">
      <SEO 
        title="Photo Gallery" 
        description="A visual journey through our global recruitment fairs and roadshows. See the impact we make across the Middle East, Africa, and Southeast Asia." 
        keywords="Education Fair Photos, Recruitment Events Gallery, Global Roadshows"
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "IHECF Global Recruitment Photo Gallery",
          "description": "Visual highlights of student interactions, university exhibits, and counselling summits across international regions.",
          "image": galleryImages.map(url => `https://ihecf.info${url}`)
        }}
      />
      {/* Header - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight"
          >
            Moments of <span className="text-secondary italic">Impact</span>
          </motion.h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our global recruitment fairs and roadshows.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((url, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(i)}
              className="group relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-gray-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img src={url} alt={`Gallery Image ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 z-50 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 z-50 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
              <motion.img 
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={galleryImages[selectedImageIndex]} 
                alt={`Enlarged Gallery Image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg md:rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold tracking-widest uppercase">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Strip */}
      <section className="bg-gray-50 py-16 md:py-24 mx-4 md:mx-6 rounded-[2.5rem] md:rounded-[4rem] px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 text-center lg:text-left">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6">Experience the Energy</h2>
             <p className="text-gray-500 text-base md:text-lg leading-relaxed">Watch highlight reels from recent fairs to understand the level of engagement we deliver.</p>
          </div>
          <div className="flex gap-4 md:gap-6 justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-[2rem] shadow-xl flex items-center justify-center text-secondary border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
               <Play size={32} md:size={40} fill="currentColor" />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-primary rounded-2xl md:rounded-[2rem] shadow-xl flex items-center justify-center text-white">
               <ImageIcon size={32} md:size={40} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
