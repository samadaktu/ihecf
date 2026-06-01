import { useState } from 'react';
import { countries } from '../utils/data';
import { Calendar, MapPin, Search, Filter, ArrowRight, X, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Events = () => {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const allEvents = [
    { country: 'Uganda', date: 'Feb 9-10, 2026', title: 'IHECF Uganda 2026', type: 'Fair', image: '/uganda_education_fair.png' },
    { country: 'Kenya', date: 'Feb/Mar 2026', title: 'IHECF Kenya 2026', type: 'Fair', image: '/kenya_education_fair.png' },
    { country: 'Zanzibar', date: 'Feb/Mar 2026', title: 'IHECF Zanzibar 2026', type: 'Fair', image: '/zanzibar_education_fair.png' },
    { country: 'Tanzania', date: 'Feb/Mar 2026', title: 'IHECF Tanzania 2026-27', type: 'Fair', image: '/tanzania_education_fair.png' },
    { country: 'Zambia', date: 'Feb/Mar 2026', title: 'IHECF Zambia 2026-27', type: 'Fair', image: '/zambia_education_fair.png' },
    { country: 'Gambia', date: 'Nov 2026', title: 'IHECF Gambia 2026', type: 'Fair', image: '/gambia_education_fair.png' },
    { country: 'Senegal', date: 'Nov 2026', title: 'IHECF Senegal 2026', type: 'Fair', image: '/senegal_education_fair.png' },
    { country: 'KSA', date: 'Sept 15-20, 2026', title: 'Riyadh Education Expo', type: 'Fair', image: '/ksa_education_event.png' },
    { country: 'Qatar', date: 'Sept 24, 2026', title: 'IHECF Qatar 2026', type: 'Fair', image: '/qatar_education_fair.png' },
    { country: 'Kuwait', date: 'Sept 27-30, 2026', title: 'IHECF Kuwait 2026', type: 'Fair', image: '/kuwait_education_fair.png' },
    { country: 'Oman', date: 'Oct 02-05, 2026', title: 'Muscat Career Fair', type: 'Fair', image: '/student_interaction_fair.png' },
    { country: 'Ethiopia', date: 'Oct 20-22, 2026', title: 'Addis Ababa Summit', type: 'Summit', image: '/kenya_education_event.png' },
    { country: 'Vietnam', date: 'Nov 10-14, 2026', title: 'Hanoi University Meet', type: 'Visit', image: '/vietnam_education_event.png' },
    { country: 'Thailand', date: 'Dec 05-08, 2026', title: 'Bangkok Student Fair', type: 'Fair', image: '/student_interaction_fair.png' },
  ];

  const filteredEvents = filter === 'All' 
    ? allEvents 
    : allEvents.filter(e => e.country === filter || e.type === filter);

  const filterOptions = ['All', 'Fair', 'Visit', 'Summit', ...countries.slice(0, 5)];

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    
    const formData = new FormData(e.target);
    // Adding event details to form data
    formData.append('event_title', selectedEvent.title);
    formData.append('event_country', selectedEvent.country);
    formData.append('_subject', `New Registration: ${selectedEvent.title} (${selectedEvent.country})`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@ihecf.info", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setSelectedEvent(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Registration error", error);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Upcoming Events" 
        description="Find and register for the next major recruitment event in your target region. View our schedule for education expos, summits, and school roadshows." 
        keywords="Education Expo Schedule, Recruitment Events, IHECF Fairs 2026, Education Summits"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "IHECF Upcoming Recruitment Events",
          "description": "Expos, summits, and institutional visits schedule to connect international students with top Indian universities.",
          "itemListElement": allEvents.map((e, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "EducationEvent",
              "name": e.title,
              "location": {
                "@type": "Place",
                "name": e.country,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": e.country
                }
              },
              "description": `Indian Higher Education & Career Fair in ${e.country}. Meet admission directors and register for free counseling.`
            }
          }))
        }}
      />
      {/* Header - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight">Upcoming <span className="text-secondary">Events</span></h1>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">Find and register for the next major recruitment event in your target region.</p>
          </div>
          <div className="flex bg-white/10 p-2 rounded-2xl md:rounded-[2rem] border border-white/10 backdrop-blur-md w-full lg:w-auto">
            <div className="p-2 md:p-3 text-secondary"><Search size={20}/></div>
            <input 
              type="text" 
              placeholder="Search by city or country..." 
              className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 w-full lg:w-64 text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Filters - Scrollable on Mobile */}
      <section className="py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
            <Filter size={14} /> Filter By:
          </div>
          <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all border-2 whitespace-nowrap ${
                  filter === opt 
                  ? 'bg-secondary border-secondary text-white shadow-lg' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-secondary'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid - Responsive Spacing */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event, i) => (
              <motion.div
                layout
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <span className="px-3 md:px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">{event.type}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6 md:mb-8 gap-2">
                    <span className="text-secondary font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-1.5 md:gap-2 whitespace-nowrap"><MapPin size={14}/> {event.country}</span>
                    <span className="text-gray-400 text-[10px] md:text-xs font-bold flex items-center gap-1.5 md:gap-2 whitespace-nowrap"><Calendar size={14}/> {event.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl mb-6 md:mb-8 font-bold group-hover:text-secondary transition-colors leading-tight">{event.title}</h3>
                  <div className="mt-auto pt-6 md:pt-8 border-t border-gray-50 flex justify-between items-center gap-4 md:gap-6">
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="btn-primary py-3 md:py-4 text-[10px] md:text-xs px-4 md:px-8 flex-1 rounded-xl md:rounded-2xl shadow-lg"
                    >
                      Register Now
                    </button>
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="text-primary font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-1.5 md:gap-2 hover:text-secondary transition-colors whitespace-nowrap"
                    >
                      Details <ArrowRight size={14}/>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Event Details Modal - Responsive Full Screen on Mobile */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full h-full md:h-auto md:max-w-5xl md:rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row max-h-screen md:max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 md:top-8 right-6 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-primary rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="h-64 md:h-auto md:w-5/12 relative flex-shrink-0">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <span className="text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-2 md:mb-4">{selectedEvent.type}</span>
                  <h2 className="text-2xl md:text-4xl text-white font-black tracking-tighter leading-tight">{selectedEvent.title}</h2>
                </div>
              </div>

              <div className="flex-grow p-8 md:p-16 overflow-y-auto">
                {showSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-inner">
                      <CheckCircle size={32} md:size={48} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">Success!</h3>
                    <p className="text-gray-500 text-base md:text-lg">Thank you for registering. We'll contact you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-8 md:mb-10">
                      <div className="flex items-center gap-2 md:gap-3 text-primary font-bold text-sm md:text-base">
                        <MapPin size={18} className="text-secondary" /> {selectedEvent.country}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-primary font-bold text-sm md:text-base">
                        <Calendar size={18} className="text-secondary" /> {selectedEvent.date}
                      </div>
                    </div>
                    
                    <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3"><Info size={18} md:size={22} className="text-secondary" /> Info</h4>
                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-12">
                      Join us in {selectedEvent.country} to connect with world-class Indian universities. Interaction directly with admission directors and explore career paths.
                    </p>

                    <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-1 md:space-y-2">
                          <label className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Name</label>
                          <input required name="name" type="text" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Name" />
                        </div>
                        <div className="space-y-1 md:space-y-2">
                          <label className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                          <input required name="email" type="email" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Email" />
                        </div>
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Org</label>
                        <input required name="organization" type="text" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Organization" />
                      </div>
                      <button 
                        disabled={isRegistering}
                        className="btn-secondary w-full py-4 md:py-5 mt-4 md:mt-6 text-base md:text-lg shadow-xl disabled:opacity-50"
                      >
                        {isRegistering ? 'Processing...' : 'Register Now'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
