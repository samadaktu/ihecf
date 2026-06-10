import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Sparkles, 
  Building2, 
  Target, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';

const ForInstitutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const stats = [
    { label: 'Exhibiting Schools', value: '200+', icon: <GraduationCap size={20} /> },
    { label: 'Global Markets', value: '20+', icon: <Globe size={20} /> },
    { label: 'Recruitment Success', value: '98%', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEO 
        title="For Institutions | Global Student Recruitment & Fairs" 
        description="Partner with Edunial Group (IHECF) to expand your university's international enrollments. Connect with students, school counsellors, and channel partners globally."
        keywords="University Student Recruitment, Study in India Fairs, International Education Fairs, Edunial Group, IHECF Exhibitors"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "For Institutions - Global Student Recruitment Solutions",
          "description": "Comprehensive international student recruitment services, educational fairs, school tours, and channel partnerships for higher education institutions."
        }}
      />

      {/* Hero Section - Professional & Responsive */}
      <section className="relative bg-primary text-white pt-28 md:pt-36 pb-20 md:pb-28 px-6 overflow-hidden">
        {/* Background Image / Pattern overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_background_students_map.png" 
            alt="Global Student Map" 
            className="w-full h-full object-cover opacity-10 scale-105 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary" />
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.span 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary"
              >
                <Building2 size={14} /> Global Expansion Hub
              </motion.span>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight"
              >
                Pioneer Your <span className="text-secondary italic">International</span> Recruitment
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Connect directly with international student hubs. Edunial Group (IHECF) provides high-impact education fairs, direct school visits, counsellor meets, and strategic market entry services to help universities achieve global enrollment success.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Link 
                  to="/contact" 
                  className="btn-secondary px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto text-center"
                >
                  Become a Partner
                </Link>
                <a 
                  href="#services-grid" 
                  className="text-gray-300 hover:text-white font-bold text-sm tracking-wider uppercase flex items-center gap-1.5 transition-colors py-2"
                >
                  Explore Services <ChevronRight size={16} />
                </a>
              </motion.div>
            </div>

            {/* Right Column: Statistics Grid Card */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                variants={itemVariants}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-white text-lg font-black tracking-tight border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
                  <Target size={18} className="text-secondary" /> Why Universities Partner With Us
                </h3>

                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 bg-secondary/5 text-secondary p-4 rounded-2xl text-xs font-bold leading-relaxed border border-secondary/10">
                  <Sparkles size={18} className="shrink-0" />
                  <span>Customized promotional strategies tailored to your institution's specific targets.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Strategic Excellence for International Expansion copied section) */}
      <section id="services-grid" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 text-primary">
              Strategic <span className="text-secondary italic">Excellence</span> for International Expansion
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Join hands with Edunial Groups (IHECF) to access a complete ecosystem of services tailored to help Indian universities and colleges attract high-quality international students and achieve ambitious global enrollment targets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Fairs Card */}
          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-7 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                <GraduationCap size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary leading-tight">Indian Higher Education & Career Fairs</h3>
              <span className="text-[9px] md:text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-3 py-1 rounded-full font-black uppercase tracking-wider mb-6 inline-block">
                Flagship Recruitment Fairs
              </span>
              <p className="text-gray-500 text-sm md:text-lg mb-6 leading-relaxed">
                Edunial Groups Indian Higher Education & Career Fair (IHECF) is a leading platform dedicated to helping universities expand their global footprint. We organize high-impact fairs that connect premier Indian institutions with qualified international students from key source countries.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Direct face-to-face recruitment of qualified international students",
                  "On-the-spot admissions, eligibility evaluations, and conversions",
                  "Unparalleled branding and exposure in high-potential source markets",
                  "Strategic connections with local schools, partners, and parents"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm md:text-lg text-gray-600">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm md:text-lg italic leading-relaxed border-t border-secondary/10 pt-4">
                Our strategic fairs enable institutions to significantly increase international enrollment, strengthen brand presence, and build long-term student pipelines.
              </p>
            </div>
            <div className="mt-8 z-10">
              <Link to="/service/education-fairs" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:text-secondary transition-colors">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Counsellors Meet Card */}
          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-5 bg-primary rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/25 to-transparent z-0" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 text-secondary rounded-full flex items-center justify-center mb-6">
                <Users size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">School Counsellors Meet</h3>
              <span className="text-[9px] md:text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-3 py-1 rounded-full font-black uppercase tracking-wider mb-6 inline-block">
                Influencer Engagement
              </span>
              <p className="text-gray-300 text-sm md:text-lg mb-6 leading-relaxed">
                Connect directly with top school counsellors and education advisors who influence thousands of ambitious students seeking overseas education. This exclusive event empowers universities and colleges to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Build strong, long-term recruitment pipelines through schools",
                  "Enhance brand visibility among key academic decision-makers",
                  "Generate high-quality leads and direct applications",
                  "Establish strategic partnerships that deliver measurable results"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm md:text-lg text-gray-300">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-sm md:text-lg italic leading-relaxed border-t border-white/10 pt-4">
                Position your institution in front of the right influencers and accelerate your global student intake with high-impact, outcome-driven networking.
              </p>
            </div>
          </motion.div>

          {/* School Visits Card */}
          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-5 bg-accent-light rounded-[2.5rem] p-8 md:p-12 border border-secondary/15 group flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white text-secondary rounded-full flex items-center justify-center shadow-sm mb-6">
                <Globe size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight">School Visits</h3>
              <span className="text-[9px] md:text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-3 py-1 rounded-full font-black uppercase tracking-wider mb-6 inline-block">
                Africa | ME | SEA | CIS | SAARC
              </span>
              <p className="text-gray-600 text-sm md:text-lg mb-6 leading-relaxed">
                Position your institution at the forefront of global student recruitment. Edunial Groups curates exclusive, high-caliber school visits across key international hubs connecting Indian universities with exceptional talent.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Significant growth in high-quality international enrollments",
                  "Elevated institutional brand presence among premium student segments",
                  "Direct access to strategic decision-makers and qualified prospects",
                  "Sustainable recruitment pipelines that drive long-term success"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm md:text-lg text-gray-600">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm md:text-lg italic leading-relaxed border-t border-secondary/10 pt-4">
                Elevate your university’s global standing and secure a competitive advantage in international education through targeted, results-oriented market penetration.
              </p>
            </div>
          </motion.div>

          {/* Consultants Meet Card */}
          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-7 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                <Users size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary leading-tight">Consultants Meet</h3>
              <span className="text-[9px] md:text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-3 py-1 rounded-full font-black uppercase tracking-wider mb-6 inline-block">
                Channel Partnerships
              </span>
              <p className="text-gray-500 text-sm md:text-lg mb-6 leading-relaxed">
                An exclusive gathering of top education consultants and recruitment partners from Africa, Middle East, Southeast Asia, CIS, and SAARC countries. This premier platform offers institutions unparalleled access to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Elite international recruitment networks and agencies",
                  "High-caliber student pipelines from emerging global markets",
                  "Strategic alliances driving sustained enrollment growth",
                  "Enhanced brand authority and trust on the world stage"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm md:text-lg text-gray-600">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm md:text-lg italic leading-relaxed border-t border-secondary/10 pt-4">
                Elevate your university’s global presence, forge transformative partnerships, and unlock exceptional international student enrollment opportunities at the highest level.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Market Entry Solutions Card */}
          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-12 bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-12 items-center overflow-hidden group relative"
          >
            <div className="flex-1 z-10">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary leading-tight">Market Entry Solutions</h3>
              <span className="text-[9px] md:text-[10px] bg-secondary/15 text-secondary border border-secondary/25 px-3 py-1 rounded-full font-black uppercase tracking-wider mb-6 inline-block">
                Strategic Expansion
              </span>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6">
                Unlock new frontiers in international student recruitment. We empower Indian universities and colleges with strategic market entry solutions to successfully penetrate high-potential countries, establish a strong presence, and rapidly scale global enrollments.
              </p>
              <Link to="/contact" className="text-secondary font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                Get Strategy <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100 shadow-inner z-10">
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                From in-depth market intelligence and localized branding to on-ground activation and sustainable recruitment channels — we help you dominate new markets with confidence and deliver measurable growth.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent-light/30 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 z-0" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="bg-primary text-white py-16 md:py-24 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-block py-1 px-4 bg-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary border border-secondary/20">
            Participation Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Reserve Your Institution's Booth Space
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to scale your global enrollments? Secure your spot in our upcoming fairs across GCC, Africa, Southeast Asia, CIS, and SAARC.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="btn-secondary px-8 py-4 text-base font-bold flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto justify-center"
            >
              Inquire / Register Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForInstitutions;
