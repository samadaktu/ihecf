import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2 } from 'lucide-react';

const CountryDetail = () => {
  const { slug } = useParams();
  const countryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const getImage = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('ksa') || lower.includes('kuwait') || lower.includes('oman') || lower.includes('sharjah')) return '/ksa_education_event.png';
    if (lower.includes('kenya') || lower.includes('ethiopia') || lower.includes('tanzania') || lower.includes('ghana')) return '/kenya_education_event.png';
    if (lower.includes('vietnam') || lower.includes('thailand') || lower.includes('cambodia')) return '/vietnam_education_event.png';
    return '/student_interaction_fair.png';
  };

  const countryImage = getImage(countryName);

  const data = {
    overview: `The higher education landscape in ${countryName} is rapidly evolving, with a growing number of students seeking international qualifications. Indian universities are increasingly becoming a preferred choice.`,
    demographics: "70% Undergraduate seekers, 30% Postgraduate seekers. Top interests: STEM, Business, and Medicine.",
    whyTarget: `High volume of qualified applicants, increasing government support for international study.`,
    stats: [
      { label: 'Market Size', value: '5k+', icon: <Users /> },
      { label: 'Growth YoY', value: '25%', icon: <Globe /> },
      { label: 'Institutions', value: '150+', icon: <Building2 /> }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src={countryImage} alt={countryName} className="w-full h-full object-cover opacity-20 scale-110 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 md:mb-12 hover:gap-6 transition-all">
            <ArrowLeft size={14} md:size={16} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary mb-4 md:mb-6 border border-white/10">
                <Target size={12} /> Target Market
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter mb-6 md:mb-8 leading-tight md:leading-[0.8]">{countryName}</h1>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl">{data.overview}</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] w-full md:w-80 shadow-2xl">
               <div className="space-y-6 md:space-y-8">
                 {data.stats.map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 md:gap-6 group">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                        {stat.icon}
                     </div>
                     <div>
                        <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Content - Responsive Bento Layout */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-8 bg-gray-50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 md:mb-12 text-primary leading-tight">Strategic <span className="text-secondary italic">Insights</span></h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm flex-shrink-0 flex items-center justify-center text-secondary">
                  <Sparkles size={20} md:size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary">Demographics & Trends</h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed">{data.demographics}</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm flex-shrink-0 flex items-center justify-center text-secondary">
                  <CheckCircle size={20} md:size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-primary">Target Value</h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed">{data.whyTarget}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/30 to-transparent opacity-50" />
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">Recruit in <span className="text-secondary">{countryName}?</span></h3>
              <p className="text-gray-400 mb-10 md:mb-12 text-sm md:text-lg">Join upcoming events and build your student pipeline today.</p>
              
              <div className="mt-auto space-y-3 md:space-y-4">
                <Link to="/events" className="btn-secondary w-full py-4 md:py-5 text-sm md:text-base flex justify-center items-center gap-2 md:gap-3">
                  View Events <ArrowRight size={18} md:size={20} />
                </Link>
                <Link to="/contact" className="w-full py-4 md:py-5 border border-white/20 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest flex justify-center items-center hover:bg-white/10 transition-all">
                  Consult Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Breadcrumbs - Responsive Layout */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
           <div className="flex items-center gap-3 md:gap-4 text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">
             <Link to="/" className="hover:text-secondary">Global</Link>
             <span>/</span>
             <span className="text-primary">{countryName}</span>
           </div>
           <div className="flex flex-wrap justify-center gap-4 md:gap-6">
             <Link to="/gallery" className="text-[10px] md:text-sm font-black text-primary hover:text-secondary uppercase tracking-widest border-b-2 border-secondary pb-1">Gallery</Link>
             <Link to="/services" className="text-[10px] md:text-sm font-black text-primary hover:text-secondary uppercase tracking-widest border-b-2 border-secondary pb-1">Services</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
