import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';

const EthiopiaEvent = () => {
  const highlights = [
    "High-Impact Recruitment Platform in East Africa connecting Indian universities with motivated Ethiopian students",
    "Promote all three location options (India, Dubai, and Malaysia) under one brand identity",
    "Direct face-to-face interaction and counseling with prospective undergraduate and postgraduate candidates and parents in Ethiopia",
    "Establish MOU collaborations and strategic partnerships with Ethiopian schools, universities, and education agencies",
    "Showcase NEP 2020-aligned programs: multidisciplinary, skill-based, and industry-linked",
    "Targeted recruitment with pre-registered student leads matched by study interests"
  ];

  const whyParticipate = [
    { title: "Access High-Quality Students", desc: "Meet academically strong Ethiopian students actively seeking affordable, globally recognized education in engineering, medicine, health sciences, agriculture, management, and IT.", icon: <Users /> },
    { title: "Showcase Multi-Location Options", desc: "Promote campuses and partnerships across India, Dubai, and Malaysia under one brand, highlighting flexible study paths.", icon: <Globe /> },
    { title: "Direct On-Spot Applications", desc: "Engage face-to-face for counseling, booth showcases, pre-screening, and instant lead collection.", icon: <Medal /> },
    { title: "Build Long-Term Partnerships", desc: "Connect with Ethiopian schools, colleges, and education agencies to explore dual degrees, joint research, and capacity building.", icon: <Building2 /> },
    { title: "Boost Brand Visibility", desc: "Gain massive exposure via Edunial Group's media partnerships, social media, and localized outreach in Addis Ababa and beyond.", icon: <Sparkles /> },
    { title: "Targeted Recruitment Fairs", desc: "Exhibit programs directly to student groups pre-filtered by specific interest areas for superior ROI.", icon: <Target /> },
  ];

  const coreBenefits = [
    { title: "Premium Exhibition Space", desc: "Branded booth in Ethiopia with space for banners, brochures, digital displays, and interactive student counseling." },
    { title: "Pre-Registered Leads", desc: "Direct access to profiles of students pre-registered by interest areas (engineering, medicine, management, IT, etc.)." },
    { title: "Admission & Scholarship Promo", desc: "Highlight scholarships and present clear entry requirements to high-intent applicants." },
    { title: "Speaking Opportunities", desc: "Participate in expert panels on Africa-India education partnerships or deliver short presentations." },
    { title: "Placement Insights Session", desc: "Host sessions on career pathways, internships, and global alumni placement success." },
    { title: "Marketing & Lead Support", desc: "Coverage in event catalogs and digital campaigns, combined with post-event lead follow-up support." }
  ];

  const whoShouldParticipate = [
    "Indian Universities (Public & Private) looking to expand in Africa.",
    "Indian Colleges & Institutes offering degree and diploma programs.",
    "Universities with Campuses or academic partnerships in Dubai or Malaysia.",
    "Institutions offering NEP 2020-aligned programs.",
    "Student support services including visa consultants, educational loan providers, and test preparation centres."
  ];

  const registrationSteps = [
    { step: "Step 1", title: "Check Availability", desc: "Contact Edunial Group to confirm booth availability, official event dates, and timings for the Ethiopia tour." },
    { step: "Step 2", title: "Submit Application", desc: "Fill in the University/College Participation Form detailing your institution name, courses to promote, and preferred location preferences." },
    { step: "Step 3", title: "Confirm & Customize", desc: "Choose your exhibition booth size, configuration, and design options. Submit your logos, banners, and brochures for setup." },
    { step: "Step 4", title: "Prepare Student Plan", desc: "Decide on exclusive scholarships, fee discounts, or special offers for Ethiopian students. Train your counseling team." },
    { step: "Step 5", title: "Join IHECF Ethiopia", desc: "Attend the fair in Addis Ababa, engage directly with thousands of student cohorts, collect leads, and finalize admissions." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Ethiopia 2026-27 | Indian Higher Education & Career Fair" 
        description="Connect with motivated Ethiopian students at IHECF Ethiopia. Showcase your programs in India, Dubai & Malaysia. Expand your university recruitment in East Africa."
        keywords="IHECF Ethiopia 2026, Indian Education Fair Addis Ababa, Study in India Fair Ethiopia, Education Exhibition Ethiopia, Africa Student Recruitment"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Ethiopia 2026-27 | Indian Higher Education & Career Fair",
          "description": "Strategic platform connecting universities and colleges with thousands of aspiring Ethiopian students and parents exploring options in India, Dubai, and Malaysia.",
          "startDate": "2026-11-01T09:00:00+03:00",
          "endDate": "2026-11-30T17:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Addis Ababa, Ethiopia",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Addis Ababa",
              "addressCountry": "Ethiopia"
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
          <img src="/ethiopia_landmark.png" alt="Lalibela Rock Church Ethiopia Landmark" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/upcoming-events" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Event Calendar
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> East African Market | High-Quality Student Cohorts
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Ethiopia 2026-27</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Addis Ababa Edition</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Empowering Ethiopia’s Students with Global Education Opportunities in India, Dubai & Malaysia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Edunial Group presents IHECF Ethiopia 2026-27, a premium recruitment initiative helping Indian universities, colleges, and campuses in Dubai and Malaysia connect directly with thousands of qualified, career-driven students in Ethiopia.
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
                          <div className="text-lg font-black text-white">Addis Ababa</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Location</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                          <Clock size={20} />
                      </div>
                      <div>
                          <div className="text-lg font-black text-white">To be announced</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Timings</div>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">About the <span className="text-secondary italic">Ethiopia Fair</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              IHECF-2026-27 (Ethiopia) is organized by Edunial Group to serve as a strategic platform to expand your presence in East Africa and recruit high-intent, qualified student cohorts from Ethiopia and the surrounding region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a growing demand in Ethiopia for globally recognized, affordable, and high-value education, the event offers a direct face-to-face platform to engage with prospective undergraduate and postgraduate candidates, discuss scholarships, evaluate credentials on-spot, and build sustainable enrollment channels in this expanding market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">East Africa</h3>
               <p className="text-gray-500 font-bold">Key Recruitment Corridor</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">High-Quality</h3>
               <p className="text-gray-700 font-bold">Student Profiles</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Participate in IHECF <span className="text-secondary">Ethiopia?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Key opportunities and institutional rewards designed to maximize your recruitment yields in Ethiopia and the surrounding region.</p>
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

      {/* Highlights & Core Benefits */}
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
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 relative z-10">What You <span className="text-secondary">Get</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {coreBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <Award size={18} className="text-secondary mb-2" />
                  <h4 className="font-bold text-sm text-white mb-1">{benefit.title}</h4>
                  <p className="text-xs text-gray-300 leading-normal">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">How to <span className="text-secondary">Register</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Five simple steps to secure your institution's participation at IHECF Ethiopia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {registrationSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm relative group hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-black text-xs uppercase mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {step.step}
                </div>
                <h4 className="font-bold text-primary mb-2 text-base leading-tight">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Participate & CTA */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-8">Who Should <span className="text-secondary">Participate?</span></h2>
            <div className="space-y-4">
              {whoShouldParticipate.map((participant, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Building2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm font-semibold leading-relaxed">{participant}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-inner">
              <h3 className="text-lg font-bold text-primary mb-3">Partner with Edunial Group in Ethiopia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect with thousands of future global graduates from Ethiopia and Africa. Join IHECF-2026-27 and make Ethiopia your next successful recruitment market in Africa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Limited Booth Availability</span>
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Book Your Exhibition Stall</h3>
                <p className="text-gray-500 mb-8 text-sm">Join prestigious institutions at the Ethiopia edition. Booths are allocated on a first-come, first-served basis.</p>
                
                <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                  <h4 className="font-bold text-primary mb-4 text-xs uppercase tracking-widest border-b border-gray-200 pb-2">Edunial Group Organizer</h4>
                  <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Email:</strong> reachedunial@gmail.com | info@ihecf.info</p>
                  <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Phone:</strong> 9654448283 / 9319473355</p>
                  <p className="text-xs text-gray-600"><strong className="text-primary">Web:</strong> www.ihecf.info | www.edunialgroup.com</p>
                </div>

                <Link to="/contact?subject=IHECF Ethiopia University Registration" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2 font-bold shadow-lg shadow-secondary/10">
                  Register Your Institution <ArrowRight size={18} />
                </Link>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Connect. Recruit. Expand.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Ethiopia 2026-27 | Indian Education Fair Addis Ababa | Study in India, Dubai & Malaysia Recruitment Fair Ethiopia | Organized by Edunial Group<br/>
         Connecting Ethiopian and African Students with Renowned Global Universities
      </div>
    </div>
  );
};

export default EthiopiaEvent;
