import { motion } from 'framer-motion';
import { Globe, Users, GraduationCap, Calendar, ChevronRight, CheckCircle, ArrowRight, Play, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, countries } from '../utils/data';
import SEO from '../components/SEO';

const Home = () => {
  const stats = [
    { label: 'Qualified Students', value: '30k+', icon: <Users /> },
    { label: 'Exhibiting Schools', value: '200+', icon: <GraduationCap /> },
    { label: 'Global Markets', value: '20+', icon: <Globe /> },
    { label: 'Success Rate', value: '98%', icon: <ShieldCheck /> },
  ];

  const upcomingEvents = [
    { country: 'KSA', date: 'Sept 15-20, 2026', title: 'Riyadh Education Expo', image: '/ksa_education_event.png', type: 'Premium Expo' },
    { country: 'Oman', date: 'Oct 02-05, 2026', title: 'Muscat Career Fair', image: '/student_interaction_fair.png', type: 'Career Fair' },
    { country: 'Vietnam', date: 'Nov 10-14, 2026', title: 'Hanoi University Meet', image: '/vietnam_education_event.png', type: 'Institutional Meet' },
    { country: 'Kenya', date: 'Nov 25-28, 2026', title: 'Nairobi School Roadshow', image: '/kenya_education_event.png', type: 'Roadshow' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="overflow-hidden bg-white">
      <SEO 
        title="Home" 
        description="Pioneer international students recruitment with IHECF fairs. Your reliable platform to connect with most promising students, parents, local universities & schools." 
        keywords="IHECF, Education Fairs, Student Recruitment, International Education, Indian Higher Education"
      />
      {/* Hero Section - Optimized for Mobile */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_background_students_map.png" 
            className="w-full h-full object-cover scale-105"
            alt="Students Global Reach"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm">
              <Sparkles size={14} /> The Global Bridge for Higher Education
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-white mb-6 md:mb-8 leading-[1] md:leading-[0.9] font-black tracking-tighter"
            >
              Building <span className="text-secondary italic">Futures</span> Beyond Borders
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl"
            >
              IHECF connects world-class Indian universities with over 30,000+ ambitious students across 20+ countries through high-impact recruitment experiences.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto">
              <Link to="/events" className="group btn-secondary px-8 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-xl w-full sm:w-auto justify-center">
                Register for Next Fair <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center gap-2 w-full sm:w-auto text-base">
                Partner With Us <ExternalLink size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
        <div className="absolute top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[100px]" />
      </section>

      {/* Trust & Performance Metrics - Stack on Mobile */}
      <section className="relative z-20 -mt-10 md:-mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 shadow-2xl border border-gray-100 grid grid-cols-2 lg:flex lg:justify-between gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-light text-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-4xl font-black text-primary tracking-tight">{stat.value}</div>
              </div>
              <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black ml-1 text-center md:text-left">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Features - Responsive Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8 px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 text-primary">Strategic <span className="text-secondary italic">Solutions</span></h2>
            <p className="text-gray-500 text-base md:text-lg">We engineer conversion-focused recruitment ecosystems.</p>
          </div>
          <Link to="/services" className="text-primary font-black flex items-center gap-2 hover:text-secondary transition-colors text-[10px] md:text-sm uppercase tracking-widest border-b-2 border-secondary pb-1">All Services <ChevronRight size={18}/></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-gray-100 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Indian Higher Education Fairs</h3>
              <p className="text-gray-500 max-w-md mb-6 md:mb-8 text-sm md:text-lg">Flagship B2C events connecting admission directors with qualified students in premium venues.</p>
              <Link to="/services" className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center group-hover:bg-secondary transition-all">
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
            <img src="/student_interaction_fair.png" className="absolute -bottom-10 -right-10 w-64 md:w-80 opacity-10 group-hover:opacity-20 transition-opacity" alt="" />
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/20 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 relative z-10">School Roadshows</h3>
            <p className="text-gray-400 mb-6 md:mb-8 relative z-10 text-sm md:text-lg">Direct access to the most prestigious international schools.</p>
            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all">
               <Calendar size={20} className="text-secondary group-hover:text-white" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 bg-accent-light rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-secondary/10 group">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Agent Summits</h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-lg">B2B networking events to build strong local partnerships.</p>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-primary">
              <Users size={20} />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 md:gap-10 items-center overflow-hidden group">
             <div className="flex-1">
               <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Market Entry Strategy</h3>
               <p className="text-gray-500 mb-6 text-sm md:text-lg">Data-driven insights to help Indian universities conquer new territories.</p>
               <Link to="/contact" className="text-secondary font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">Get Strategy <ArrowRight size={14}/></Link>
             </div>
             <div className="w-full sm:w-1/3 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner group-hover:rotate-3 transition-transform">
                <div className="space-y-3 md:space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 md:h-2 rounded-full ${i===1 ? 'w-full bg-secondary' : i===2 ? 'w-2/3 bg-primary/20' : 'w-1/2 bg-primary/10'}`} />
                  ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-16 md:section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full border-[1px] border-white/20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">Our Reach</span>
            <h2 className="text-3xl md:text-7xl text-white font-black tracking-tighter">Conquering <span className="text-secondary">20+</span> Markets</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Middle East', desc: 'The hub of premium student mobility including KSA, Oman, and UAE.', img: '/ksa_education_event.png', count: '8 Countries' },
              { name: 'Africa', desc: 'The fastest growing youth population across Kenya, Ethiopia, and Tanzania.', img: '/kenya_education_event.png', count: '10 Countries' },
              { name: 'Southeast Asia', desc: 'Emerging academic powerhouses including Vietnam and Thailand.', img: '/vietnam_education_event.png', count: '5 Countries' }
            ].map((region, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col"
              >
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img src={region.img} alt={region.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 px-3 md:px-4 py-1.5 md:py-2 bg-secondary text-white rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {region.count}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-grow">
                  <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 md:mb-4">{region.name}</h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">{region.desc}</p>
                  <Link to="/gallery" className="w-full py-3 md:py-4 border border-white/20 rounded-xl md:rounded-2xl text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-primary transition-all">
                    Explore <ChevronRight size={18}/>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - Responsive Schedule */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-primary mb-3 md:mb-4 leading-none">The <span className="text-secondary italic underline decoration-4 underline-offset-8">Schedule</span></h2>
              <p className="text-gray-500 text-base md:text-xl">Secure your spot in our upcoming tours.</p>
            </div>
            <Link to="/events" className="btn-primary inline-flex items-center gap-3 w-full sm:w-auto justify-center py-4">
              View Calendar <Calendar size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="h-40 md:h-48 relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                    <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-lg">{event.type}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-secondary font-black text-[8px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">
                     <Globe size={12}/> {event.country}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4 leading-tight group-hover:text-secondary transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-6 md:mb-8">
                    <Calendar size={14} className="text-primary" /> {event.date}
                  </div>
                  <Link to="/events" className="w-full py-3 md:py-4 bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-all rounded-xl md:rounded-2xl text-center font-bold text-[10px] block uppercase tracking-widest">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Partners */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-3">Partnering Institutions</h3>
              <div className="h-0.5 w-16 md:w-24 bg-secondary mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {['Amity', 'SRM', 'VIT', 'IIT', 'BITS', 'LPU'].map(u => (
                 <span key={u} className="text-xl md:text-2xl font-black text-primary italic font-heading">{u}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Video Call to Action */}
      <section className="py-12 md:section-padding px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-6xl text-white font-black tracking-tighter mb-6 md:mb-8 leading-[1.1]">Ready to <span className="text-secondary">Transform</span> Your Recruitment?</h2>
              <p className="text-gray-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed">Join the most effective platform for Indian Higher Education mobility.</p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link to="/contact" className="btn-secondary px-10 py-4 text-base md:text-lg justify-center">Start Today</Link>
                <div className="flex items-center justify-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-all">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold tracking-widest text-[10px] uppercase">Watch Showcase</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center group overflow-hidden">
                 <img src="/student_interaction_fair.png" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" alt="Showcase" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
