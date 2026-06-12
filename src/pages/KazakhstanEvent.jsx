import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Briefcase, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const KazakhstanEvent = () => {
  const highlights = [
    "High-Impact Recruitment Platform in Central Asia connecting Indian universities with motivated students",
    "Strong interest in Medicine, Engineering, IT, Business Management, Pharmacy, Aviation, Petroleum & Energy Studies, and Humanities",
    "Direct face-to-face interaction and counseling with prospective applicants and parents in Kazakhstan",
    "Networking with school counselors, education consultants, local universities, and Kazakh education authorities",
    "Establish MOU collaborations and strategic partnerships with regional institutions",
    "Aggressive pre-event promotional campaigns driving high-quality and high-intent footfall"
  ];

  const whyParticipate = [
    { title: "High-Quality Footfall", desc: "Attract motivated Kazakh students, parents, school counselors, education consultants, and influencers from Astana, Almaty, and other major cities.", icon: <Users /> },
    { title: "Targeted Audience", desc: "Strong interest in programs such as Medicine, Engineering, IT & Computer Science, Business & Management, Petroleum & Energy Studies, Pharmacy, Aviation, and Humanities.", icon: <Target /> },
    { title: "Direct Engagement & Conversions", desc: "One-on-one counseling, on-the-spot applications, scholarship guidance, and immediate lead generation.", icon: <Medal /> },
    { title: "Premium Brand Visibility", desc: "Establish your institution's presence in a rapidly growing, high-potential market in Central Asia.", icon: <Sparkles /> },
    { title: "Networking Opportunities", desc: "Connect with the Indian Embassy in Astana, Kazakh education authorities, local universities, and potential partners.", icon: <Building2 /> },
    { title: "Excellent ROI", desc: "Gain first-mover advantage in this strategic Central Asian market and build strong enrollment pipelines.", icon: <Briefcase /> },
  ];

  const whoShouldParticipate = [
    "Universities and Colleges offering Undergraduate, Postgraduate, and Doctoral programs.",
    "Deemed-to-be Universities, Private Institutions, and specialized colleges in high-demand disciplines.",
    "Institutions seeking to expand their international student intake from Central Asia and strengthen their global footprint."
  ];

  const promotionStrategies = [
    "Targeted digital campaigns, social media amplification, and localized outreach.",
    "Direct school and university connect programs with top secondary schools and higher education institutions.",
    "Collaboration with the Indian Embassy, Kazakh government education bodies, and key stakeholders.",
    "Pre-event webinars, alumni success stories, and media partnerships.",
    "Full on-ground support including premium branding, event materials, and post-event follow-up."
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Kazakhstan 2026-27 | Indian Higher Education & Career Fair" 
        description="Connect with motivated Kazakh students and parents at the IHECF Kazakhstan Edition. Your strategic gateway to Indian higher education in Central Asia."
        keywords="IHECF Kazakhstan 2026, Indian Education Fair Astana, Study in India Fair Kazakhstan, Education Exhibition Almaty, Central Asia Student Recruitment"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Kazakhstan 2026-27 | Indian Higher Education & Career Fair",
          "description": "Your Strategic Gateway to Indian Higher Education in Central Asia. Connect with motivated Kazakh students at our premium recruitment fair.",
          "startDate": "2026-09-01T09:00:00+05:00",
          "endDate": "2026-10-31T17:00:00+05:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "To be announced",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Astana / Almaty",
              "addressCountry": "Kazakhstan"
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
          <img src="/kazakhstan_landmark.png" alt="Kazakhstan Event Astana" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/upcoming-events" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} md:size={16} /> Back to Event Calendar
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> Central Asian Market | Rising Student Mobility
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Kazakhstan 2026-27</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Kazakhstan Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Your Strategic Gateway to Indian Higher Education in Central Asia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Edunial Group proudly presents the Indian Higher Education & Career Fair (IHECF) 2026-27 – Kazakhstan Edition, a high-impact platform connecting India’s leading universities and colleges with ambitious students and education stakeholders across Kazakhstan.
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
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Event Date</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <MapPin size={20} />
                      </div>
                      <div>
                          <div className="text-lg font-black text-white">To be announced</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Venue</div>
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

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">About the <span className="text-secondary italic">Kazakhstan Edition</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kazakhstan is one of the most dynamic and promising education markets in Central Asia. With a young, ambitious population, strong economic growth, and a government push for international education and skill development, Kazakh students are increasingly seeking high-quality, affordable, and globally recognized degrees abroad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Indian institutions are perfectly positioned to meet this demand with world-class programs, English-medium instruction, and excellent academic reputation. IHECF Kazakhstan provides your university with direct access to this high-potential market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">High</h3>
               <p className="text-gray-500 font-bold">ROI & Conversion</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Central Asia</h3>
               <p className="text-gray-700 font-bold">Strategic Gateway</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate - Grid Layout */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Participate in IHECF <span className="text-secondary">Kazakhstan 2026-27?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Position your institution as a preferred choice in a rapidly growing Central Asian market.</p>
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

      {/* Highlights & Promotion */}
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
                  <p className="text-gray-600 text-sm font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 relative z-10">Strategic <span className="text-secondary">Promotion</span></h2>
            <p className="text-gray-300 text-sm mb-8 relative z-10 leading-relaxed">
              Edunial Group deploys a powerful, multi-channel promotional strategy tailored for the Kazakh market to ensure maximum impact and high-intent footfall:
            </p>
            <div className="space-y-4 relative z-10">
              {promotionStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="font-semibold text-xs md:text-sm leading-relaxed">{strategy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Participate & CTA */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-8">Who Should <span className="text-secondary">Participate?</span></h2>
              <div className="space-y-4">
                {whoShouldParticipate.map((participant, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <Building2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-semibold leading-relaxed">{participant}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Position Your Institution as the Preferred Choice</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Offer Kazakh students affordable, high-quality education in a safe, welcoming, and culturally enriching environment. Strengthen India-Kazakhstan educational and people-to-people ties while achieving superior returns on your internationalization efforts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Central Asia Edition</span>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Book Your Exhibition Stall</h3>
                  <p className="text-gray-500 mb-8 text-sm">Join India's premier higher education fair in Central Asia. Premium locations are limited.</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Contact Edunial Group</h4>
                    <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Email:</strong> info@ihecf.info</p>
                    <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Phone:</strong> +91-96544 48283</p>
                    <p className="text-xs text-gray-600"><strong className="text-primary">Website:</strong> www.ihecf.info</p>
                  </div>

                  <Link to="/contact" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2">
                    Register Your Institution <ArrowRight size={18} />
                  </Link>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Early Booking Highly Recommended</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Kazakhstan 2026-27 | Indian Higher Education & Career Fair Kazakhstan Edition | Study in India Fair Central Asia | Education Fair Almaty Astana<br/>
         Connecting Central Asian Students with India’s Elite Universities | Transforming Opportunities in Education
      </div>
    </div>
  );
};

export default KazakhstanEvent;
