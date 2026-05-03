import { motion } from 'framer-motion';
import { Target, Eye, Clock, Award, ShieldCheck, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    { title: "Excellence", icon: <Award />, desc: "Striving for the highest standards in education recruitment." },
    { title: "Integrity", icon: <ShieldCheck />, desc: "Transparent and ethical practices across all our operations." },
    { title: "Innovation", icon: <Zap />, desc: "Continuously evolving our strategies to meet global demands." }
  ];

  const timeline = [
    { year: "2012", title: "Inception", desc: "Started as a small consultancy focused on Indian student mobility." },
    { year: "2015", title: "Middle East Expansion", desc: "Launched our first major fairs in KSA and Oman." },
    { year: "2018", title: "African Footprint", desc: "Established strong ties with schools in Kenya and Ethiopia." },
    { year: "2023", title: "Global Network", desc: "Connecting 30,000+ students across 20+ countries annually." }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn more about IHECF, a part of the Edunial Group, dedicated to creating meaningful connections between world-class Indian institutions and ambitious international students." 
        keywords="About IHECF, Edunial Group, Student Recruitment Mission, Global Education Vision"
      />
      {/* Hero - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl mb-6 font-black tracking-tighter leading-tight"
          >
            Pioneering the Path to <span className="text-secondary">Global Education</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Part of the Edunial Group, IHECF is dedicated to creating meaningful connections between world-class Indian institutions and ambitious international students.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Responsive Padding and Rounded Corners */}
      <section className="py-16 md:py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <Target size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 font-bold">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-base md:text-lg">
            To provide a transparent, accessible, and high-impact platform where Indian universities can showcase their excellence and students can discover their future academic homes without boundaries.
          </p>
        </div>
        <div className="bg-primary text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <Eye size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 font-bold">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            To become the undisputed global leader in international student recruitment for the Indian higher education sector, known for our quality, reach, and commitment to student success.
          </p>
        </div>
      </section>

      {/* Timeline - Adjusted Spacing for Mobile */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-20 font-bold">Our Journey Since 2012</h2>
          <div className="relative border-l-2 border-secondary/30 pl-8 md:pl-12 ml-2 md:ml-4 space-y-12 md:space-y-16">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 md:w-6 md:h-6 bg-secondary rounded-full border-4 border-white shadow-lg" />
                <div className="text-secondary font-black text-2xl md:text-3xl mb-1">{item.year}</div>
                <h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-lg max-w-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Responsive Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 font-bold">The Values That Drive Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="text-center p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-light text-primary rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-inner">
                {v.icon}
              </div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4 font-bold">{v.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
