import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Rocket, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const ZimbabweEvent = () => {
  const highlights = [
    "Attract serious students, parents, school counselors, and education consultants from Harare",
    "High interest in Medicine, Engineering, IT, Management, Pharmacy, Law, Agriculture, and Environmental Sciences",
    "Direct engagement: One-on-one counseling, on-the-spot application checks, and scholarship guidance",
    "Connect with the Indian Embassy, local education authorities, and school partners",
    "Proven enrollment pipeline with measurable results in Southern Africa",
    "Multi-channel promotion tailored specifically to the Zimbabwean market"
  ];

  const whyParticipate = [
    { 
      title: "Emerging Promising Market", 
      desc: "Zimbabwe's young and dynamic population has a rapidly rising demand for quality, affordable, globally recognized degrees.", 
      icon: <Rocket /> 
    },
    { 
      title: "High-Quality Footfall", 
      desc: "Interact with highly motivated secondary school graduates, parents, and counselors from Harare and surrounding regions.", 
      icon: <Users /> 
    },
    { 
      title: "Targeted Student Audience", 
      desc: "Connect with students seeking high-demand disciplines such as STEM, Health Sciences, Business Management, and Agriculture.", 
      icon: <Medal /> 
    },
    { 
      title: "Direct Admissions & Conversions", 
      desc: "Provide on-the-spot application support, evaluate eligibility, and generate immediate high-intent leads.", 
      icon: <Target /> 
    },
    { 
      title: "Brand Visibility & Networking", 
      desc: "Network with the Indian Embassy in Harare, school counselors, and local educational influencers to build brand reputation.", 
      icon: <Building2 /> 
    },
    { 
      title: "Proven Series Success", 
      desc: "Part of the IHECF Africa Series that has delivered thousands of students and successful pipelines across key cities.", 
      icon: <Sparkles /> 
    },
  ];

  const whoShouldParticipate = [
    "Universities and Colleges offering Undergraduate, Postgraduate, and Doctoral programs",
    "Deemed-to-be Universities, Private Universities, and specialized colleges in high-demand disciplines",
    "Institutions looking to expand their presence in Southern Africa and increase international student intake"
  ];

  const promotions = [
    "Targeted digital campaigns, social media marketing, and localized outreach across Zimbabwe",
    "Direct school connect programs with top secondary schools and education counselors",
    "Collaboration with the Indian Embassy in Harare and local education stakeholders",
    "Pre-event webinars, alumni success stories, and media partnerships in Harare",
    "Comprehensive on-ground support including branding, booth materials, and lead generation follow-up"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Zimbabwe 2026-27 | Indian Higher Education & Career Fair Harare" 
        description="Exhibit at the Indian Higher Education & Career Fair – Zimbabwe Edition. Join us at the Rainbow Hotel, Harare, on 18th-19th February 2026."
        keywords="IHECF Zimbabwe 2026, Indian Education Fair Harare, Study in India Fair Zimbabwe, Rainbow Hotel Harare Education Exhibition, Africa Student Recruitment"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Zimbabwe 2026-27 | Indian Higher Education & Career Fair",
          "description": "Edunial Group presents the Indian Higher Education & Career Fair – Zimbabwe Edition, connecting premier Indian universities with students in Harare.",
          "startDate": "2026-02-18T10:00:00+02:00",
          "endDate": "2026-02-19T17:00:00+02:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Rainbow Hotel, Harare, Zimbabwe",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Harare",
              "addressCountry": "Zimbabwe"
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
          <img src="/zimbabwe_landmark.png" alt="Zimbabwe Victoria Falls Landscape" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> Southern Africa Series | Zimbabwe Edition
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Zimbabwe 2026-27</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Your Gateway to Indian Academic Excellence in Zimbabwe</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Edunial Group proudly connects India's leading universities with ambitious Zimbabwean students, parents, and career counselors in Harare.
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
                        <div className="text-lg font-black text-white">18 – 19 Feb 2026</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Dates Confirmed</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all text-center">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <div className="text-sm font-black text-white leading-tight">Rainbow Hotel, Harare</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Official Venue</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                        <Clock size={20} />
                     </div>
                     <div>
                        <div className="text-sm font-black text-white">10:00 AM – 5:00 PM</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Both Days</div>
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
              Edunial Group proudly presents the Indian Higher Education & Career Fair (IHECF) 2026-27 – Zimbabwe Edition, a premier platform connecting India’s leading universities and colleges with ambitious Zimbabwean students and key education stakeholders.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Zimbabwe is an emerging and highly promising market for Indian higher education. With a young, dynamic population and increasing demand for quality, affordable, and globally recognized degrees, this fair provides direct access to motivated students seeking world-class education in India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">Emerging</h3>
               <p className="text-gray-500 font-bold">Southern Africa Market</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Harare</h3>
               <p className="text-gray-700 font-bold">Capital Event</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Participate in <span className="text-secondary">IHECF Zimbabwe 2026-27?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Tap into high-intent student demand for Medicine, Engineering, IT, and specialized programs.</p>
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

      {/* Strategic Promotion */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Strategic Promotion for <span className="text-secondary">Maximum Impact</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Edunial Group ensures outstanding turnout through a multi-layered promotional campaigns across Zimbabwe.</p>
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
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Building on Proven Success Across <span className="text-secondary">Africa</span></h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          The IHECF Africa Series has delivered exceptional results in cities including Addis Ababa (1,000+ students), Kampala, Dar es Salaam, Lusaka, Mauritius, Nairobi, and others. Participating institutions have achieved significant application surges, enrollments, and long-term partnerships. The Zimbabwe 2026-27 edition continues this momentum with even stronger outcomes in Southern Africa.
        </p>
      </section>

      {/* CTA & Contact Details */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Position Your Institution in <span className="text-secondary">Zimbabwe</span></h2>
               <p className="text-gray-655 text-base leading-relaxed mb-6 font-semibold">
                  Offer Zimbabwean students affordable, high-quality education in a safe, culturally welcoming environment with English-medium instruction and excellent global recognition.
               </p>
               <p className="text-gray-555 text-sm leading-relaxed mb-8">
                  Strengthen India-Zimbabwe educational relations while achieving outstanding returns on your internationalization efforts. Stalls are allocated on a first-come, first-served basis.
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
                  <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Confirmed Dates</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">Harare Participation Details</h3>
                  <p className="text-gray-300 mb-8 text-sm">Reach out to secure your exhibition booth, coordinate materials transport, or request school counselor schedules.</p>
                  
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
         IHECF Zimbabwe 2026-27 | Indian Education Fair Harare | Study in India Fair Rainbow Hotel | IHECF Africa Series<br/>
         Bridging Continents | Empowering Futures | Connecting Zimbabwe to India’s Academic Excellence
      </div>
    </div>
  );
};

export default ZimbabweEvent;
