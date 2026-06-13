import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, GraduationCap, Sparkles, Clock, BookOpen, Award, Building2 } from 'lucide-react';
import SEO from '../components/SEO';

const UzbekistanStudent = () => {
  const studyInIndiaReasons = [
    { title: "World-Class Programs", desc: "Access high-quality degrees in Engineering, Medicine, Management, IT, Sciences, and Design leading to global careers." },
    { title: "High-Value Affordability", desc: "Tuition fees and living costs in India are significantly lower than Western options while keeping academic quality very strong." },
    { title: "NEP 2020 Learning", desc: "Benefit from flexible, multidisciplinary programs, multiple entry/exit paths, and skill-based curricula." },
    { title: "Strong Placements", desc: "Deep industry connections and partnerships offering internships and career starts in multinational corporations." },
    { title: "Global Recognition", desc: "Degrees widely recognized and valued by employers in Central Asia, the GCC, Europe, and Russia." },
    { title: "Growing Expat Community", desc: "A rapidly growing community of Uzbek students in India makes adaptation smooth and supportive." }
  ];

  const studyInDubaiMalaysiaReasons = [
    { title: "Indian Curricula in Global Hubs", desc: "Study Indian university curriculums directly at international campuses in Dubai and Malaysia." },
    { title: "International Exposure", desc: "Gain massive exposure in the GCC and Southeast Asia business hubs with lower costs than Western countries." },
    { title: "Strong Career Markets", desc: "Access robust job and internship markets in technology, finance, business, logistics, and tourism." },
    { title: "Cultural & Travel Convenience", desc: "Shorter travel distances, active Central Asian student groups, and comfortable cultural familiarity." }
  ];

  const whatYouGain = [
    { title: "Direct Interaction", desc: "Meet university delegates face-to-face to discuss course options, fees, entry requirements, and scholarships." },
    { title: "Personalised Counselling", desc: "One-on-one sessions with experts to align courses with your interests, budget, and career goals." },
    { title: "Scholarship Guidance", desc: "Discover institutional merit-based scholarships and government financial aid options." },
    { title: "Clear Pathway Maps", desc: "Understand timelines, entrance exams, visa processing steps, and career progress mapping." }
  ];

  const parentBenefits = [
    "Compare study paths in India, Dubai, and Malaysia side-by-side with clear cost breakdowns.",
    "Speak directly with experienced counsellors regarding admission requirements and financial planning.",
    "Learn about secure campus accommodations, dedicated hostel facilities, and international student safety.",
    "Support your child's decision with confidence and peace of mind."
  ];

  const universityBenefits = [
    "Recruit high-intent students from Tashkent, Samarkand, Bukhara, and across Uzbekistan.",
    "Promote flagship programs and scholarships directly to motivated applicants and parents.",
    "Build long-term collaborations with regional schools, counselors, and local agencies.",
    "Expand institutional brand authority in the high-potential Central Asian market."
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Student Guide: IHECF Uzbekistan 2026-27 | Study in India Dubai Malaysia" 
        description="Discover global higher education options in India, Dubai & Malaysia. Meet top universities in Uzbekistan. Pre-register for free admissions counseling & scholarships."
        keywords="Study in India Uzbekistan, IHECF Uzbekistan Student Fair, Education Fair Tashkent, Indian Universities Central Asia"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "Student Guide: IHECF Uzbekistan 2026-27 | Study in India Dubai Malaysia",
          "description": "Gateway to world-class education in India, Dubai, and Malaysia for students and families from Uzbekistan. Free pre-registration.",
          "startDate": "2026-11-01T09:00:00+05:00",
          "endDate": "2026-11-30T17:00:00+05:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Tashkent, Uzbekistan",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tashkent",
              "addressCountry": "Uzbekistan"
            }
          },
          "offers": {
            "@type": "Offer",
            "url": "https://ihecf.info/student/uzbekistan",
            "price": "0",
            "priceCurrency": "UZS",
            "availability": "https://schema.org/InStock"
          },
          "organizer": {
            "@type": "EducationalOrganization",
            "name": "Edunial Group",
            "url": "https://ihecf.info"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src="/uzbekistan_landmark.png" alt="Tashkent Uzbekistan Skyline Landmark" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <GraduationCap size={14} /> Student & Parent Edition
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                Uzbekistan <span className="text-secondary italic">Edition 2026-27</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Student & Family Fair</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Your Gateway to World-Class Education in India, Dubai & Malaysia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Connect with representatives from top-tier Indian universities and their global campuses in Dubai and Malaysia. Plan your study journey, secure scholarships, and get career counseling—all in one place.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#rsvp-form" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Pre-Register / RSVP for Free <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Fair Schedule</h3>
               <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <Calendar size={20} />
                      </div>
                      <div>
                          <div className="text-lg font-black text-white">To be announced</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Event Date</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <MapPin size={20} />
                      </div>
                      <div>
                          <div className="text-lg font-black text-white">Tashkent</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Uzbekistan Venue</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <Clock size={20} />
                      </div>
                      <div>
                          <div className="text-lg font-black text-white">To be announced</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Event Time</div>
                      </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">Gateway to Global <span className="text-secondary italic">Opportunities</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Choosing the right university is a life-defining choice. The Indian Higher Education & Career Fair (IHECF), organized by Edunial Group, brings premier universities from India, Dubai, and Malaysia to Tashkent.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Explore diverse courses, evaluate scholarship offers, get clear visa guidelines, and interact directly with academic admissions directors. Pre-registration is free and highly recommended to secure your entry pass.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary mt-4">
              <p className="text-sm text-gray-500 italic">
                "Are you a representative from a higher education institution? Visit our dedicated <Link to="/country/uzbekistan" className="text-secondary font-bold underline">University Exhibitor Page</Link> for booth registration."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">Free</h3>
               <p className="text-gray-500 font-bold">Pre-registration Pass</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Tashkent</h3>
               <p className="text-gray-700 font-bold">Central Asia Center</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in India - Bento Grid */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Study in <span className="text-secondary">India?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover why India is now a leading global destination for higher education.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyInIndiaReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-accent-light text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Dubai or Malaysia */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Choose <span className="text-secondary">Dubai or Malaysia?</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Gain international exposure closer to home at global academic hubs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyInDubaiMalaysiaReasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <Globe size={20} className="text-secondary mb-4" />
              <h3 className="font-bold text-primary mb-2 text-base leading-tight">{reason.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Gain & Parent Benefits */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Sparkles className="text-secondary" size={32} /> What You Will Gain
            </h2>
            <div className="space-y-4">
              {whatYouGain.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 relative z-10">For <span className="text-secondary">Parents</span></h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 relative z-10 leading-relaxed">
              We understand you want a safe, affordable, and high-quality study path. IHECF is designed to help you support your child's choices:
            </p>
            <div className="space-y-4 relative z-10">
              {parentBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="font-bold text-sm text-gray-100 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Recruit from <span className="text-secondary">Uzbekistan</span></h2>
            <div className="space-y-4">
              {universityBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <Building2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-650 text-sm font-semibold leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
              <div className="relative z-10" id="rsvp-form">
                <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Entry is Free & Fast</span>
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Pre-Register / RSVP Now</h3>
                <p className="text-gray-500 mb-8 text-sm">Secure your entry pass to Tashkent's most anticipated higher education fair and explore pathways in India, Dubai, and Malaysia.</p>

                <button 
                  onClick={(e) => { e.preventDefault(); }}
                  className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2 font-bold shadow-lg shadow-secondary/10 rounded-xl"
                >
                  Click Here to Register <ArrowRight size={18} />
                </button>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Edunial Group — Connecting Aspiring Minds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Uzbekistan 2026-27 Student Portal | Study in India, Dubai & Malaysia Fair | Education Fair Tashkent | Central Asian Student Admissions<br/>
         Connecting Uzbek Students and Families with Top Universities | Powered by Edunial Group
      </div>
    </div>
  );
};

export default UzbekistanStudent;
