import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, GraduationCap, Sparkles, Clock, BookOpen, Building2, Send } from 'lucide-react';
import SEO from '../components/SEO';

const UgandaStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const studyInIndiaReasons = [
    { title: "World-Class Programs", desc: "Access top programs in Engineering, Medicine, Management, IT, Sciences, Humanities, and Design with graduates working globally." },
    { title: "Affordable High-Value Education", desc: "Tuition fees and living costs in India are far lower than in the US, UK, Canada, or Australia, without compromising on quality." },
    { title: "NEP 2020 Flexibility", desc: "Benefit from multidisciplinary programs, flexible major/minor choices, and multiple entry/exit options." },
    { title: "Placements & Internships", desc: "Deep industry ties provide strong local and international internship and career placement options." },
    { title: "Globally Recognized Degrees", desc: "Indian degrees are highly valued by employers in Uganda, Kenya, Tanzania, Rwanda, the GCC, and Europe." },
    { title: "Safe & Welcoming Environment", desc: "Dedicated international student support, campus accommodation, and smooth cultural integration." }
  ];

  const studyInDubaiMalaysiaReasons = [
    { title: "Indian Curricula in Global Hubs", desc: "Study Indian university curriculums directly at international campuses in Dubai and Malaysia." },
    { title: "Western Quality, Lower Cost", desc: "Benefit from lower tuition and living costs than Western countries while gaining massive international exposure." },
    { title: "Access Strong Job Markets", desc: "Access robust job and internship markets in technology, finance, engineering, healthcare, logistics, and tourism." },
    { title: "Diaspora & Travel Convenience", desc: "Shorter travel distances from Uganda with strong African and Indian diaspora support networks." }
  ];

  const whatYouGain = [
    { title: "Direct Interaction", desc: "Meet university representatives face-to-face to ask about programs, fees, scholarships, and campus life." },
    { title: "Personalised Career Counselling", desc: "Get one-on-one guidance from expert advisors to identify the right course and university based on your budget and goals." },
    { title: "Scholarship & Aid Guidance", desc: "Discover institutional merit-based, government, and private scholarship options available for African students." },
    { title: "Clear Admission Pathways", desc: "Understand entrance exams, timelines, document requirements, and visa processes for India, Dubai, and Malaysia." }
  ];

  const parentBenefits = [
    "Compare study options in India, Dubai, and Malaysia clearly, including costs, quality, and career outcomes.",
    "Speak directly with experienced counsellors regarding admission requirements and financial planning.",
    "Learn about secure campus accommodations, dedicated hostel facilities, and international student safety.",
    "Plan financially with clarity on tuition fees, living costs, and scholarship options.",
    "Support your child's decision with confidence and peace of mind."
  ];

  const universityBenefits = [
    "Recruit high-intent students from Kampala, Entebbe, Gulu, and across Uganda.",
    "Promote flagship programs and scholarships directly to motivated applicants and parents.",
    "Build long-term collaborations with Ugandan schools, education agencies, and local counselors.",
    "Expand institutional brand authority and visibility in the high-potential African market."
  ];

  const whyDifferent = [
    { title: "One Fair, Three Destinations", desc: "Explore academic pathways in India, Dubai, and Malaysia all in one place, saving time and travel costs." },
    { title: "Focused on African Students", desc: "Tailored visa guidance, international student support systems, and scholarship options for African nationals." },
    { title: "NEP 2020 & Globally Aligned", desc: "Modern, multidisciplinary structures built to support structured career counselling." },
    { title: "Actionable Enrolment Outcomes", desc: "Go from course selection to application submission, scholarship checks, and visa guidance in a single day." }
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
    data.append('event_title', 'IHECF Uganda Fair - Student Pre-Registration');
    data.append('event_country', 'Uganda');
    data.append('_subject', 'New Student RSVP: IHECF Uganda');
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
        title="Student Guide: IHECF Uganda 2026-27 | Study in India Dubai Malaysia" 
        description="Discover global higher education options in India, Dubai & Malaysia. Meet top universities in Uganda. Pre-register for free admissions counseling & scholarships."
        keywords="Study in India Uganda, IHECF Uganda Student Fair, Education Fair Kampala, Indian Universities Uganda"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": "Student Guide: IHECF Uganda 2026-27 | Study in India Dubai Malaysia",
          "description": "Gateway to world-class education in India, Dubai, and Malaysia for students and families from Uganda. Free pre-registration.",
          "startDate": "2026-11-01T09:00:00+03:00",
          "endDate": "2026-11-30T17:00:00+03:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Kampala, Uganda",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
            }
          },
          "offers": {
            "@type": "Offer",
            "url": "https://ihecf.info/student/uganda",
            "price": "0",
            "priceCurrency": "UGX",
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
          <img src="/uganda_education_fair.png" alt="Uganda Landmark" className="w-full h-full object-cover opacity-35 scale-105" />
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
                Uganda <span className="text-secondary italic">Edition 2026-27</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Student & Family Fair</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Your Gateway to World-Class Education in India, Dubai & Malaysia</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Connect with representatives from top-tier Indian universities and their global campuses in Dubai and Malaysia. Plan your study journey, secure scholarships, and get career counseling—all in one place.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to={`/student-registration?subject=${encodeURIComponent("IHECF Uganda Student Pre-Registration")}`} className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Pre-Register / RSVP for Free
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Fair Schedule</h3>
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
                           <div className="text-lg font-black text-white">Kampala</div>
                           <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Uganda Venue</div>
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

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">Gateway to Global <span className="text-secondary italic">Opportunities</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Choosing the right university is a life-defining choice. The Indian Higher Education & Career Fair (IHECF), organized by Edunial Group, brings premier universities from India, Dubai, and Malaysia directly to you in Uganda.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Compare options clearly, ask questions, and make confident decisions without leaving the country. Pre-registration is free and highly recommended to secure your entry pass.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary mt-4">
              <p className="text-sm text-gray-500 italic">
                "Are you a representative from a higher education institution? Visit our dedicated <Link to="/country/uganda" className="text-secondary font-bold underline">University Exhibitor Page</Link> for registrations."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">Free</h3>
               <p className="text-gray-500 font-bold">Pre-registration Pass</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">3 Hubs</h3>
               <p className="text-gray-700 font-bold">India, Dubai & Malaysia</p>
            </div>
            <div className="bg-primary text-white rounded-[2rem] p-8 sm:col-span-2 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h3 className="text-2xl font-black mb-2">Organized by</h3>
               <p className="text-secondary font-bold text-xl tracking-widest uppercase">Edunial Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in India - Bento Grid */}
      <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Study in <span className="text-secondary">India?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover why India is now a leading global destination for Ugandan students.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyInIndiaReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-accent-light text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Dubai or Malaysia */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Choose <span className="text-secondary">Dubai or Malaysia?</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Gain international exposure at global academic hubs closer to home in the Middle East & Southeast Asia.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyInDubaiMalaysiaReasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <Globe size={20} className="text-secondary mb-4" />
              <h3 className="font-bold text-primary mb-2 text-base leading-tight">{reason.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Gain & Parent Benefits */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-8 flex items-center gap-4">
              <Sparkles className="text-secondary" size={32} /> What You Will Gain
            </h2>
            <div className="space-y-4">
              {whatYouGain.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm md:text-base mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 relative z-10">For <span className="text-secondary">Parents</span></h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 relative z-10 leading-relaxed">
              We understand you want a safe, affordable, and high-quality study path. IHECF is designed to help you support your child's choices:
            </p>
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

      {/* Why Different */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why IHECF is <span className="text-secondary">Different</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Understand how we structure support specifically for Ugandan applicants.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyDifferent.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Sparkles size={20} className="text-secondary mb-3" />
                <h3 className="font-bold text-primary mb-2 text-base leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-6">Recruit from <span className="text-secondary">Uganda</span></h2>
            <div className="space-y-4">
              {universityBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <Building2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-650 text-sm font-semibold leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
              <div className="relative z-10" id="rsvp-form">
                <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Entry is Free & Fast</span>
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">Pre-Register / RSVP Now</h3>
                <p className="text-gray-550 mb-8 text-sm leading-relaxed">Secure your priority entry pass, explore scholarship pathways, and book your 1:1 university counseling slots at the fair.</p>
                <Link 
                  to={`/student-registration?subject=${encodeURIComponent("IHECF Uganda Student Pre-Registration")}`}
                  className="btn-secondary w-full py-4 text-xs flex justify-center items-center gap-2 font-bold shadow-lg shadow-secondary/10 rounded-xl hover:scale-[1.02] transition-transform"
                >
                  Start Registration Form <ArrowRight size={14} />
                </Link>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">Edunial Group — Connecting Aspiring Minds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF Uganda 2026-27 Student Portal | Study in India, Dubai & Malaysia Fair | Education Fair Kampala Entebbe | African Student Admissions<br/>
         Connecting Ugandan Students and Families with Top Universities | Powered by Edunial Group
      </div>
    </div>
  );
};

export default UgandaStudent;
