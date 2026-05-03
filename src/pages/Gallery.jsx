import { motion } from 'framer-motion';
import { Image as ImageIcon, Play, Search, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery = () => {
  const images = [
    { url: '/ksa_education_event.png', title: 'Riyadh Expo 2024', category: 'Middle East' },
    { url: '/student_interaction_fair.png', title: 'Mumbai Roadshow', category: 'India' },
    { url: '/vietnam_education_event.png', title: 'Hanoi Fair', category: 'Southeast Asia' },
    { url: '/kenya_education_event.png', title: 'Nairobi Summit', category: 'Africa' },
    { url: '/ksa_education_event.png', title: 'Oman Career Fair', category: 'Middle East' },
    { url: '/student_interaction_fair.png', title: 'Dubai Forum', category: 'Middle East' },
  ];

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-32">
      <SEO 
        title="Photo Gallery" 
        description="A visual journey through our global recruitment fairs and roadshows. See the impact we make across the Middle East, Africa, and Southeast Asia." 
        keywords="Education Fair Photos, Recruitment Events Gallery, Global Roadshows"
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

      {/* Gallery Grid - Scrollable Categories on Mobile */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-4 mb-12 md:mb-16 overflow-x-auto pb-4 md:pb-0 no-scrollbar justify-start md:justify-center">
          {['All', 'Middle East', 'Africa', 'Southeast Asia', 'Events'].map(cat => (
            <button key={cat} className="px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-gray-100 hover:border-secondary hover:text-secondary transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {images.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-50 aspect-video shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                <div className="text-secondary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2">{item.category}</div>
                <h3 className="text-xl md:text-2xl text-white font-bold mb-4 md:mb-6">{item.title}</h3>
                <div className="flex gap-3 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary">
                    <ZoomIn size={18} md:size={20} />
                  </button>
                  <button className="px-4 md:px-6 h-10 md:h-12 bg-white/10 text-white border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Strip - Stack on Mobile */}
      <section className="bg-gray-50 py-16 md:py-24 mx-4 md:mx-6 rounded-[2.5rem] md:rounded-[4rem] px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 text-center lg:text-left">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6">Experience the Energy</h2>
             <p className="text-gray-500 text-base md:text-lg leading-relaxed">Watch highlight reels from recent fairs to understand the level of engagement we deliver.</p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-[2rem] shadow-xl flex items-center justify-center text-secondary border border-gray-100">
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
