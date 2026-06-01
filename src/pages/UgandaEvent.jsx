import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const UgandaEvent = () => {
  const highlights = [
    "Access to a high-quality, targeted audience of motivated Ugandan and East African students",
    "High interest in Medicine, Engineering, Business, IT, Pharmacy, Architecture, and Applied Sciences",
    "Direct recruitment power with on-the-spot counseling and real-time admission offers",
    "Exclusive networking opportunities with school principals, counselors, and local influencers",
    "Proven track record of success with hundreds of student enrollments from previous editions",
    "End-to-end support including professional booth setup and aggressive digital promotion by Edunial Groups"
  ];

  const whyParticipate = [
    { title: "Targeted Audience Access", desc: "Meet thousands of motivated Ugandan and East African students seeking quality higher education in India.", icon: <Users /> },
    { title: "Direct Recruitment Power", desc: "Conduct on-the-spot counseling, collect applications, issue provisional offers, and award scholarships in real time.", icon: <Medal /> },
    { title: "Elevated Brand Visibility", desc: "Position your institution as a preferred destination among the local elite and the thriving Indian diaspora.", icon: <Sparkles /> },
    { title: "Exclusive Networking Hub", desc: "Connect with key education stakeholders and school counselors influencing decisions across East Africa.", icon: <Target /> },
    { title: "Proven Success Record", desc: "Participate in a premium fair series known for delivering serious applicants and high enrollment conversions.", icon: <Briefcase /> },
    { title: "Turnkey On-Ground Support", desc: "Enjoy comprehensive logistical support, professional booth installations, and pre-event marketing campaigns.", icon: <Building2 /> },
  ];

  const whoShouldParticipate = [
    "Universities and Deemed Universities",
    "Premier Engineering, Medical, and Management Institutions",
    "Specialized Colleges in Emerging Fields (AI, Data Science, Design, Hospitality, etc.)",
    "Institutions offering scholarships and international student support programs"
  ];

  const benefits = [
    "Premium Stall Packages (Corner / Standard options for maximum visibility)",
    "Exclusive University Presentation & Seminar Sessions",
    "Sponsored Coffee / Lunch Breaks & networking events",
    "VIP Branding Opportunities across digital and print event collateral",
    "Post-event access to the verified student database and leads",
    "Long-term market entry footprint in the East African educational space"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Uganda 2026 | Indian Higher Education Fair Kampala" 
        description="Expand your reach in East Africa. Connect with thousands of qualified Ugandan students at the Africana Hotel, Kampala."
        keywords="IHECF Uganda 2026, Indian Higher Education Fair Kampala, Study in India Fair Uganda, Education Exhibition Kampala, Africana Hotel Kampala"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Uganda 2026 | Indian Higher Education Fair Kampala",
          "description": "Expand your reach in East Africa. Connect with thousands of qualified Ugandan students at the Africana Hotel, Kampala.",
          "startDate": "2026-02-09T09:00:00+03:00",
          "endDate": "2026-02-10T17:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Africana Hotel",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
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
          <img src="/uganda_education_fair.png" alt="Uganda Event Kampala" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> East Africa | Pearl of Africa
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Uganda 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Uganda Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Expand Your Reach. Shape the Future of African Talent.</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                We are pleased to invite India’s leading universities, colleges, and higher education institutions to participate in the Indian Higher Education Fair-2026 (Uganda Edition) — a premium platform dedicated to connecting India’s finest institutions with high-potential students in Kampala.
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
                          <div className="text-lg font-black text-white">Feb 9 & 10, 2026</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Monday & Tuesday</div>
                       </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <MapPin size={20} />
                       </div>
                       <div>
                          <div className="text-lg font-black text-white">Africana Hotel</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Kampala, Uganda</div>
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
              The Indian Higher Education Fair-2026 (Uganda Edition) is a premium recruitment platform designed exclusively to bridge the gap between India's most respected educational institutions and motivated Ugandan student segments.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Uganda, with its young population and strong cultural ties, presents a strategic expansion opportunity for Indian institutions. This flagship event at the iconic Africana Hotel in Kampala provides direct recruitment access to students, parents, school principals, and career counselors who actively shape study abroad decisions in the region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Organized by Edunial Groups, IHECF events ensure that exhibitors engage with pre-qualified, serious prospects, enabling higher admission conversions and brand footprint expansion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">Pearl</h3>
               <p className="text-gray-500 font-bold">of Africa Market</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Kampala</h3>
               <p className="text-gray-700 font-bold">Africana Venue</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Top Indian Institutions Choose <span className="text-secondary">Uganda</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Expand Your Brand. Recruit Tomorrow's Leaders.</p>
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
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Ready to Recruit in the Ugandan Market?</h3>
                  <p className="text-gray-500 mb-8 text-sm">Secure your prime booth and high-visibility sponsorships on a first-come, first-served basis. Early bookings enjoy preferential locations.</p>
                  
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
         IHECF Uganda 2026 | Indian Higher Education Fair Kampala | Study in India Fair Uganda | Education Exhibition Kampala Africana Hotel<br/>
         Connecting Ugandan Students with India’s Finest Universities | Expanding Educational Horizons in East Africa
      </div>
    </div>
  );
};

export default UgandaEvent;
