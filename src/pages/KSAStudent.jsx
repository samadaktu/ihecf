import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, GraduationCap, Sparkles, Clock, BookOpen, Send } from 'lucide-react';
import SEO from '../components/SEO';

const KSAStudent = () => {


  const eventSchedule = [
    {
      city: "Riyadh",
      date: "25 October 2026",
      venue: "International Indian School, Riyadh",
      timings: "04:00 PM – 09:00 PM",
    },
    {
      city: "Dammam",
      date: "27 October 2026",
      venue: "International Indian School, Dammam",
      timings: "04:00 PM – 09:00 PM",
    },
    {
      city: "Al Jubail",
      date: "28 October 2026",
      venue: "International Indian School, Jubail",
      timings: "04:00 PM – 09:00 PM",
    },
    {
      city: "Jeddah",
      date: "29 October 2026",
      venue: "International Indian School, Jeddah",
      timings: "04:00 PM – 09:00 PM",
    }
  ];

  const whyAttend = [
    { 
      title: "Meet Top Universities Face-to-Face", 
      desc: "Interact directly with admissions representatives from renowned universities and colleges. Get authentic information about programs, admissions, campus life, placements, and career prospects." 
    },
    { 
      title: "Explore Hundreds of Academic Programs", 
      desc: "Discover undergraduate, postgraduate, diploma, and professional courses across diverse disciplines including: Engineering, Medicine, Business Management, AI & Data Science, Law, Architecture, Design, and Aviation." 
    },
    { 
      title: "Receive Personalized Career Guidance", 
      desc: "Speak with experienced counsellors and university experts who can help you identify the right academic pathway based on your interests, strengths, and career goals." 
    },
    { 
      title: "Learn About Scholarships & Financial Aid", 
      desc: "Explore merit-based scholarships, tuition fee waivers, education financing options, and special benefits available for international students." 
    },
    { 
      title: "Understand Admission Processes", 
      desc: "Get detailed guidance on eligibility criteria, entrance examinations, application procedures, documentation requirements, and admission timelines." 
    },
    { 
      title: "Connect with Industry-Relevant Institutions", 
      desc: "Discover universities that offer strong placement records, industry collaborations, international exposure, research opportunities, and global career pathways." 
    }
  ];

  const whoShouldAttend = [
    "Students of Grades XI & XII looking at higher education paths",
    "CBSE, ISC, IB, IGCSE and International Curriculum Students",
    "Recent School Graduates planning their university intake",
    "Students seeking direct undergraduate & diploma admissions",
    "Students seeking authentic career and academic guidance",
    "Parents looking for reliable university and tuition information"
  ];

  const parentBenefits = [
    "Interact directly with university officials & decision makers",
    "Understand course structures, fees, and post-study career outcomes",
    "Learn about secure campus facilities, hostels, and student support",
    "Explore merit and expat scholarship opportunities",
    "Clarify concerns related to admissions safety, placements, and ROI"
  ];

  const whatToExpect = [
    { title: "University Exhibition", desc: "Meet representatives from leading universities and institutions directly." },
    { title: "One-to-One Counselling", desc: "Receive personalized guidance on courses, admissions, and career planning." },
    { title: "Career Guidance Sessions", desc: "Gain insights into future career trends, emerging industries, and in-demand skills." },
    { title: "Scholarship Information", desc: "Learn about funding opportunities and financial support options." },
    { title: "Admission Support", desc: "Get assistance with applications, eligibility requirements, and admission procedures." },
    { title: "Interactive Engagement", desc: "Ask questions, compare options, and make informed decisions about your future." }
  ];

  const trustFactors = [
    "Trusted university participation with direct official representations.",
    "Reliable and unbiased higher education guidance & information.",
    "Student-focused counseling sessions tailoring academic tracks to individual skills.",
    "Direct admissions access to skip delays and get immediate eligibility feedback.",
    "Comprehensive guidance covering courses, fee structures, and campus life."
  ];



  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Student Guide: IHECF Saudi Arabia 2026 | Study in India Riyadh Dammam Jubail Jeddah" 
        description="Connect with leading Indian universities in KSA. Attend free career counselling & secure scholarships in Riyadh, Dammam, Al Jubail & Jeddah."
        keywords="Study in India Saudi Arabia, IHECF KSA 2026, Education Fair Riyadh, International Indian School Jeddah, Dammam, Jubail, Indian Universities KSA"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "Student Guide: IHECF Saudi Arabia 2026 | Study in India KSA",
          "description": "Connect with leading Indian universities in KSA. Attend free career counselling & secure scholarships in Riyadh, Dammam, Al Jubail & Jeddah.",
          "startDate": "2026-10-25T16:00:00+03:00",
          "endDate": "2026-10-29T21:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": [
            {
              "@type": "Place",
              "name": "International Indian School, Riyadh",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressCountry": "Saudi Arabia"
              }
            },
            {
              "@type": "Place",
              "name": "International Indian School, Dammam",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dammam",
                "addressCountry": "Saudi Arabia"
              }
            },
            {
              "@type": "Place",
              "name": "International Indian School, Jubail",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Jubail",
                "addressCountry": "Saudi Arabia"
              }
            },
            {
              "@type": "Place",
              "name": "International Indian School, Jeddah",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "Saudi Arabia"
              }
            }
          ],
          "offers": {
            "@type": "Offer",
            "url": "https://ihecf.info/student/ksa",
            "price": "0",
            "priceCurrency": "SAR",
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
          <img src="/ksa_education_event.png" alt="Saudi Arabia Skyline / Event Image" className="w-full h-full object-cover opacity-35 scale-105" />
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
                Saudi Arabia <span className="text-secondary italic">Edition 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Riyadh | Dammam | Al Jubail | Jeddah</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Your Gateway to India's Leading Universities and Global Career Opportunities</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Dreaming of a successful future? Planning your higher education journey? Meet representatives from leading universities and higher education institutions from India and beyond—all under one roof.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#rsvp-form" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Pre-Register / RSVP for Free <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Event Tour Calendar</h3>
               <div className="space-y-4">
                   {eventSchedule.map((sched, idx) => (
                     <div key={idx} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                         <Calendar size={16} className="text-secondary shrink-0 mt-0.5" />
                         <div>
                            <div className="text-xs font-black text-white">{sched.city} — {sched.date.split(' ')[0]} {sched.date.split(' ')[1]}</div>
                            <div className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{sched.venue.split(',')[0]}</div>
                         </div>
                     </div>
                   ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">Kingdom of Saudi Arabia <span className="text-secondary italic">2026 Fair</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Organized by Edunial Group, IHECF Saudi Arabia 2026 is one of the largest and most trusted higher education events in the Kingdom, bringing together students, parents, education experts, and top universities to help students make informed decisions about their academic and professional futures.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are considering Engineering, Medicine, Management, Law, Architecture, Design, Artificial Intelligence, Data Science, Liberal Arts, or other emerging fields, IHECF provides direct access to the information and guidance you need to shape your future.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary mt-4">
              <p className="text-sm text-gray-500 italic">
                "Are you a representative from a higher education institution? Visit our dedicated <Link to="/country/ksa" className="text-secondary font-bold underline">University Exhibitor Page</Link> for registrations."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">4 Cities</h3>
               <p className="text-gray-500 font-bold">Riyadh, Dammam, Jubail, Jeddah</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Free</h3>
               <p className="text-gray-700 font-bold">Admissions Entrance Pass</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Event Schedule */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Event <span className="text-secondary">Schedule</span></h2>
             <p className="text-gray-500 text-lg max-w-2xl mx-auto">Find when the fair is coming to your city in Saudi Arabia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {eventSchedule.map((sched, idx) => (
               <div key={idx} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                        <MapPin size={10} /> {sched.city}
                     </div>
                     <h3 className="text-2xl font-black text-primary mb-4">{sched.date}</h3>
                     <p className="text-gray-600 text-sm font-bold flex gap-2 mb-2">
                        <Clock size={16} className="text-secondary shrink-0 mt-0.5" />
                        {sched.timings}
                     </p>
                     <p className="text-gray-500 text-sm leading-relaxed">{sched.venue}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-50">
                     <a href="#rsvp-form" className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                        Pre-Register for {sched.city} <ArrowRight size={14} />
                     </a>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Attend IHECF – 2026 (KSA)? */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Attend IHECF – <span className="text-secondary">2026 (KSA)?</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Accelerate your university search process and gain competitive advantages.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyAttend.map((item, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent-light text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Attend & Benefits for Parents */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Users className="text-secondary" size={32} /> Who Should Attend?
            </h2>
            <div className="space-y-4">
              {whoShouldAttend.map((participant, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-gray-600 font-bold text-sm md:text-base">{participant}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 relative z-10">Benefits for <span className="text-secondary">Parents</span></h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 relative z-10">Choosing the right university is one of the most important decisions for any family. IHECF provides parents with an opportunity to:</p>
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

      {/* What You Can Expect & Why Students Trust */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Sparkles className="text-secondary" size={32} /> What You Can Expect at the Fair
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whatToExpect.map((expect, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary mb-2 text-base">{expect.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{expect.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-6">Why Students Trust <span className="text-secondary">IHECF</span></h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">For years, IHECF has helped thousands of students and parents across the Gulf region connect with leading educational institutions and make confident higher education choices.</p>
            <div className="space-y-4">
              {trustFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed font-semibold">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp-form" className="py-16 md:py-24 bg-primary text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white text-primary rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden text-center">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Sparkles className="text-secondary animate-pulse" size={14} /> Entry is Free for Students & Parents
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                Register for Saudi Arabia Fair 2026
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                Join thousands of students building their academic future at Saudi Arabia's premier higher education & career fair. Explore scholarships, meet top-tier universities, and get expert career guidance.
              </p>
              
              <button 
                onClick={(e) => { e.preventDefault(); }}
                className="btn-secondary py-4 px-12 text-base md:text-lg flex justify-center items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-2xl"
              >
                Register Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Saudi Arabia 2026 Student Portal | Study in India KSA Fair | Riyadh, Dammam, Al Jubail, Jeddah Events | Indian Expatriate Student Admission KSA<br/>
         Connecting Saudi & Indian Expat Students with Top Higher Education Universities | Managed by Edunial Group
      </div>
    </div>
  );
};

export default KSAStudent;
