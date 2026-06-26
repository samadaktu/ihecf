import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Rocket, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const NamibiaEvent = () => {
  const highlights = [
    "Attract motivated students, parents, school counselors, and education consultants from Namibia",
    "High interest in Medicine, Engineering, IT, Business, Pharmacy, Law, Agriculture, and Environmental Sciences",
    "Direct leads: One-on-one counseling, on-the-spot application support, and scholarship guidance",
    "Network with local education authorities and the Indian High Commission in Windhoek",
    "Proven Africa series model delivering strong enrollment pipelines",
    "Robust multi-layered promotional strategy targeting Namibian schools and digital channels"
  ];

  const whyParticipate = [
    { 
      title: "High-Potential Namibia Market", 
      desc: "Namibia's dynamic population has a growing aspiration for quality international higher education.", 
      icon: <Rocket /> 
    },
    { 
      title: "Targeted Student Footfall", 
      desc: "Meet qualified secondary school students and parents actively searching for undergraduate, postgraduate, and PhD programs.", 
      icon: <Users /> 
    },
    { 
      title: "Strong Brand Recognition", 
      desc: "Build reputation in a market that highly trusts Indian higher education's academic rigor, affordability, and safety.", 
      icon: <Medal /> 
    },
    { 
      title: "Direct Lead Generation", 
      desc: "Perform real-time counseling, capture student records, and generate qualified applications during the event.", 
      icon: <Target /> 
    },
    { 
      title: "Institutional Partnerships", 
      desc: "Establish strategic connections with top local schools, career advisors, and education government bodies.", 
      icon: <Building2 /> 
    },
    { 
      title: "Proven Africa Series ROI", 
      desc: "Join a highly successful event series with record-breaking attendance and long-term pipelines across Africa.", 
      icon: <Sparkles /> 
    },
  ];

  const whoShouldParticipate = [
    "Universities and Colleges offering Undergraduate, Postgraduate, and PhD programs",
    "Deemed-to-be Universities, Private Institutions, and specialized colleges in high-demand disciplines",
    "Institutions looking to expand their presence in Africa and build a diverse international student base"
  ];

  const promotions = [
    "Extensive digital campaigns, social media marketing, and localized outreach across Namibia",
    "Direct school connect programs targeting top secondary schools and career counselors",
    "Collaboration with the Indian High Commission, local government bodies, and education stakeholders",
    "Pre-event webinars, alumni success stories, and media partnerships in Windhoek",
    "Comprehensive on-ground support including event branding, stall setups, and lead follow-up assistance"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Namibia 2026 | Indian Higher Education & Career Fair Windhoek" 
        description="Exhibit at the premier Indian Higher Education & Career Fair – Namibia Edition. Direct access to motivated Namibian students seeking higher education in India."
        keywords="IHECF Namibia 2026, Indian Education Fair Windhoek, Study in India Fair Namibia, Southern African Student Recruitment, IHECF Africa Series"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Namibia 2026 | Indian Higher Education & Career Fair",
          "description": "Edunial Group presents the Indian Higher Education & Career Fair – Namibia Edition, connecting premier Indian universities with students in Windhoek.",
          "startDate": "2026-10-15T10:00:00Z",
          "endDate": "2026-10-17T17:00:00Z",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Windhoek, Namibia",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Windhoek",
              "addressCountry": "Namibia"
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
          <img src="/namibia_landmark.png" alt="Namibia Sossusvlei Red Dunes" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> Southern Africa Series | Namibia Edition
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Namibia 2026</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Discover World-Class Indian Education in Namibia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Edunial Group is delighted to present this high-impact platform connecting India's premier universities with ambitious students from Namibia and the Southern African region.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/university-registration" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
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
                        <div className="text-lg font-black text-white">TBA</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Date</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <div className="text-lg font-black text-white">Windhoek, Namibia</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Venue TBA</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                        <Clock size={20} />
                     </div>
                     <div>
                        <div className="text-lg font-black text-white">TBA</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Time</div>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">About the <span className="text-secondary italic">Exhibition</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Edunial Group is delighted to present the Indian Higher Education & Career Fair (IHECF) 2026 – Namibia Edition, a high-impact platform connecting India’s premier universities and colleges with ambitious students from Namibia and the Southern African region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Namibia’s young, dynamic population and growing aspiration for quality international education make it a high-potential market for Indian institutions. Strong historical and cultural connections with India, combined with demand for affordable, globally recognized degrees, create excellent opportunities for enrollment and long-term partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">Growth</h3>
               <p className="text-gray-500 font-bold">High Potential</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Windhoek</h3>
               <p className="text-gray-700 font-bold">Host City</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate - Bento Grid */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Participate in <span className="text-secondary">IHECF Namibia 2026?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Establish your institution's brand in Southern Africa using our proven recruitment formula.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyParticipate.map((item, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-accent-light text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
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
              <Sparkles className="text-secondary" size={32} /> Key Benefits & Highlights
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <p className="text-gray-600 font-bold text-sm md:text-base">{highlight}</p>
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

      {/* Promotions Section */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Powerful Promotion Driving <span className="text-secondary">Maximum Turnout</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Edunial Group deploys a robust, multi-layered marketing engine across secondary schools and media partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{promo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Success */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Part of a Successful <span className="text-secondary">Africa Series</span></h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          The IHECF Africa Series has already delivered outstanding results in cities such as Addis Ababa, Kampala, Zanzibar, Nairobi, Dar es Salaam, Lusaka, Harare, and Mauritius. Thousands of qualified students have engaged with participating institutions, leading to significant application surges, enrollments, and valuable academic partnerships. The Namibia edition continues this momentum, opening new doors in Southern Africa.
        </p>
      </section>

      {/* CTA & Contact Details */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Join India’s Global <span className="text-secondary">Education Leadership</span></h2>
               <p className="text-gray-655 text-base leading-relaxed mb-6 font-semibold">
                  Position your institution as the preferred choice for Namibian students seeking quality, affordable, and culturally enriching higher education in India.
               </p>
               <p className="text-gray-555 text-sm leading-relaxed mb-8">
                  Contribute to strengthening India-Namibia educational ties while achieving excellent returns on your internationalization efforts. Early bird packages are open.
               </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/university-registration" className="btn-primary px-8 py-4 text-base text-center">
                  Book a Stall Now
                </Link>
                <a href="mailto:info@ihecf.info" className="flex items-center justify-center px-8 py-4 border-2 border-gray-250 text-primary font-bold text-sm uppercase tracking-widest rounded-full hover:border-secondary transition-all bg-white">
                  Email Inquiry
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Booking Now Open</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">Secure Your Participation</h3>
                  <p className="text-gray-300 mb-8 text-sm">Reach out to reserve your stall, coordinate school networking slots, or request visa assistance letters.</p>
                  
                  <div className="bg-white/5 rounded-2xl p-6 text-left mb-8 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-secondary mb-4 text-xs uppercase tracking-widest border-b border-white/10 pb-2">Edunial Group Contact</h4>
                    <p className="text-xs text-gray-200 mb-2"><strong className="text-white">Email:</strong> info@ihecf.info</p>
                    <p className="text-xs text-gray-200 mb-2"><strong className="text-white">Web:</strong> www.ihecf.info</p>
                    <p className="text-xs text-gray-200"><strong className="text-white">Phone / WhatsApp:</strong> +91-96544 48283</p>
                  </div>

                  <Link to="/university-registration" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2 font-bold">
                    Register Your Institution <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Namibia 2026 | Indian Education Fair Windhoek | Study in India Recruitment Namibia | IHECF Africa Series<br/>
         Empowering Indian Institutions | Transforming Opportunities in Africa | Connecting Namibia to India’s Academic Excellence
      </div>
    </div>
  );
};

export default NamibiaEvent;
