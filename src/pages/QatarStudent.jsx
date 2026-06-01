import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, GraduationCap, Sparkles, Clock, BookOpen, Send } from 'lucide-react';
import SEO from '../components/SEO';

const QatarStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const unmissablePoints = [
    { title: "Meet Premier Universities", desc: "Interact directly with Admissions Directors and Deans from IITs, NITs, IIMs, and top-tier private institutions under one roof." },
    { title: "Direct Admissions Advice", desc: "Get comprehensive guidance on Undergraduate, Postgraduate, PhD, Diploma, and Professional courses." },
    { title: "Scholarships & Spot Offers", desc: "Access exclusive spot admission offers, application fee waivers, and early-bird institutional scholarships." },
    { title: "Live Counseling Sessions", desc: "Participate in real-time counseling on admissions, visa processing, student accommodation, and credit transfers." },
    { title: "Expert Panel Seminars", desc: "Attend expert-led tracks on studying in India, global career prospects, and recognition of degrees in the Gulf region." },
    { title: "Dedicated Parents Session", desc: "Evening tracks designed to answer parent queries about campus safety, placement records, academic quality, and ROI." }
  ];

  const highlights = [
    "Dedicated Parents Track (4:00 PM – 9:00 PM): Addressing academic quality, safety, placements, and long-term career success.",
    "One-on-One Counseling Zones with senior education advisors and university experts.",
    "Exclusive guidance for the Indian Expatriate Diaspora in Qatar."
  ];

  const whoShouldAttend = [
    "Grade 11 & 12 Students & Parents planning for higher education",
    "Undergraduate students seeking high-quality postgraduate opportunities in India",
    "Working professionals seeking executive or higher education programs",
    "Indian expatriate families looking for affordable, top-tier options",
    "School principals, career guidance counselors, and education advisors"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('grade', formData.grade);
    data.append('course', formData.course);
    data.append('event_title', 'IHECF Qatar 2026 - Student & Parent Session');
    data.append('event_country', 'Qatar (Student Edition)');
    data.append('_subject', `New Student RSVP: IHECF Qatar 2026 (Doha)`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@ihecf.info", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', grade: '', course: '' });
        setTimeout(() => setShowSuccess(false), 8000);
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Student Guide: IHECF Qatar 2026 | Study in India Doha" 
        description="Discover world-class Indian higher education in Doha. Meet top universities at MES Indian School. Pre-register for free admissions counseling & scholarships."
        keywords="Study in India Qatar, IHECF Qatar Student Fair, Education Fair Doha, MES Indian School Doha, Indian Universities Doha"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "Student Guide: IHECF Qatar 2026 | Study in India Doha",
          "description": "Discover world-class Indian higher education in Doha. Meet top universities at MES Indian School. Pre-register for free admissions counseling & scholarships.",
          "startDate": "2026-09-24T08:00:00+03:00",
          "endDate": "2026-09-24T21:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "MES Indian School",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Doha",
              "addressCountry": "Qatar"
            }
          },
          "offers": {
            "@type": "Offer",
            "url": "https://ihecf.info/qatar-student",
            "price": "0",
            "priceCurrency": "QAR",
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
          <img src="/qatar_education_fair.png" alt="Qatar Doha Skyline" className="w-full h-full object-cover opacity-35 scale-105" />
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
                Qatar <span className="text-secondary italic">Edition 2026</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Student & Parent Fair</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Empowering Futures | Connecting Opportunities | Shaping Global Careers</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Get ready for Qatar’s most prestigious higher education fair. Discover world-class undergraduate, postgraduate, and professional opportunities. Connect with top Indian universities directly at MES Indian School, Doha.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#rsvp-form" className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Pre-Register / RSVP for Free <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Schedule & Timings</h3>
               <div className="space-y-6">
                   <div className="flex items-start gap-3.5">
                       <Clock size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">08:00 AM – 02:00 PM</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Main Education Fair</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-3.5">
                       <Clock size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">02:00 PM – 04:00 PM</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Networking Lunch</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-3.5">
                       <Clock size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">04:00 PM – 09:00 PM</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Exclusive Parents Session</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                       <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">MES Indian School</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Doha, Qatar</div>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">Discover World-Class <span className="text-secondary italic">Indian Education</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Indian Higher Education & Career Fair-2026 (Qatar Edition) is a landmark event created specifically for the expatriate families and local students residing in Doha. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              India has emerged as a global hub of educational excellence. This fair offers a unique opportunity for students to compare institutions, engage face-to-face with academics, secure immediate scholarships, and select the right pathways for international success.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary mt-4">
              <p className="text-sm text-gray-500 italic">
                "Are you a representative from a higher education institution? Visit our dedicated <Link to="/country/qatar" className="text-secondary font-bold underline">University Exhibitor Page</Link> for booth registrations."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">24th</h3>
               <p className="text-gray-500 font-bold">Sept 2026 Event Date</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">MES</h3>
               <p className="text-gray-700 font-bold">Doha School Venue</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend - Bento Grid */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why This Fair is <span className="text-secondary">Unmissable</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Secure a brighter academic future with top credentials.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unmissablePoints.map((item, index) => (
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
        </div>
      </section>

      {/* Special Highlights & Who Should Attend */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Sparkles className="text-secondary" size={32} /> Special Fair Highlights
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 relative z-10">Who Should <span className="text-secondary">Attend?</span></h2>
            <div className="space-y-4 relative z-10">
              {whoShouldAttend.map((participant, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <Users size={20} className="text-secondary flex-shrink-0" />
                  <p className="font-bold text-sm">{participant}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section id="rsvp-form" className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center mb-8">
              <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Free Student & Parent Entry</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">Pre-Register / RSVP Online</h2>
              <p className="text-gray-500 text-sm">Fill in the quick registration form to receive your free entry pass, counseling slot, and access to scholarship guides.</p>
            </div>

            {showSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center relative z-10 max-w-xl mx-auto">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-green-800 font-bold text-xl mb-2">Registration Successful!</h3>
                <p className="text-green-700 text-sm mb-4">Your RSVP pass for IHECF Qatar 2026 (Doha) has been confirmed. We have sent a confirmation details details to your email.</p>
                <div className="text-left text-xs bg-white p-4 rounded-lg border border-green-100 text-gray-600">
                  <strong>Venue:</strong> MES Indian School, Doha<br/>
                  <strong>Date:</strong> Thursday, 24th September 2026<br/>
                  <strong>Parents Track:</strong> Starts at 04:00 PM
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter student / parent name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-secondary focus:border-secondary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-secondary focus:border-secondary text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Phone / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +974 5555 1234" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-secondary focus:border-secondary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Current Class / Education</label>
                    <select 
                      name="grade" 
                      required
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-secondary focus:border-secondary text-sm bg-white"
                    >
                      <option value="">Select current status</option>
                      <option value="Grade 11">Grade 11 Student</option>
                      <option value="Grade 12">Grade 12 Student</option>
                      <option value="Undergraduate">Undergraduate Student</option>
                      <option value="Parent">Parent of Student</option>
                      <option value="Other">Other Expatriate / Professional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Preferred Field of Study</label>
                  <select 
                    name="course" 
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-secondary focus:border-secondary text-sm bg-white"
                  >
                    <option value="">Select course of interest</option>
                    <option value="Medicine / MBBS">Medicine / MBBS / Allied Health</option>
                    <option value="Engineering / BTech">Engineering / Technology</option>
                    <option value="Business / MBA / BBA">Business Administration / Commerce</option>
                    <option value="Computer Science / IT">Computer Science / IT / AI</option>
                    <option value="Pharmacy / Science">Pharmacy / Applied Sciences</option>
                    <option value="Arts / Design / Hospitality">Arts, Design & Humanities</option>
                    <option value="Other / Undecided">Other / Undecided</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-secondary w-full py-4 text-base flex justify-center items-center gap-2.5 shadow-xl hover:shadow-2xl transition-all"
                >
                  {isSubmitting ? 'Registering...' : 'Submit Pre-Registration Pass'} 
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Qatar 2026 Student Portal | Study in India Doha Fair | MES Indian School Doha Event | Indian Expatriate Student Admission Qatar<br/>
         Connecting Qatari & Indian Expat Students with Top Higher Education Universities | Managed by Edunial Groups
      </div>
    </div>
  );
};

export default QatarStudent;
