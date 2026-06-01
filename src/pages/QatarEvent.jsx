import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const QatarEvent = () => {
  const highlights = [
    "Direct access to one of the most affluent Indian diaspora communities in the Gulf region",
    "Specialized timings: Main Fair in morning/afternoon, exclusive parents session in evening",
    "Premium school visits add-on at top Indian and international schools in Doha",
    "Hosted at the prestigious MES Indian School, Doha",
    "Immediate recruitment outcomes with spot admissions, evaluations, and scholarship awards",
    "Comprehensive pre-event digital promotion campaign and local counselor networking"
  ];

  const whyParticipate = [
    { title: "Direct Access to Prospects", desc: "Meet pre-qualified students from Grade 11 & 12, undergraduates, and working professionals seeking quality education.", icon: <Users /> },
    { title: "Influential Parent Engagement", desc: "Dedicated evening session (4:00 PM – 9:00 PM) exclusively for parents, the primary decision-makers in the Gulf.", icon: <Medal /> },
    { title: "School Visits Add-On", desc: "A premium opportunity to visit top Indian and international schools in Doha for pre-fair engagement.", icon: <Building2 /> },
    { title: "Spot Offers & Conversions", desc: "Leverage on-the-spot applications, fee waivers, scholarships, and early admissions to maximize conversions.", icon: <Sparkles /> },
    { title: "Strong Brand Visibility", desc: "Position your institution among Qatar's Indian community as a preferred destination for higher education.", icon: <Target /> },
    { title: "High ROI Potential", desc: "Qatar offers one of the highest per-student investment markets in the GCC, with families seeking premium options.", icon: <Globe /> },
  ];

  const whoShouldParticipate = [
    "Recognized Universities and Deemed Universities",
    "Top-ranked Medical, Engineering, and Management Institutions",
    "Colleges specializing in high-demand programs (AI, Data Science, Design, Hospitality, Allied Health Sciences, etc.)",
    "Institutions offering attractive scholarships and dedicated support for Gulf international students"
  ];

  const benefits = [
    "Premium & Corner Booth Options with superior visibility at the MES Indian School, Doha",
    "Exclusive University Presentation & Seminar Slots",
    "Sponsorship Opportunities (Welcome Reception, Coffee Breaks, Dinner, Kit Branding)",
    "Comprehensive Pre-Event & Digital Marketing Support targeting Qatar families",
    "Post-event access to qualified student leads and database",
    "Opportunity to build a sustainable, long-term recruitment pipeline in Qatar"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Qatar 2026 | Indian Higher Education Fair Doha" 
        description="Unlock the Qatar & GCC market with India's most prestigious education fair. Connect with high-potential students at MES Indian School, Doha."
        keywords="IHECF Qatar 2026, Indian Higher Education Fair Doha, Study in India Fair Qatar, Education Exhibition Doha MES Indian School"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src="/qatar_education_fair.png" alt="Qatar Event Doha Skyline" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} md:size={16} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> GCC Market | High Student Investment
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Qatar 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Qatar Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Unlock the Qatar & GCC Market with India’s Most Prestigious Education Fair</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Edunial Groups proudly presents a high-impact, curated platform designed exclusively to connect India’s leading universities and colleges with ambitious students and families from the Indian diaspora in Qatar.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Register as Exhibitor Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Event Details</h3>
               <div className="space-y-6">
                   <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                         <Calendar size={20} />
                      </div>
                      <div>
                         <div className="text-lg font-black text-white">24th September 2026</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Thursday</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <div className="text-lg font-black text-white">MES Indian School</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Doha, Qatar</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 group border-t border-white/10 pt-4">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                         <Clock size={20} />
                      </div>
                      <div className="text-xs text-gray-300 space-y-1">
                         <div><strong>08:00 AM - 02:00 PM</strong><br/>Main Education Fair</div>
                         <div><strong>02:00 PM - 04:00 PM</strong><br/>Networking Lunch</div>
                         <div><strong>04:00 PM - 09:00 PM</strong><br/>Parents Session</div>
                      </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">About the <span className="text-secondary italic">Event</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Indian Higher Education & Career Fair (IHECF) Qatar Edition 2026 is a premium, curated exhibition connecting leading Indian universities and colleges with ambitious students and diaspora families in Doha.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Qatar offers one of the highest per-student investment markets in the GCC, with families actively seeking premium overseas study options. Held at the prestigious MES Indian School, the fair features specialized timings including a dedicated evening parents session (4:00 PM – 9:00 PM) to engage primary decision-makers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Organized by Edunial Groups, IHECF has established itself as one of the most respected and result-driven platforms across the Middle East and Africa, delivering exceptional brand visibility and recruitment pipelines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">High</h3>
               <p className="text-gray-500 font-bold">Student Investment</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Parents</h3>
               <p className="text-gray-700 font-bold">Specialized Session</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate - Bento Layout */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Top Indian Institutions Choose <span className="text-secondary">Qatar 2026</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A strategic gateway to one of the most affluent and education-conscious Indian communities in the Gulf.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyParticipate.map((item, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-accent-light text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & Who Should Participate */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Sparkles className="text-secondary" size={32} /> Event Highlights
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <p className="text-gray-600 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 relative z-10">Who Should <span className="text-secondary">Participate?</span></h2>
            <div className="space-y-4 relative z-10">
              {whoShouldParticipate.map((participant, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <Building2 size={20} className="text-secondary flex-shrink-0" />
                  <p className="font-bold text-sm md:text-base">{participant}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-8">Participation <span className="text-secondary">Benefits</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Limited Booths Available</span>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Ready to Secure Your Presence in Qatar?</h3>
                  <p className="text-gray-500 mb-8 text-sm">Early participation ensures prime location, maximum visibility, and additional privileges including school visit opportunities.</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Edunial Groups Info</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Email:</strong> info@ihecf.info | reachedunial@gmail.com</p>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Web:</strong> www.ihecf.info</p>
                    <p className="text-sm text-gray-600"><strong className="text-primary">Phone / WhatsApp:</strong> +91-9654448283 / 9319477335</p>
                  </div>

                  <Link to="/contact" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2">
                    Register Your Institution <ArrowRight size={18} />
                  </Link>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Be Where the Future Chooses You</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Qatar 2026 | Indian Higher Education Fair Doha | Study in India Fair Qatar | Education Exhibition Doha MES Indian School<br/>
         Connecting Gulf-based Indian Expatriates with India’s Premier Universities | Expanding Educational Footprints in the Middle East
      </div>
    </div>
  );
};

export default QatarEvent;
