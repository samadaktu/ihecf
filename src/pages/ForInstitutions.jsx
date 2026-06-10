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
  ChevronRight,
  Megaphone
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

      {/* How Edunial Group Promotes IHECF Section */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary mb-4">
              <Megaphone size={14} /> Ecosystem Marketing
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-primary mb-6 leading-tight">
              How Edunial Group Promotes IHECF <br />
              <span className="text-secondary italic">for Maximum Footfall & ROI</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              At Edunial Group, we don’t just organize Indian Higher Education & Career Fairs (IHECF) — we build high-conversion recruitment ecosystems that bring together serious students, supportive parents, trusted schools, and ambitious Indian universities across Middle East, Africa, Southeast Asia, Central Asia, and SAARC.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Hyper-Local, Multi-Channel Promotion */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-150/70 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">1. Hyper-Local, Multi-Channel Promotion</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We use a blended, hyper-local approach to reach students and parents where they are:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">School & College Partnerships</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Work directly with top Indian and international schools and counselling centres to pre-register Grade XII/undergraduate students and conduct career workshops.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Community & Diaspora Networks</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Activate regional Indian community associations, student groups, and parent networks through WhatsApp groups and localized forums.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Local Language & Cultural Tailoring</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Adapt campaign creatives to local languages (Arabic, French, English, Hindi, Urdu) and prioritize regional courses (engineering, medicine, nursing, etc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Digital Marketing That Drives Intent */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-150/70 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">2. Digital Marketing Built for Intent</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our digital promotion focuses on active conversion, driving high-intent registrants:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Targeted Social Media Campaigns</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Geo-targeted Facebook, Instagram, TikTok, and LinkedIn ads pointing to specific city-level student clusters with real student/alumni reels.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Search & Performance Marketing</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    SEO-optimized target pages and Google Ads targeting queries like "study in India", "scholarships for international students", "MBBS/B.Tech in India".
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Email & SMS Automation</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Personalized follow-ups based on course interest, pre-event reminders, and post-event automated nudges to build continuity.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: On-Ground Activation */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-150/70 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">3. On-Ground Activation & Trust</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We build local urgency and credibility months before the fair doors open:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">School Visits & Counselor Briefings</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Our team meets with high school counselors to share partner university profiles and motivate students to attend the fair alongside their parents.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Career Workshops & Seminars</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Hosting informative regional seminars on topic-specific areas: fees, ROI, safety, admissions, and student life in India.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Local Media & PR Campaigns</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Press releases in national newspapers, online portals, and TV/radio spots featuring interviews with Edunial leaders and past success metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Data-Driven, ROI-Oriented Design */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-150/70 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">4. Data-Driven, ROI-Oriented Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Every IHECF event is optimized for measurable conversion rates for partnering institutions:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Pre-Qualified, Consent-Based Leads</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Get full structured lists (Name, Contact, course preference, budget, scholarship requirements) with explicit consent for admissions follow-up.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Smart Booth & Presentation Design</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Enjoy branded, spacious counseling booths, dedicated presentation slots, and interactive Q&A spaces to build family trust.
                  </p>
                </div>
                <div className="bg-gray-555 p-4 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-primary text-sm mb-1">Post-Fair Support & Follow-Up</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Receive lead reports within 7 days, exclusive IHECF scholarship track listings, and post-event follow-up virtual webinars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary mb-4">
              <ShieldCheck size={14} /> Proven Results
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-primary mb-4 leading-tight">
              Where IHECF Has Delivered <span className="text-secondary">Real Results</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Across multiple global regions, our educational exhibitions have consistently produced high-footfall and high-conversion outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Middle East */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-black text-secondary tracking-widest uppercase mb-2 block">Region Highlight</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Middle East</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 uppercase tracking-wider font-bold">
                  Qatar, Kuwait, Saudi Arabia, UAE
                </p>
                <ul className="space-y-4 text-sm text-gray-650 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>IHECF Qatar & Kuwait School Tours</strong>: Targeted 1,000–1,500 Grade XII students per country across 8 schools, delivering hundreds of qualified leads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>IHECF Saudi Arabia (Riyadh, Dammam, Al-Jubail, Jeddah)</strong>: Multi-city fair with thousands of attendees, reporting high conversions for STEM, Healthcare, BBA, and nursing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Africa */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-black text-secondary tracking-widest uppercase mb-2 block">Region Highlight</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Africa</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 uppercase tracking-wider font-bold">
                  Gambia, Senegal, Nigeria, Tanzania, Kenya
                </p>
                <ul className="space-y-4 text-sm text-gray-650 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>West & East Africa Fairs</strong>: Strong turnout of students seeking affordable, English-medium programs with scholarships.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>Institutional Network</strong>: Allowed partnering universities to establish long-term agent relationships and bilateral MoUs.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Southeast Asia & SAARC */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-black text-secondary tracking-widest uppercase mb-2 block">Region Highlight</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Southeast Asia & SAARC</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 uppercase tracking-wider font-bold">
                  Bangladesh, Nepal, Sri Lanka, Myanmar, Malaysia
                </p>
                <ul className="space-y-4 text-sm text-gray-650 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>Cross-Border Engagement</strong>: Intense response from students seeking cost-effective, globally recognized Indian degrees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>STEM & Pharmacy Focus</strong>: Built sustainable enrollment pipelines for engineering, nursing, and business management.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Central Asia */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-black text-secondary tracking-widest uppercase mb-2 block">Region Highlight</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Central Asia</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 uppercase tracking-wider font-bold">
                  Kazakhstan, Uzbekistan, and beyond
                </p>
                <ul className="space-y-4 text-sm text-gray-650 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>Emerging Market Outreach</strong>: Strong focus on students looking for affordable engineering, IT, and medical degrees in India.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span><strong>First-Mover conversions</strong>: Establishing early pipelines and building brand presence in these highly receptive markets.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Success Metrics Summary Cards */}
            <div className="lg:col-span-2 bg-primary text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div>
                <h3 className="text-2xl font-black mb-3">Overall Performance Yield</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Across all global networks, Edunial Group's IHECF series is designed to satisfy the core needs of student recruitment:
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-3xl font-black text-secondary">High</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Footfall Density</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-secondary">Quality</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Pre-Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-secondary">98%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Measurable ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Admission Pipeline CTA Section */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 bg-white/5 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Admission Pipeline Accelerator
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Build Your Global Admission Pipeline with IHECF
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-3xl">
              If your university is ready to access high-intent students across Middle East, Africa, Southeast Asia, Central Asia, and SAARC, generate qualified, conversion-ready leads, and build long-term international partnerships with schools, agents, and students — then IHECF by Edunial Group is your strategic gateway to global growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary px-8 py-4 text-base font-bold shadow-xl text-center">
                Partner With Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default ForInstitutions;
