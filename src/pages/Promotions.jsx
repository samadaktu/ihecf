import { motion } from 'framer-motion';
import { Megaphone, Globe, Video, MapPin, BarChart, Users, Sparkles, ArrowRight, Share2, Printer, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Promotions = () => {
  const marketingChannels = [
    { 
      title: "Digital Ecosystem", 
      icon: <Globe />, 
      desc: "Comprehensive web advertising, social media campaigns, and targeted email marketing reaching 100k+ students.",
      color: "bg-blue-500"
    },
    { 
      title: "Mass Media", 
      icon: <Tv />, 
      desc: "Strategically placed ads in national newspapers, FM radio spots, and TV show appearances to build massive local awareness.",
      color: "bg-purple-500"
    },
    { 
      title: "Outdoor Impact", 
      icon: <MapPin />, 
      desc: "Banner ads, flyers, and posters deployed across schools, university campuses, and high-traffic city avenues.",
      color: "bg-secondary"
    },
    { 
      title: "Data Analytics", 
      icon: <BarChart />, 
      desc: "Analyzing attendee demographics (age, sex, market) and psychographics to optimize campaign performance.",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="How We Promote" 
        description="Discover our diverse marketing strategies and channels used to spread the word about IHECF fairs. We ensure maximum public engagement and attendance." 
        keywords="Education Fair Promotion, Marketing Strategy, Student Recruitment Marketing, IHECF Fairs"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('/hero_background_students_map.png')] bg-cover opacity-10 grayscale scale-110" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary mb-4 md:mb-6 border border-white/10">
              <Megaphone size={12} /> Strategic Marketing
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">
              Maximum <span className="text-secondary italic">Visibility</span>, Guaranteed Results
            </h1>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Our diverse marketing strategies and multi-channel approach ensure that your institution is presented to the most qualified and motivated students worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promotion Policy Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">How We <span className="text-secondary italic">Engage</span></h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              We have a policy of advertising Indian Higher Education & Career fairs to all year groups. We encourage students to attend fairs to gain general information about institutions that will help them make future decisions.
            </p>
            <div className="space-y-4">
              {[
                "Promotion starts from the beginning of the academic year",
                "Integration with local schools and university campuses",
                "Focus on both demographics and psychographics",
                "High ROI outdoor marketing campaigns"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-bold text-sm md:text-base">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles size={12} className="text-secondary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl relative group">
              <img src="/student_interaction_fair.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="IHECF Promotion" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Omni-channel Reach</h3>
                <p className="text-white/70 text-sm">We combine digital precision with traditional mass media for total market coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels Grid */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">Our Channels</span>
            <h2 className="text-3xl md:text-6xl text-primary font-black tracking-tighter">Diverse Marketing <span className="text-secondary italic">Mix</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketingChannels.map((channel, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${channel.color} text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{channel.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{channel.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-secondary/10 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Visual Storytelling</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                We create high-impact marketing videos using real footage from past events. This helps students visualize their future and build excitement for upcoming fairs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
                  <Share2 size={14} className="text-secondary" /> Social Blast
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
                  <Video size={14} className="text-secondary" /> Website Feature
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
                  <Printer size={14} className="text-secondary" /> Direct Mail
                </div>
              </div>
            </div>
            <div className="aspect-video bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex items-center justify-center group overflow-hidden">
              <img src="/student_interaction_fair.png" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" alt="Promo Video" />
              <div className="absolute w-16 h-16 md:w-20 md:h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Video size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-secondary py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
           <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-white">Want to see our full marketing reach?</h2>
           <Link to="/contact" className="btn-primary px-10 py-4 text-base rounded-full shadow-2xl w-full md:w-auto justify-center">
             Get Media Kit <ArrowRight size={20} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
