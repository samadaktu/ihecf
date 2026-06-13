import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Sparkles, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  ChevronRight, 
  Award,
  Compass,
  Building2
} from 'lucide-react';
import SEO from '../components/SEO';

const ForStudents = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const countryDirectory = [
    { name: "Qatar", flag: "https://flagcdn.com/w40/qa.png", path: "/student/qatar" },
    { name: "Kuwait", flag: "https://flagcdn.com/w40/kw.png", path: "/student/kuwait" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png", path: "/student/ksa" },
    { name: "Gambia", flag: "https://flagcdn.com/w40/gm.png", path: "/student/gambia" },
    { name: "Senegal", flag: "https://flagcdn.com/w40/sn.png", path: "/student/senegal" },
    { name: "Ethiopia", flag: "https://flagcdn.com/w40/et.png", path: "/student/ethiopia" },
    { name: "Kenya", flag: "https://flagcdn.com/w40/ke.png", path: "/student/kenya" },
    { name: "Uganda", flag: "https://flagcdn.com/w40/ug.png", path: "/student/uganda" },
    { name: "Tanzania", flag: "https://flagcdn.com/w40/tz.png", path: "/student/tanzania" },
    { name: "Zambia", flag: "https://flagcdn.com/w40/zm.png", path: "/student/zambia" },
    { name: "Zimbabwe", flag: "https://flagcdn.com/w40/zw.png", path: "/student/zimbabwe" },
    { name: "Namibia", flag: "https://flagcdn.com/w40/na.png", path: "/student/namibia" },
    { name: "Mauritius", flag: "https://flagcdn.com/w40/mu.png", path: "/student/mauritius" },
    { name: "Fiji", flag: "https://flagcdn.com/w40/fj.png", path: "/student/fiji" },
    { name: "Cambodia", flag: "https://flagcdn.com/w40/kh.png", path: "/student/cambodia" },
    { name: "Thailand", flag: "https://flagcdn.com/w40/th.png", path: "/student/thailand" },
    { name: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png", path: "/student/uzbekistan" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png", path: "/student/kazakhstan" },
    { name: "Nepal", flag: "https://flagcdn.com/w40/np.png", path: "/student/nepal" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png", path: "/student/bangladesh" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w40/lk.png", path: "/student/sri-lanka" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SEO 
        title="For Students & Families | Global Education Fairs & Guides" 
        description="Gateway to world-class education in India, Dubai & Malaysia for international and NRI students. Access direct admission counseling, verified scholarships, and visa guidance."
        keywords="Study in India, NRI admissions, international student scholarships, IHECF student fairs, study abroad counseling"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "For Students - World-Class Education Fairs & Pathways",
          "description": "Edunial Group helps international and NRI students connect with top universities, access scholarships, and get career counseling."
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-28 md:pt-36 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_background_students_map.png" 
            alt="Global Student Map" 
            className="w-full h-full object-cover opacity-10 scale-105" 
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
            className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-6"
          >
            <motion.span 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary"
            >
              <GraduationCap size={14} /> Student & Family Portal
            </motion.span>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight"
            >
              Empowering International & <br/>
              <span className="text-secondary italic">NRI Students</span> Globally
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-medium"
            >
              From the Middle East to SAARC – Edunial Group Bridges the Gap to Indian Higher Education. Get direct university access, verified scholarship pathways, and expert career guidance.
            </motion.p>

            {/* Countries Directory Bar */}
            <motion.div 
              variants={itemVariants} 
              className="w-full pt-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-px w-8 bg-secondary/35"></span>
                <span className="text-[10px] md:text-xs text-gray-400 font-black uppercase tracking-widest">
                  Select Your Country Guide
                </span>
                <span className="h-px w-8 bg-secondary/35"></span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-3.5 py-4 px-4 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-md">
                {countryDirectory.map((c) => (
                  <Link
                    key={c.name}
                    to={c.path}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-primary rounded-xl border border-white/10 hover:border-white transition-all duration-300 hover:-translate-y-0.5 shrink-0"
                  >
                    <img 
                      src={c.flag} 
                      alt={`${c.name} flag`} 
                      className="w-6 h-4 rounded-sm object-cover border border-white/15 shadow-sm" 
                    />
                    <span className="text-xs font-bold tracking-tight whitespace-nowrap">{c.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
            Building Lifelong Pathways to <span className="text-secondary italic">Global Education</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Edunial Group, we don’t just organize events — we build lifelong pathways for NRI and international students across the Middle East, Africa, Southeast Asia, Central Asia, and SAARC to access world-class Indian higher education.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through our Indian Higher Education & Career Fairs (IHECF), Counsellors Meets, and Roadshows, we connect serious students and parents with leading Indian universities, verified scholarships, and trusted career guidance — all tailored to local needs, languages, and aspirations.
          </p>
        </div>
      </section>

      {/* Core Ecosystem Initiatives */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 bg-secondary/15 text-secondary border border-secondary/25 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Our Core Initiatives
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
              A Unified Ecosystem for Student Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Initiative 1: IHECF */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">1. IHECF Education Fairs</h3>
                <p className="text-secondary font-black text-[10px] uppercase tracking-wider mb-6">
                  Direct Access, Scholarships & Admissions
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Our flagship global education fairs designed to serve international and NRI families directly on the ground.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Meet Admission Officers & Deans face-to-face.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Explore specialized STEM, Healthcare, Management & Art courses.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Secure exclusive institutional scholarship spots on site.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Expert panels on visa processing, travel support, and life in India.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Initiative 2: Counsellors Meets */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">2. Counsellors Meets</h3>
                <p className="text-secondary font-black text-[10px] uppercase tracking-wider mb-6">
                  Empowering School Advisors & Educators
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Specialized training and networking programs designed to help counsellors guide students toward optimal educational decisions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Updates on university rankings, placements, and courses.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Clear guidance on NRI quota criteria and admission compliance.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Creating ethical counselling connections to bypass unverified agents.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Active meets hosted in Qatar, Kuwait, KSA, UAE, Tanzania, Kenya, and SAARC.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Initiative 3: Roadshows */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">3. Interactive Roadshows</h3>
                <p className="text-secondary font-black text-[10px] uppercase tracking-wider mb-6">
                  School-by-School Engagement Campaigns
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Hyper-local campaigns that bring counseling, university presentations, and application support directly to students' campuses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>School visits in major Middle East, African, and South Asian cities.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>Direct focus on Grade XII and graduating undergraduate students.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>20-30 min university presentations followed by live Q&As.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-650 font-semibold">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>One-on-one counseling corners and application briefings on campus.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Value Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 bg-secondary/15 text-secondary border border-secondary/25 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Stakeholder Support
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
            How We Support Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* For Students */}
          <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-primary mb-4 pb-3 border-b border-gray-200 flex items-center gap-2">
              <GraduationCap className="text-secondary" size={22} /> For Students
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Clear, reliable information</strong>: Direct access to verified universities.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Scholarship & fee clarity</strong>: Transparent details on costs, aid, and concessions.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Personalised counselling</strong>: One-on-one guidance on university fit and career paths.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Reduced risk</strong>: High security against agent misinformation.</span>
              </li>
            </ul>
          </div>

          {/* For Parents */}
          <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-primary mb-4 pb-3 border-b border-gray-200 flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={22} /> For Parents
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Trust & safety</strong>: Meet with academic delegates directly.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Understanding life in India</strong>: Briefings on secure campus accommodation, hostels, and cultural integration.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>ROI perspective</strong>: Clear comparisons of fees, global placements, and post-study careers.</span>
              </li>
            </ul>
          </div>

          {/* For Universities */}
          <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-primary mb-4 pb-3 border-b border-gray-200 flex items-center gap-2">
              <Building2 className="text-secondary" size={22} /> For Universities
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Focused pipelines</strong>: Direct access to qualified, high-intent international student pools.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>High-quality leads</strong>: Structured data based on course interest, budgets, and scholarship requirements.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                <span><strong>Market presence</strong>: Build regional authority and active school collaborations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Register Call to Action Banner */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl text-center flex flex-col items-center">
          <div className="absolute inset-0 z-0 bg-white/5 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 py-1 px-3 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-black uppercase tracking-widest">
              Join the Expo
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready to Secure Your Academic Future?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Pre-registration is completely free and ensures you get slot priority for 1:1 university counselling, scholarship assessments, and entry passes.
            </p>
            <div className="pt-4">
              <Link to="/events" className="btn-secondary px-10 py-4 text-base font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
                Pre-Register Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
