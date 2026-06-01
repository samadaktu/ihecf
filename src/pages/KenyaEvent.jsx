import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const KenyaEvent = () => {
  const highlights = [
    "Access to Kenya's fastest-growing and highly qualified student market",
    "High interest in Medicine (MBBS), Engineering, Business, IT, Pharmacy, Architecture, Data Science, and Allied Health Sciences",
    "Direct face-to-face interaction with ambitious Kenyan students and families",
    "Convenient, high-profile venue at Oshwal Academy Senior High in Nairobi",
    "Immediate recruitment results with spot offers, application collections, and real-time scholarship awards",
    "Aggressive pre-event promotion, digital marketing, and local counselor networking by Edunial Groups"
  ];

  const whyParticipate = [
    { title: "Premium Targeted Audience", desc: "Engage directly with thousands of serious Kenyan students and parents from top schools with strong demand for professional fields.", icon: <Users /> },
    { title: "Immediate Outcomes", desc: "Conduct face-to-face counseling, collect applications, issue provisional admission offers, and award scholarships on the spot.", icon: <Medal /> },
    { title: "Powerful Brand Visibility", desc: "Position your institution prominently among Kenya's elite families, international schools, and the influential Indian diaspora.", icon: <Sparkles /> },
    { title: "Strategic Networking", desc: "Build relationships with school principals, career counselors, agents, and key influencers driving mobility decisions.", icon: <Target /> },
    { title: "Proven Conversion Track Record", desc: "Be part of Edunial Groups' successful fair series that consistently delivers strong enrollment outcomes in East Africa.", icon: <Briefcase /> },
    { title: "Complete On-Ground Execution", desc: "Benefit from professional booth setup, aggressive pre-event promotion, and seamless event management at Oshwal Academy.", icon: <Building2 /> },
  ];

  const whoShouldParticipate = [
    "Recognized Universities and Deemed-to-be Universities",
    "Top-ranked Medical, Engineering, and Management Institutions",
    "Colleges excelling in Emerging & High-Demand Programs (AI, Cybersecurity, Design, Hospitality, etc.)",
    "Institutions offering attractive scholarships and support for international students"
  ];

  const benefits = [
    "Premium & Corner Booth Options with excellent visibility at Oshwal Academy Senior High",
    "Exclusive University Presentation & Seminar Slots",
    "Sponsorship Opportunities (Welcome Reception, Coffee Breaks, Lunch, Kit Branding)",
    "Enhanced Digital & On-Site Promotion targeting Kenyan audiences",
    "Post-event access to qualified student leads and database",
    "Opportunity to build a successful, long-term brand presence in East Africa"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Kenya 2026 | Indian Higher Education Fair Nairobi" 
        description="Tap into Kenya's fastest-growing education market. Connect with motivated Kenyan students at Oshwal Academy Senior High, Nairobi."
        keywords="IHECF Kenya 2026, Indian Higher Education Fair Nairobi, Study in India Fair Kenya, Education Exhibition Nairobi Oshwal Academy"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Kenya 2026 | Indian Higher Education Fair Nairobi",
          "description": "Tap into Kenya's fastest-growing education market. Connect with motivated Kenyan students at Oshwal Academy Senior High, Nairobi.",
          "startDate": "2026-02-01T09:00:00+03:00",
          "endDate": "2026-03-31T17:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Oshwal Academy Senior High",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            }
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
          <img src="/kenya_education_fair.png" alt="Kenya Event Nairobi" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} md:size={16} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> East Africa | Dynamic Education Hub
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Kenya 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Kenya Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Tap into Kenya's Fastest-Growing Education Market. Recruit the Best Talent.</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                We cordially invite India’s leading universities, colleges, and premier higher education institutions to participate in the IHECF 2026 (Kenya Edition) — a prestigious and high-ROI platform set in Nairobi.
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
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                         <Calendar size={20} />
                      </div>
                      <div>
                         <div className="text-lg font-black text-white">To be announced</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Feb / Mar 2026</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <div className="text-lg font-black text-white">Oshwal Academy</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Nairobi, Kenya</div>
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
              The Indian Higher Education & Career Fair (IHECF) Kenya Edition 2026 is a premium, result-oriented platform designed to connect leading Indian institutions with motivated student pools in Kenya.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kenya stands as one of the most dynamic and promising markets in East Africa for Indian higher education. Hosted at the prestigious Oshwal Academy Senior High, this fair offers direct access to high-intent students and families who are actively seeking world-class undergraduate and postgraduate options in India.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Organized by Edunial Groups, the IHECF series has earned a strong reputation for delivering quality student leads and successful enrollments across multiple African and Middle Eastern nations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">High</h3>
               <p className="text-gray-500 font-bold">East Africa Hub</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Oshwal</h3>
               <p className="text-gray-700 font-bold">Elite Venue</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Forward-Thinking Indian Institutions Choose <span className="text-secondary">Kenya</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Connect. Recruit. Expand in Kenya.</p>
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
                  <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Limited Exhibitor Slots</span>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Ready to Recruit in the Kenyan Market?</h3>
                  <p className="text-gray-500 mb-8 text-sm">Prime booths and high-visibility sponsorships are allocated on a first-come, first-served basis. Early booking advantage applies.</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Edunial Groups Info</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Email:</strong> info@ihecf.info | reachedunial@gmail.com</p>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Web:</strong> www.ihecf.info</p>
                    <p className="text-sm text-gray-600"><strong className="text-primary">Phone / WhatsApp:</strong> +91-9654448283 / 9319477335</p>
                  </div>

                  <Link to="/contact" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2">
                    Register Your Institution <ArrowRight size={18} />
                  </Link>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Elevate Your Institution's Presence</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Kenya 2026 | Indian Higher Education & Career Fair Nairobi | Study in India Fair Kenya | Education Exhibition Nairobi Oshwal Academy<br/>
         Connecting Kenyan Students with India’s Finest Universities | Expanding Educational Horizons in East Africa
      </div>
    </div>
  );
};

export default KenyaEvent;
