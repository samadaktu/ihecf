import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, Medal, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const KSAEvent = () => {
  const highlights = [
    "Direct access to one of the largest and most academically focused Indian expat communities globally",
    "Scheduled across 4 key cities: Riyadh, Dammam, Al Jubail, and Jeddah",
    "Engage with CBSE, ISC, IB, and international curricula school leadership & counselors",
    "Hosted at the prestigious International Indian School venues across the Kingdom",
    "Interact directly with parents who are the primary decision-makers in the GCC region",
    "Establish long-term recruitment pipelines with local schools and diaspora community groups"
  ];

  const whyParticipate = [
    { 
      title: "Direct Access to Prospects", 
      desc: "Meet pre-qualified Grade XI and XII students who are actively exploring higher education and preparing to make critical decisions.",
      icon: <Users /> 
    },
    { 
      title: "Influential Parent Engagement", 
      desc: "Address family concerns regarding admissions, affordability, safety, placement track records, and campus facilities directly.",
      icon: <Medal /> 
    },
    { 
      title: "Strengthen Brand Presence", 
      desc: "Position your institution among India's leading national and private universities while enhancing GCC market visibility.",
      icon: <Target /> 
    },
    { 
      title: "Generate Qualified Leads", 
      desc: "Capture targeted student inquiries and build robust databases for upcoming intakes and enrollment cycles.",
      icon: <Sparkles /> 
    },
    { 
      title: "Expand Outreach Networks", 
      desc: "Build strategic relations with school management, principals, career counselors, and key local education stakeholders.",
      icon: <Building2 /> 
    },
    { 
      title: "Showcase Opportunities", 
      desc: "Present merit-based scholarships, international credit transfers, research programs, and employability statistics directly.",
      icon: <Globe /> 
    },
  ];

  const eventSchedule = [
    { date: "25 October 2026", city: "Riyadh", venue: "International Indian School, Riyadh", timings: "04:00 PM – 09:00 PM" },
    { date: "27 October 2026", city: "Dammam", venue: "International Indian School, Dammam", timings: "04:00 PM – 09:00 PM" },
    { date: "28 October 2026", city: "Al Jubail", venue: "International Indian School, Jubail", timings: "04:00 PM – 09:00 PM" },
    { date: "29 October 2026", city: "Jeddah", venue: "International Indian School, Jeddah", timings: "04:00 PM – 09:00 PM" }
  ];

  const whoWillAttend = [
    "Students from Grades XI & XII of leading schools",
    "Recent school graduates seeking immediate intakes",
    "Parents and guardians looking for reliable counsel",
    "School principals, career advisors, and counselors",
    "GCC community leaders and education influencers"
  ];

  const keyFeatures = [
    "Premium Exhibition Spaces with dedicated custom institutional booths",
    "Dedicated One-to-One Counselling Zones for personalized interactions",
    "Strategic pre-event digital campaigns and localized school promotions",
    "Networking opportunities with local school leadership & community councils",
    "Sponsorship options for Welcome Reception, Kit Branding, & Seminars",
    "Post-event database access to prospective student leads"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="IHECF Saudi Arabia 2026 | Indian Higher Education Fair Riyadh Dammam Jeddah" 
        description="Expand your university outreach. Exhibit at the premier Indian Higher Education & Career Fair in Riyadh, Dammam, Al Jubail & Jeddah. Secure your booth today."
        keywords="IHECF KSA 2026, Indian Education Fair Saudi Arabia, Study in India Fair Riyadh, University Recruitment Saudi, International Indian School Jeddah"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "IHECF Saudi Arabia 2026 | Indian Higher Education Fair Riyadh Dammam Jeddah",
          "description": "Expand your university outreach. Exhibit at the premier Indian Higher Education & Career Fair in Riyadh, Dammam, Al Jubail & Jeddah. Secure your booth today.",
          "startDate": "2026-10-25T16:00:00+03:00",
          "endDate": "2026-10-29T21:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": eventSchedule.map(sched => ({
            "@type": "Place",
            "name": sched.venue,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": sched.city,
              "addressCountry": "Saudi Arabia"
            }
          })),
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
          <img src="/saudi_landmark.png" alt="Riyadh Skyline Saudi Arabia" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 hover:gap-6 transition-all">
            <ArrowLeft size={14} /> Back to Global Map
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary mb-6 border border-secondary/20">
                <Globe size={14} /> KSA Recruitment Tour | 4 Major Cities
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                IHECF <span className="text-secondary italic">Saudi Arabia 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Riyadh | Dammam | Al Jubail | Jeddah</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">India’s Premier Higher Education Recruitment Platform in the Kingdom of Saudi Arabia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Connect your university directly with one of the world's largest, most academically focused, and affluent Indian expat student communities across four major economic hubs of KSA.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/university-registration" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Register as Exhibitor Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Tour Overview</h3>
               <div className="space-y-6">
                   <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                         <Calendar size={20} />
                      </div>
                      <div>
                         <div className="text-lg font-black text-white">25 - 29 Oct 2026</div>
                         <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">5-Day Multi-City Tour</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 group border-t border-white/10 pt-4">
                      <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0">
                         <MapPin size={20} />
                      </div>
                      <div className="text-xs text-gray-300 space-y-1">
                         <div><strong>Riyadh</strong> — Oct 25 (IIS Riyadh)</div>
                         <div><strong>Dammam</strong> — Oct 27 (IIS Dammam)</div>
                         <div><strong>Al Jubail</strong> — Oct 28 (IIS Jubail)</div>
                         <div><strong>Jeddah</strong> — Oct 29 (IIS Jeddah)</div>
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
              The Indian Higher Education & Career Fair (IHECF) – Saudi Arabia 2026, organized by Edunial Group, is one of the most prestigious and result-oriented international student recruitment initiatives designed exclusively for Indian and international universities seeking to expand their presence in the Gulf region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Scheduled across four major cities of the Kingdom—Riyadh, Dammam, Al Jubail, and Jeddah—IHECF Saudi Arabia 2026 will bring together thousands of academically accomplished students, parents, school counsellors, and education decision-makers from leading Indian curriculum schools (CBSE/ISC) and international schools across the Kingdom.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              With a proven track record of delivering high-quality student engagement and institutional visibility, IHECF serves as a powerful platform for universities to showcase their programs, interact directly with prospective students, strengthen their international recruitment strategies, and build sustainable enrollment pipelines from one of the most promising overseas student markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">30k+</h3>
               <p className="text-gray-500 font-bold">Diaspora Reach</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">4 Cities</h3>
               <p className="text-gray-700 font-bold">Comprehensive Tour</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Official Tour <span className="text-secondary">Schedule</span></h2>
             <p className="text-gray-500 text-lg max-w-2xl mx-auto">Detailed dates, venues, and timings for the KSA Tour.</p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-xl">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-primary text-white text-xs uppercase tracking-widest border-b border-primary/20">
                      <th className="py-6 px-8">Date</th>
                      <th className="py-6 px-8">City</th>
                      <th className="py-6 px-8">Official Venue</th>
                      <th className="py-6 px-8">Daily Timing</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {eventSchedule.map((sched, idx) => (
                     <tr key={idx} className="hover:bg-gray-50/80 transition-all font-semibold text-sm text-gray-700">
                        <td className="py-6 px-8 text-primary font-black">{sched.date}</td>
                        <td className="py-6 px-8">
                           <span className="inline-block px-3 py-1 bg-secondary/15 text-secondary text-xs rounded-full font-black uppercase tracking-wider">{sched.city}</span>
                        </td>
                        <td className="py-6 px-8 text-gray-600">{sched.venue}</td>
                        <td className="py-6 px-8 flex items-center gap-2 text-gray-500">
                           <Clock size={16} className="text-secondary shrink-0" />
                           {sched.timings}
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Why Saudi Arabia? */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Why <span className="text-secondary">Saudi Arabia?</span></h2>
               <div className="w-20 h-1 bg-secondary mb-8"></div>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Saudi Arabia is home to one of the largest and most academically focused Indian expatriate communities in the world. Every year, thousands of students from CBSE, ISC, IB, and international curricula seek admission to leading universities in India and abroad.
               </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                  The Kingdom's growing demand for quality higher education and career guidance makes it an exceptionally attractive recruitment destination for universities looking to engage directly with motivated and well-informed students.
               </p>
            </div>
            
            <div className="lg:col-span-6 bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100">
               <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider">High-Demand Disciplines Seekers</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Engineering & Technology", "Medicine & Allied Health",
                    "Management & Commerce", "Law & Juridical Studies",
                    "Architecture & Design", "Artificial Intelligence & AI",
                    "Liberal Arts & Humanities", "Aviation & Hospitality",
                    "Emerging Tech & Future Skills"
                  ].map((field, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                       <div className="w-2 h-2 bg-secondary rounded-full" />
                       <span className="text-xs font-bold text-gray-700">{field}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Why Participate - Bento Layout */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Partner with Us in <span className="text-secondary">KSA 2026</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Key opportunities and institutional rewards designed to maximize your recruitment yields.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Who Will Attend & Key Features */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Users className="text-secondary" size={32} /> Who Will Attend?
            </h2>
            <div className="space-y-4">
              {whoWillAttend.map((attendee, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <p className="text-gray-600 font-bold text-sm md:text-base">{attendee}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 relative z-10">Event Key <span className="text-secondary">Features</span></h2>
            <div className="space-y-4 relative z-10">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <Building2 size={20} className="text-secondary flex-shrink-0" />
                  <p className="font-bold text-sm text-gray-100 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnering & CTA */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Why Partner with <span className="text-secondary">Edunial Group?</span></h2>
               <p className="text-gray-600 text-sm leading-relaxed mb-6 font-semibold">
                  For over a decade, Edunial Group has been at the forefront of international education promotion, student recruitment, and institutional engagement across the GCC, Asia, and other emerging education markets.
               </p>
               <p className="text-gray-500 text-xs leading-relaxed mb-8">
                  Our expertise, extensive school network, strong community relationships, and proven execution capabilities have made IHECF one of the most trusted education recruitment platforms for universities seeking meaningful international outreach and measurable recruitment outcomes.
               </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Enhance international student recruitment globally",
                  "Strengthen institutional brand visibility in Gulf",
                  "Access highly motivated emerging student cohorts",
                  "Build long-term robust enrollment pipelines",
                  "Foster sustainable collaborations with local counselors"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-xs font-bold leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Limited Booth Availability</span>
                  <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Secure Your Participation Today</h3>
                  <p className="text-gray-500 mb-8 text-sm">Join leading universities and higher education institutions at IHECF – 2026 (Saudi Arabia) and connect with one of the most promising student communities in the Gulf region.</p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <h4 className="font-bold text-primary mb-4 text-xs uppercase tracking-widest border-b border-gray-200 pb-2">Edunial Group Contact</h4>
                    <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Email:</strong> info@ihecf.info | reachedunial@gmail.com</p>
                    <p className="text-xs text-gray-600 mb-2"><strong className="text-primary">Web:</strong> www.ihecf.info</p>
                    <p className="text-xs text-gray-600"><strong className="text-primary">Phone / WhatsApp:</strong> +91-9654448283 / 9319473355</p>
                  </div>

                  <Link to="/university-registration" className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2 font-bold">
                    Register Your Institution <ArrowRight size={18} />
                  </Link>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Connect. Recruit. Expand.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Saudi Arabia 2026 | Indian Education Fair Riyadh | Dammam, Jubail, Jeddah Exhibitions | Study in India Recruitment KSA<br/>
         Connecting Saudi & Indian Expatriates with India’s Renowned Universities | Managed by Edunial Group
      </div>
    </div>
  );
};

export default KSAEvent;
