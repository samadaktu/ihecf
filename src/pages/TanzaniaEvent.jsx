import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const TanzaniaEvent = () => {
  const highlights = [
    "High-Quality, High-Intent Audience of serious Tanzanian students and parents in Dar es Salaam",
    "Strong interest in Medicine (MBBS), Engineering, Business & Management, IT, Pharmacy, Architecture, Data Science, AI, and Allied Health Sciences",
    "Direct face-to-face interaction and counseling with prospective applicants",
    "Networking with school principals, career counselors, and East African education agents",
    "Immediate recruitment results with spot admissions, application collection, and real-time scholarship awards",
    "Flawless execution, premium booth setup, and aggressive pre-event marketing campaign"
  ];

  const whyParticipate = [
    { title: "High-Quality & High-Intent", desc: "Engage directly with motivated Tanzanian students and parents from top schools with strong demand for MBBS, Tech, and Business.", icon: <Users /> },
    { title: "Powerful Recruitment Engine", desc: "Conduct on-the-spot counseling, collect applications, issue provisional admission offers, and award scholarships in real time.", icon: <Medal /> },
    { title: "Elite Brand Visibility", desc: "Position your institution prominently among Tanzania's affluent families, international schools, and consultants.", icon: <Sparkles /> },
    { title: "Strategic Networking", desc: "Build meaningful relationships with school principals, career counselors, agents, and government officials across East Africa.", icon: <Target /> },
    { title: "Proven Results", desc: "Join Edunial Groups' highly successful fair series, known for delivering strong enrollment outcomes from East Africa.", icon: <Briefcase /> },
    { title: "Premium Execution & Venue", desc: "Benefit from the world-class venue facilities of Serena Hotel, professional booth setup, and aggressive pre-event promotion.", icon: <Building2 /> },
  ];

  const whoShouldParticipate = [
    "Recognized Universities and Deemed-to-be Universities",
    "Top Medical, Engineering, and Management Institutions",
    "Specialized Colleges in high-demand emerging fields (AI, Cybersecurity, Design, Hospitality, etc.)",
    "Institutions offering attractive scholarships and dedicated international student support"
  ];

  const benefits = [
    "Premium & Corner Booth Options with superior visibility at the Serena Hotel, Dar es Salaam",
    "Exclusive University Presentation & Seminar Slots",
    "Attractive Sponsorship Opportunities (Welcome Reception, Coffee Breaks, Lunch, Dinner, Kit Branding)",
    "Comprehensive Digital Marketing & Pre-Event Promotion targeting East African audiences",
    "Post-event access to qualified student leads and database",
    "Opportunity to build a successful, long-term partnership in Tanzania"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Tanzania 2026-27 | Indian Higher Education Fair Dar es Salaam" 
        description="Secure your share of Tanzania's booming higher education market. Connect with motivated Tanzanian students and parents at the Serena Hotel, Dar es Salaam."
        keywords="IHECF Tanzania 2026, Indian Higher Education Fair Dar es Salaam, Study in India Fair Tanzania, Education Exhibition Dar es Salaam Serena Hotel"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src="/tanzania_education_fair.png" alt="Tanzania Event Dar es Salaam" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} md:size={16} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> East African Market | Booming Demand
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Tanzania 2026-27</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Dar es Salaam Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Secure Your Share of Tanzania's Booming Higher Education Market</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                We cordially invite India’s most respected universities, colleges, and premier higher education institutions to participate in the Indian Higher Education & Career Fair-2026-27 (<span className="text-secondary font-black">Dar es Salaam Edition</span>) — a prestigious, high-ROI platform set in Tanzania’s commercial capital.
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
                         <div className="text-lg font-black text-white">Serena Hotel</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Dar es Salaam, Tanzania</div>
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
              The Indian Higher Education & Career Fair (IHECF) Tanzania Edition 2026-27 is a flagship, high-ROI recruitment platform designed to connect leading Indian universities and colleges with thousands of serious Tanzanian students and their families.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dar es Salaam, as East Africa’s fastest-growing economic hub, presents a remarkable opportunity to connect with highly motivated students and influential families seeking world-class education in India. Hosted at the iconic Serena Hotel, this exclusive event offers direct access to East Africa's most promising student talent pool.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Organized by Edunial Groups, IHECF has become one of the most trusted and effective platforms for Indian institutions expanding their global recruitment footprint across Africa and the Middle East.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">High</h3>
               <p className="text-gray-500 font-bold">ROI & Conversion</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Serena Hotel</h3>
               <p className="text-gray-700 font-bold">Premium Venue</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Top Indian Institutions Choose <span className="text-secondary">Dar es Salaam</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Strengthen your presence in East Africa's most promising student market.</p>
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
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Ready to Recruit in the Tanzanian Market?</h3>
                  <p className="text-gray-500 mb-8 text-sm">Prime locations and major sponsorship benefits are reserved for early partners.</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest border-b border-gray-200 pb-2">Edunial Groups Info</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Email:</strong> info@ihecf.info | partnerships@ihecf.info</p>
                    <p className="text-sm text-gray-600 mb-2"><strong className="text-primary">Web:</strong> www.ihecf.info</p>
                    <p className="text-sm text-gray-600"><strong className="text-primary">Phone / WhatsApp:</strong> +91-9654448283 / 9319477335</p>
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
         IHECF Tanzania 2026-27 | Indian Higher Education & Career Fair Dar es Salaam | Study in India Fair Tanzania | Education Exhibition Dar es Salaam Serena Hotel<br/>
         Connecting Tanzanian Students with India’s Finest Universities | Expanding Educational Horizons in East Africa
      </div>
    </div>
  );
};

export default TanzaniaEvent;
