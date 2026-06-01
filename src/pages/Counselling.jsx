import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Globe, 
  CheckCircle, 
  Users, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Calendar, 
  FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Counselling = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const schoolOfferings = [
    {
      title: "Turnkey CBSE Compliance",
      desc: "Fully satisfy the NEP 2020 mandate for structured career interventions, portfolio building, and psychological/aptitude readiness for Grades 9–12."
    },
    {
      title: "Direct University Access",
      desc: "We bring top-tier, accredited international and Indian universities directly to your students, bypassing geographical barriers."
    },
    {
      title: "Streamlined Academic Planning",
      desc: "Interactive workshops that help students align their senior secondary subject choices with specific international university prerequisites and future career trajectories."
    },
    {
      title: "Parental Engagement Forums",
      desc: "Dedicated tracks to help parents understand evolving global university admissions, scholarship landscapes, and modern career vertical opportunities."
    }
  ];

  const universityBenefits = [
    {
      title: "Highly Targeted Recruitment",
      desc: "Skip broad-spectrum marketing. Meet face-to-face with qualified senior secondary students who are already tracking toward international undergraduate programs."
    },
    {
      title: "Pre-Vetted Student Profiles",
      desc: "Engage with students who have been guided through our structured career counselling framework, ensuring high alignment with your program offerings."
    },
    {
      title: "Institutional Credibility",
      desc: "Position your university as a foundational educator and thought leader inside elite international CBSE schools."
    },
    {
      title: "End-to-End Market Access",
      desc: "Benefit from Edunial Group’s deeply rooted network and flawless logistical execution across international school networks."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="CBSE Career Counselling & NEP 2020 Initiatives" 
        description="Aligning NEP 2020 Frameworks with Global Higher Education Opportunities. Structured career counselling, aptitude testing, and academic planning for CBSE schools abroad." 
        keywords="CBSE Career Counselling, NEP 2020, International CBSE Schools, Student Admissions India, Career Guidance Abroad"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CBSE Mandatory Career Counselling & Higher Education Initiatives",
          "alternateName": "CBSE Career Counselling & NEP 2020 Alignment",
          "description": "Executing high-impact Higher Education & Career Counselling Sessions specifically designed for CBSE schools operating abroad in strict compliance with NEP 2020 directives.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "IHECF"
          },
          "serviceType": "Academic Counseling & Recruitment Tour"
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-36 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src="/student_interaction_fair.png" alt="Counselling Header" className="w-full h-full object-cover opacity-15 scale-105 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/services" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 md:mb-12 hover:gap-6 transition-all">
            <ArrowLeft size={16} /> All Services
          </Link>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary mb-4 md:mb-6 border border-white/10">
              <Sparkles size={12} /> NEP 2020 & CBSE Compliant
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-tight"
            >
              Empowering Global Futures: <span className="text-secondary block">CBSE Mandatory Career Counselling & Higher Education Initiatives</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-300 font-bold leading-relaxed max-w-3xl mb-12"
            >
              Aligning NEP 2020 Frameworks with Global Higher Education Opportunities
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center">
                <div className="text-xl md:text-3xl font-black text-secondary mb-1">Grades 9-12</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">Target Cohorts</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center">
                <div className="text-xl md:text-3xl font-black text-secondary mb-1">Scientific</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">Aptitude Testing</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center">
                <div className="text-xl md:text-3xl font-black text-secondary mb-1">100% Turnkey</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">Compliance</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview / Mandate Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center text-left lg:text-center">
            <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-[2rem] flex items-center justify-center mb-4">
              <Globe size={40} />
            </div>
            <h3 className="text-2xl font-black text-primary uppercase tracking-wider">The Global Bridge</h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Edunial Group (IHECF)</p>
          </div>
          <div className="lg:col-span-8 space-y-6 text-gray-500 text-base md:text-lg leading-relaxed">
            <p>
              The modern educational landscape demands more than academic excellence; it requires structured, forward-looking pathways that prepare students for a rapidly evolving global economy.
            </p>
            <p>
              In strict alignment with India’s National Education Policy (NEP) 2020 and the Central Board of Secondary Education (CBSE) mandates, secondary and senior secondary students must now have access to structured career counselling, scientific aptitude testing, and future-ready academic planning.
            </p>
            <p className="font-bold text-primary border-l-4 border-secondary pl-4 py-1 italic">
              Edunial Group (IHECF) serves as the premier international bridge—executing high-impact Higher Education & Career Counselling Sessions specifically designed for CBSE schools operating abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences: Dual Columns */}
      <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Schools Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-150/40 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                For CBSE Schools Abroad: <span className="text-secondary italic">Seamless Compliance</span>, Empowered Students
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                Operating a CBSE institution internationally comes with a unique set of challenges: keeping pace with domestic board mandates while simultaneously preparing a diverse student body for global higher education. Edunial Group steps in as your institutional partner to fully satisfy CBSE and NEP 2020 career guidance directives through our IHECF services.
              </p>

              <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-4 border-b border-gray-200/60 pb-2">
                What We Bring to Your Campus
              </h3>
              <ul className="space-y-4 mb-8">
                {schoolOfferings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 leading-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link 
                to="/contact?subject=School%20Collaboration" 
                className="w-full px-6 py-4 bg-primary text-white hover:bg-secondary transition-all rounded-xl md:rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-center"
              >
                <span className="text-center">Schedule a Consult to Host a Session</span>
                <ArrowRight size={16} className="shrink-0" />
              </Link>
            </div>
          </motion.div>

          {/* Universities Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 flex flex-col justify-between hover:shadow-2xl transition-all relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div>
              <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <Building2 size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                For Universities: <span className="text-secondary italic">Direct Access</span> to Prime International Talent
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                CBSE schools abroad represent an incredibly lucrative, highly ambitious, and socio-economically affluent student demographic. These students are native English speakers, possess rigorous analytical training, and are actively seeking global higher education pathways. Through the IHECF platform organized by Edunial Group, your university gains exclusive, targeted access to these high-caliber applicants right on their school campuses.
              </p>

              <h3 className="text-xs uppercase tracking-widest text-secondary font-bold mb-4 border-b border-white/10 pb-2">
                Why Partner with Edunial Group (IHECF)?
              </h3>
              <ul className="space-y-4 mb-8">
                {universityBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 relative z-10">
              <Link 
                to="/contact?subject=University%20Partnership" 
                className="w-full px-6 py-4 bg-secondary text-white hover:bg-white hover:text-primary transition-all rounded-xl md:rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-center"
              >
                <span className="text-center">Request an Exhibitor & Partner Brochure</span>
                <ArrowRight size={16} className="shrink-0" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* The Edunial Advantage Section */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-slate-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-4xl">
            <div className="w-12 h-12 bg-white/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              The Edunial Group Advantage: <span className="text-secondary">The Catalyst for Global Education</span>
            </h2>
            <div className="text-base md:text-lg text-gray-300 space-y-6 leading-relaxed">
              <p>
                As a global leader in educational consultancy and institutional networking, Edunial Group anchors the IHECF initiative. We don’t just organize events; we build sustainable educational ecosystems.
              </p>
              <p className="font-bold text-white border-l-4 border-secondary pl-4 py-1">
                Our Core Mission: To operationalize the visionary framework of NEP 2020 on an international scale. By bringing together school leaders, eager students, visionary parents, and global university admissions directors, we transform mandatory compliance into a life-changing launchpad for the next generation of global leaders.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA section (Let's Build the Future Together) */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Let's Build the Future Together</h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              Whether you are a CBSE school leader looking to elevate your campus’s career counselling ecosystem or a university representative seeking your next cohort of top-tier international students, IHECF is your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* CTA 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm flex flex-col justify-between items-start">
              <div>
                <span className="px-3 py-1 bg-secondary/15 text-secondary border border-secondary/20 rounded-full text-[9px] font-black uppercase tracking-wider mb-4 inline-block">
                  International Schools
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">Host a Session on Campus</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Set up structured career guidance seminars and scientific aptitude testing to align with CBSE requirements.
                </p>
              </div>
              <Link 
                to="/contact?subject=School%20Collaboration" 
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider mt-2"
              >
                <span>Schedule a Consult to Host a Session</span>
                <ArrowRight size={14} className="shrink-0" />
              </Link>
            </div>

            {/* CTA 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/60 shadow-sm flex flex-col justify-between items-start">
              <div>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/15 rounded-full text-[9px] font-black uppercase tracking-wider mb-4 inline-block">
                  Universities & Colleges
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">Exhibitor Opportunities</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Access premium international CBSE schools and present directly to student cohorts and parents.
                </p>
              </div>
              <Link 
                to="/contact?subject=University%20Partnership" 
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-secondary hover:text-primary transition-colors uppercase tracking-wider mt-2"
              >
                <span>Request an Exhibitor & Partner Brochure</span>
                <ArrowRight size={14} className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counselling;
