import { services } from '../utils/data';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Globe, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('/hero_background_students_map.png')] bg-cover opacity-10 grayscale scale-110" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-tight"
          >
            Strategic <span className="text-secondary italic">Excellence</span>
          </motion.h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive ecosystem of services designed to maximize Indian university enrollment from international markets.
          </p>
        </div>
      </section>

      {/* Services Grid - Responsive Cards */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-light text-primary rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-secondary group-hover:text-white transition-all shadow-inner">
                {i === 0 ? <Globe size={28}/> : i === 1 ? <Users size={28}/> : i === 2 ? <Zap size={28}/> : <BarChart size={28}/>}
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-primary tracking-tight">{service.title}</h3>
              <p className="text-gray-500 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12">
                {['Premium Logistics', 'Local Market Experts', 'Lead Tracking'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 font-bold text-[10px] md:text-sm">
                    <CheckCircle size={16} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>

              <Link to={`/service/${service.slug}`} className="w-full py-4 bg-gray-50 text-primary rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                View Details <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Strip - Responsive Layout */}
      <section className="bg-secondary py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
           <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-white leading-tight">Need a custom recruitment strategy?</h2>
           <Link to="/contact" className="bg-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-sm shadow-2xl hover:scale-105 transition-transform w-full md:w-auto text-center">
             Let's Discuss
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
