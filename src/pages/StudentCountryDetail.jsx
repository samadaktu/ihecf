import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Globe, ArrowLeft, ArrowRight, Calendar, CheckCircle, Target, Sparkles, Building2, BookOpen, Send, Clock, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

const StudentCountryDetail = () => {
  const { slug } = useParams();
  const countryName = slug === 'ksa' ? 'KSA' : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    course: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const getImage = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('ksa') || lower.includes('kuwait') || lower.includes('oman') || lower.includes('sharjah')) return '/ksa_education_event.png';
    if (lower.includes('kenya') || lower.includes('ethiopia') || lower.includes('tanzania') || lower.includes('ghana')) return '/kenya_education_event.png';
    if (lower.includes('vietnam') || lower.includes('thailand') || lower.includes('cambodia')) return '/vietnam_education_event.png';
    return '/student_interaction_fair.png';
  };

  const countryImage = getImage(countryName);

  const unmissablePoints = [
    { title: "Top-Tier Institutions", desc: "Interact directly with Admissions Representatives and Deans from premier Indian universities and colleges." },
    { title: "Direct Academic Guidance", desc: "Learn about undergraduate, postgraduate, and professional qualifications in high-demand fields." },
    { title: "Scholarships & Fee Waivers", desc: "Access information on exclusive spot offers, tuition fee waivers, and early-bird registration scholarships." },
    { title: "One-on-One Counseling", desc: "Receive immediate counseling on course selections, eligibility, visa procedures, and hostel accommodation." }
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
    data.append('event_title', `IHECF ${countryName} Fair - Student Pre-Registration`);
    data.append('event_country', countryName);
    data.append('_subject', `New Student RSVP: IHECF ${countryName}`);
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
        title={`Student Admissions: Study in India | IHECF ${countryName}`} 
        description={`Register for the upcoming Indian Higher Education & Career Fair in ${countryName}. Pre-register for admission counseling, courses information, and scholarships.`}
        keywords={`Study in India ${countryName}, IHECF ${countryName} Student Fair, Education Fair ${countryName}, Indian Universities ${countryName}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `IHECF ${countryName} Student Admissions Portal`,
          "description": `Pre-register for the Indian Higher Education & Career Fair in ${countryName}. Explore undergraduate, postgraduate admissions and tuition fee scholarships.`,
          "spatialCoverage": {
            "@type": "Place",
            "name": countryName
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src={countryImage} alt={countryName} className="w-full h-full object-cover opacity-20 scale-105" />
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
                {countryName} <span className="text-secondary italic">Edition</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-secondary font-black uppercase tracking-widest mt-3">Student Registration Portal</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-bold mb-4">Empowering Futures | Connecting Opportunities | Shaping Careers</p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-3xl mb-8">
                Pre-register for the upcoming Indian Higher Education & Career Fair in {countryName}. Meet delegates from premier Indian universities and discover high-quality undergraduate, postgraduate, and professional opportunities.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to={`/student-registration?subject=${encodeURIComponent(`IHECF ${countryName} Student Pre-Registration`)}`} className="btn-secondary px-8 py-4 text-sm md:text-base flex items-center gap-2">
                  Pre-Register / RSVP for Free
                </Link>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full md:w-80 shadow-2xl">
               <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">Fair Agenda</h3>
               <div className="space-y-6">
                   <div className="flex items-start gap-3.5">
                       <Clock size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">Full Day Access</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Main Fair & Counseling</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-3.5">
                       <Users size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">Parents Session</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Academic Quality & Placements</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-3.5 border-t border-white/10 pt-4">
                       <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                       <div>
                          <div className="text-sm font-black text-white">Premium Local Venue</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{countryName} Tour Details</div>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-primary">Explore Higher Education in <span className="text-secondary italic">India</span></h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The Indian Higher Education & Career Fair (IHECF) in {countryName} is a premier student recruitment platform connecting ambitious youth with India's top colleges.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Indian universities offer state-of-the-art curricula, global accreditations, and affordable cost structures, making them ideal destinations. Students from {countryName} can study Medicine, Engineering, Computing, Pharmacy, Business Administration, and more.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary mt-4">
              <p className="text-sm text-gray-500 italic">
                "Are you a university or college representative? Visit our dedicated <Link to={`/country/${slug}`} className="text-secondary font-bold underline">University Exhibitor Page</Link> for booth registrations."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-primary mb-2">IHECF</h3>
               <p className="text-gray-500 font-bold">Global Expo Series</p>
            </div>
            <div className="bg-secondary/10 rounded-[2rem] p-8 border border-secondary/20 hover:shadow-xl transition-all">
               <h3 className="text-4xl font-black text-secondary mb-2">Free</h3>
               <p className="text-gray-700 font-bold">Counseling Pass</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why You Should <span className="text-secondary">Attend</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Access the best resources to navigate your future career path.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* RSVP Form Section */}
      <section id="rsvp-form" className="py-16 md:py-24 bg-gray-50 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-light rounded-full z-0"></div>
            <div className="relative z-10 space-y-6">
              <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase tracking-widest">Free Admission Counseling</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">Pre-Register / RSVP Online</h2>
              <p className="text-gray-550 text-sm leading-relaxed max-w-md mx-auto">Secure your priority entry pass, explore scholarship pathways, and book your 1:1 university counseling slots at the fair.</p>
              <Link 
                to={`/student-registration?subject=${encodeURIComponent(`IHECF ${countryName} Student Pre-Registration`)}`}
                className="btn-secondary w-full max-w-md py-4 text-xs font-black inline-flex justify-center items-center gap-2.5 shadow-lg shadow-secondary/10 rounded-xl hover:scale-[1.02] transition-transform mx-auto"
              >
                Start Student Pre-Registration <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="bg-primary py-8 text-center text-white/40 text-[10px] uppercase tracking-widest px-6 border-t border-white/10">
         IHECF {countryName} Student Portal | Study in India {countryName} Fair | Connecting {countryName} Students with Indian Higher Education Universities | Managed by Edunial Groups
      </div>
    </div>
  );
};

export default StudentCountryDetail;
