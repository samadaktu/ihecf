import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Calendar, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  ShieldCheck,
  Send,
  Printer,
  Sparkles,
  Info,
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const StudentRegistration = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formDataSummary, setFormDataSummary] = useState(null);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Default values
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    nationality: '',
    studentMobile: '',
    studentEmail: '',
    studentWhatsapp: '',
    // Parent info
    parentName: '',
    parentRelationship: '',
    parentMobile: '',
    parentEmail: '',
    // Academic info
    schoolName: '',
    schoolCityCountry: '',
    currentGrade: 'Grade 12',
    curriculum: 'CBSE',
    curriculumOther: '',
    graduationYear: '2026',
    graduationYearOther: '',
    // Areas of interest (checkboxes)
    interestEngineering: false,
    interestAI: false,
    interestCS: false,
    interestMedicine: false,
    interestPharmacy: false,
    interestNursing: false,
    interestDesign: false,
    interestManagement: false,
    interestCommerce: false,
    interestLaw: false,
    interestLiberalArts: false,
    interestMedia: false,
    interestHospitality: false,
    interestAviation: false,
    interestAgriculture: false,
    interestOtherText: '',
    // Event location (checkboxes)
    locQatar: false,
    locKuwait: false,
    locJeddah: false,
    locRiyadh: false,
    locDammam: false,
    locJubail: false,
    locFuture: false,
    // Guidance & Info (checkboxes)
    infoScholarships: false,
    infoRequirements: false,
    infoExams: false,
    infoCounseling: false,
    infoStudyAbroad: false,
    infoAccommodation: false,
    infoPlacements: false,
    // Referral Source
    referralSource: 'School',
    referralOther: '',
    // Consent
    consentAccuracy: false,
    consentUpdates: false,
    consentDisclaimer: false,
    // Signatures
    signatureStudent: '',
    signatureParent: '',
    signatureDate: new Date().toISOString().split('T')[0],
  });

  // Pre-fill fields from query params if available
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subjectParam = searchParams.get('subject');
    
    if (subjectParam) {
      const lowerSubject = subjectParam.toLowerCase();
      // Auto check event location depending on URL subject parameter
      if (lowerSubject.includes('qatar') || lowerSubject.includes('doha')) {
        setFormData(prev => ({ ...prev, locQatar: true }));
      }
      if (lowerSubject.includes('kuwait')) {
        setFormData(prev => ({ ...prev, locKuwait: true }));
      }
      if (lowerSubject.includes('ksa') || lowerSubject.includes('saudi')) {
        setFormData(prev => ({ ...prev, locRiyadh: true, locJeddah: true, locDammam: true, locJubail: true }));
      }
      if (lowerSubject.includes('jeddah')) {
        setFormData(prev => ({ ...prev, locJeddah: true }));
      }
      if (lowerSubject.includes('riyadh')) {
        setFormData(prev => ({ ...prev, locRiyadh: true }));
      }
      if (lowerSubject.includes('dammam')) {
        setFormData(prev => ({ ...prev, locDammam: true }));
      }
      if (lowerSubject.includes('jubail')) {
        setFormData(prev => ({ ...prev, locJubail: true }));
      }
      if (lowerSubject.includes('gambia') || lowerSubject.includes('kenya') || lowerSubject.includes('uganda') || lowerSubject.includes('tanzania') || lowerSubject.includes('zambia') || lowerSubject.includes('ethiopia') || lowerSubject.includes('senegal') || lowerSubject.includes('mauritius')) {
        setFormData(prev => ({ ...prev, locFuture: true }));
      }
    }
  }, [location.search]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Verification check for checkboxes
    if (!formData.consentAccuracy || !formData.consentUpdates || !formData.consentDisclaimer) {
      setErrorMsg('Please review and confirm all three consent & declaration checkboxes.');
      return;
    }

    const selectedLocationsCount = [
      formData.locQatar, formData.locKuwait, formData.locJeddah,
      formData.locRiyadh, formData.locDammam, formData.locJubail, formData.locFuture
    ].filter(Boolean).length;

    if (selectedLocationsCount === 0) {
      setErrorMsg('Please select at least one event location you plan to attend.');
      return;
    }

    setIsSubmitting(true);

    // Format fields for email
    const formPostData = new FormData();
    formPostData.append('_subject', `IHECF Student RSVP - ${formData.studentName}`);
    formPostData.append('_template', 'table');
    formPostData.append('_captcha', 'false');
    formPostData.append('_cc', 'info@ihecf.info');

    // Section 1: Personal Info
    formPostData.append('1. Student Name', formData.studentName);
    formPostData.append('Gender', formData.gender);
    formPostData.append('Date of Birth', formData.dob);
    formPostData.append('Nationality', formData.nationality);
    formPostData.append('Student Mobile', formData.studentMobile);
    formPostData.append('Student Email', formData.studentEmail);
    formPostData.append('Student WhatsApp', formData.studentWhatsapp || 'N/A');

    // Section 2: Parent Info
    formPostData.append('2. Parent Name', formData.parentName);
    formPostData.append('Parent Relationship', formData.parentRelationship);
    formPostData.append('Parent Mobile', formData.parentMobile);
    formPostData.append('Parent Email', formData.parentEmail || 'N/A');

    // Section 3: Academic Info
    formPostData.append('3. School Name', formData.schoolName);
    formPostData.append('School City/Country', formData.schoolCityCountry);
    formPostData.append('Current Grade', formData.currentGrade);
    formPostData.append('Curriculum', formData.curriculum === 'Other' ? `Other: ${formData.curriculumOther}` : formData.curriculum);
    formPostData.append('Expected Graduation Year', formData.graduationYear === 'Other' ? `Other: ${formData.graduationYearOther}` : formData.graduationYear);

    // Section 4: Areas of Interest
    const interests = [];
    if (formData.interestEngineering) interests.push('Engineering & Technology');
    if (formData.interestAI) interests.push('AI & Data Science');
    if (formData.interestCS) interests.push('Computer Science & IT');
    if (formData.interestMedicine) interests.push('Medicine & Health Sciences');
    if (formData.interestPharmacy) interests.push('Pharmacy');
    if (formData.interestNursing) interests.push('Nursing & Allied Health');
    if (formData.interestDesign) interests.push('Architecture & Design');
    if (formData.interestManagement) interests.push('Management & Business');
    if (formData.interestCommerce) interests.push('Commerce & Finance');
    if (formData.interestLaw) interests.push('Law');
    if (formData.interestLiberalArts) interests.push('Liberal Arts');
    if (formData.interestMedia) interests.push('Media & Communication');
    if (formData.interestHospitality) interests.push('Hospitality & Tourism');
    if (formData.interestAviation) interests.push('Aviation');
    if (formData.interestAgriculture) interests.push('Agriculture');
    if (formData.interestOtherText) interests.push(`Other: ${formData.interestOtherText}`);
    formPostData.append('4. Academic Interests', interests.join(', '));

    // Section 5: Event Locations
    const locations = [];
    if (formData.locQatar) locations.push('Qatar (Doha)');
    if (formData.locKuwait) locations.push('Kuwait (Kuwait City)');
    if (formData.locJeddah) locations.push('KSA (Jeddah)');
    if (formData.locRiyadh) locations.push('KSA (Riyadh)');
    if (formData.locDammam) locations.push('KSA (Dammam)');
    if (formData.locJubail) locations.push('KSA (Jubail)');
    if (formData.locFuture) locations.push('Interested in future events');
    formPostData.append('5. Planned Event Locations', locations.join(', '));

    // Section 6: Guidance Needs
    const guidanceNeeds = [];
    if (formData.infoScholarships) guidanceNeeds.push('Scholarships & Financial Aid');
    if (formData.infoRequirements) guidanceNeeds.push('Admission Requirements');
    if (formData.infoExams) guidanceNeeds.push('Entrance Examinations');
    if (formData.infoCounseling) guidanceNeeds.push('Career Counseling');
    if (formData.infoStudyAbroad) guidanceNeeds.push('Study Abroad Opportunities');
    if (formData.infoAccommodation) guidanceNeeds.push('Student Accommodation');
    if (formData.infoPlacements) guidanceNeeds.push('Internships & Placements');
    formPostData.append('6. Info Requested On', guidanceNeeds.join(', '));

    // Referral Source
    formPostData.append('7. Referral Source', formData.referralSource === 'Other' ? `Other: ${formData.referralOther}` : formData.referralSource);

    // Signatures
    formPostData.append('Student Signature', formData.signatureStudent || 'N/A');
    formPostData.append('Parent Signature', formData.signatureParent || 'N/A');
    formPostData.append('Signature Date', formData.signatureDate);

    // Generate random Ticket ID for entry pass (e.g. IHECF-STU-83492)
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const generatedTicketId = `IHECF-STU-${randomNum}`;

    try {
      const response = await fetch("https://formsubmit.co/ajax/reachedunial@gmail.com", {
        method: "POST",
        body: formPostData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setTicketId(generatedTicketId);
        setFormDataSummary({ ...formData, interests, locations, guidanceNeeds });
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Server responded with an error.');
      }
    } catch (error) {
      console.error("Submission error", error);
      setErrorMsg('Failed to submit registration. Please check your network and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-32 text-xs">
      <SEO 
        title="Student Pre-Registration Form | IHECF 2026–27" 
        description="Official student and family pre-registration portal for the Indian Higher Education & Career Fair (IHECF) 2026–27 organized by Edunial Group. Free entry pass registration." 
        keywords="Student Pre-Registration, IHECF Student Entry Pass, Edunial Group Student Fair, India Education Fair RSVP"
      />

      {/* Hero section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-12 md:pb-16 px-6 relative overflow-hidden print:hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/15 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 py-1 px-3 bg-secondary/15 border border-secondary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary mb-3"
          >
            <Sparkles size={12} /> Student & Family RSVP Portal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-tight"
          >
            Student <span className="text-secondary italic">Pre-Registration</span> Form
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] md:text-sm text-gray-350 max-w-2xl mx-auto mt-3 leading-relaxed font-medium uppercase tracking-wider"
          >
            Edunial Group – Indian Higher Education & Career Fair (IHECF) 2026–27
          </motion.p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-25 print:mt-0 print:px-0">

        {/* Success Pass Layout */}
        {submitted && formDataSummary ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-6 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Success Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-150 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-inner shrink-0">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-black text-primary leading-tight">Pre-Registration Confirmed!</h2>
                  <p className="text-[10px] text-gray-500 mt-0.5">Your entry pass has been successfully reserved.</p>
                </div>
              </div>
              <button 
                onClick={handlePrint}
                className="btn-primary py-2.5 px-5 text-[11px] flex items-center gap-2 rounded-xl shadow-md border border-primary/10 print:hidden shrink-0 hover:scale-105 transition-transform"
              >
                <Printer size={14} /> Print Entry Pass
              </button>
            </div>

            {/* Email verify notice box */}
            <div className="mb-6 p-4 bg-secondary/5 rounded-xl border border-secondary/15 text-[11px] text-gray-700 leading-relaxed flex items-start gap-2.5 print:hidden">
              <Info className="text-secondary shrink-0 mt-0.5" size={16} />
              <div>
                <strong className="text-primary font-bold block mb-0.5">Verification Warning:</strong>
                Submissions are sent via FormSubmit.co. On the first submission, FormSubmit will dispatch a confirmation email to <span className="font-extrabold text-secondary-dark">reachedunial@gmail.com</span>. Please click the **"Activate Form"** link in that verification email to ensure subsequent entries arrive automatically.
              </div>
            </div>

            {/* Premium Ticket Graphic Design */}
            <div className="border-2 border-dashed border-gray-250 rounded-2xl bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row gap-6 relative shadow-inner">
              
              {/* Ticket Left Part - Info */}
              <div className="flex-grow space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase bg-secondary/15 border border-secondary/20 text-secondary-dark px-2 py-0.5 rounded">
                    Student Entry Pass
                  </span>
                  <span className="font-black text-gray-400 tracking-wider font-mono text-xs">{ticketId}</span>
                </div>

                <div>
                  <h3 className="text-base font-black text-primary leading-tight">IHECF 2026–27</h3>
                  <p className="text-[10px] text-gray-450 mt-0.5 leading-normal">Organized by Edunial Group</p>
                </div>

                <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 border-t border-b border-gray-200/60 py-4 my-2 text-[11px]">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 block font-bold">Student Name</span>
                    <span className="font-extrabold text-primary">{formDataSummary.studentName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 block font-bold">Nationality</span>
                    <span className="font-extrabold text-primary">{formDataSummary.nationality}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 block font-bold">Current Grade</span>
                    <span className="font-extrabold text-primary">{formDataSummary.currentGrade} ({formDataSummary.curriculum})</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 block font-bold">Planned Venues</span>
                    <span className="font-extrabold text-secondary-dark line-clamp-1">{formDataSummary.locations.join(', ')}</span>
                  </div>
                </div>

                <div className="text-[10px] text-gray-450 leading-relaxed italic flex items-center gap-1.5 bg-white p-2.5 rounded-lg border border-gray-150">
                  <Sparkles size={12} className="text-secondary shrink-0" />
                  <span>Please present this entry pass at the venue registration desk for priority entry and seminar access.</span>
                </div>
              </div>

              {/* Ticket Right Part - Decoupled Barcode Design */}
              <div className="w-full md:w-44 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-gray-250 pt-6 md:pt-0 md:pl-6 flex flex-col items-center justify-center gap-3">
                {/* Simulated QR Code Box */}
                <div className="w-24 h-24 bg-white border border-gray-250 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
                  <div className="w-full h-full opacity-65 flex flex-wrap justify-between gap-[2px]">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2.5 h-2.5 rounded-xs ${
                          (i % 3 === 0 || i % 7 === 0 || (i > 10 && i < 20) || i === 44) ? 'bg-primary' : 'bg-transparent'
                        }`} 
                      />
                    ))}
                  </div>
                  {/* Corner styling to look like scanners */}
                  <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-primary"></div>
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-primary"></div>
                  <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-primary"></div>
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-primary"></div>
                </div>
                
                <span className="text-[8px] uppercase tracking-widest text-gray-400 font-extrabold text-center font-mono">
                  Scan QR For Checkin
                </span>
              </div>

            </div>

            {/* Complete Receipt Summary (Table style) */}
            <div className="mt-8 border-t border-gray-100 pt-6 space-y-4">
              <h4 className="font-extrabold text-primary uppercase tracking-wide">Summary Registration Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] leading-relaxed bg-slate-50/50 p-4 rounded-xl border border-gray-150">
                <p><strong className="text-gray-500 font-bold">Student Email:</strong> {formDataSummary.studentEmail}</p>
                <p><strong className="text-gray-550 font-bold">Student Mobile:</strong> {formDataSummary.studentMobile}</p>
                <p><strong className="text-gray-550 font-bold">School Name:</strong> {formDataSummary.schoolName} ({formDataSummary.schoolCityCountry})</p>
                <p><strong className="text-gray-550 font-bold">Parent Name:</strong> {formDataSummary.parentName} ({formDataSummary.parentRelationship})</p>
                <p className="sm:col-span-2"><strong className="text-gray-550 font-bold">Areas of Interest:</strong> {formDataSummary.interests.join(', ')}</p>
                <p className="sm:col-span-2"><strong className="text-gray-550 font-bold">Info Requested On:</strong> {formDataSummary.guidanceNeeds.join(', ')}</p>
                <p><strong className="text-gray-550 font-bold">Student Signature:</strong> {formDataSummary.signatureStudent || 'N/A'}</p>
                <p><strong className="text-gray-550 font-bold">Signature Date:</strong> {formDataSummary.signatureDate}</p>
              </div>
            </div>

            {/* Back action */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center print:hidden">
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-secondary py-3 px-8 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Register Another Student
              </button>
            </div>

          </motion.div>
        ) : (
          /* Form Content */
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-5 sm:p-8 md:p-12 shadow-2xl border border-gray-50"
          >
            {/* Header statement */}
            <div className="mb-8 pb-4 border-b border-gray-100">
              <span className="text-[9px] bg-secondary/10 border border-secondary/20 text-secondary-dark px-2.5 py-0.5 rounded font-black uppercase tracking-widest mb-2 inline-block">IHECF Expo 2026–27</span>
              <h2 className="text-lg md:text-xl font-black text-primary leading-tight">Student RSVP & Pre-Registration</h2>
              <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                Secure Your Spot | Meet Leading Universities | Explore Scholarships | Plan Your Future
              </p>
              <p className="text-[10px] text-gray-400 mt-2 bg-slate-50 p-2.5 rounded-lg border border-gray-100 leading-normal">
                Please complete this form to pre-register. Pre-registered students will receive event updates, participating university information, seminar schedules, and priority entry at the venue.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-start gap-2.5">
                <span className="shrink-0 font-extrabold w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">!</span>
                <p className="font-bold">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* 1. PERSONAL INFORMATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <User size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">1. Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Student Name <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="studentName" 
                      type="text" 
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Enter Full Name" 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Gender <span className="text-red-500">*</span></label>
                    <select 
                      required 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer Not to Say">Prefer Not to Say</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Date of Birth <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="dob" 
                      type="date" 
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Nationality <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="nationality" 
                      type="text" 
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="e.g. Qatari, Indian, Gambian" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Mobile Number <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="studentMobile" 
                      type="tel" 
                      value={formData.studentMobile}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Include Country Code" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="studentEmail" 
                      type="email" 
                      value={formData.studentEmail}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="student@email.com" 
                    />
                  </div>

                  <div className="space-y-1 sm:col-span-2 md:col-span-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">WhatsApp Number</label>
                    <input 
                      name="studentWhatsapp" 
                      type="tel" 
                      value={formData.studentWhatsapp}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="If different from mobile" 
                    />
                  </div>
                </div>
              </div>

              {/* 2. PARENT/GUARDIAN INFORMATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <HeartHandshake size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">2. Parent/Guardian Information</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Guardian Name <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="parentName" 
                      type="text" 
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Full Name" 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Relationship <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="parentRelationship" 
                      type="text" 
                      value={formData.parentRelationship}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="e.g. Father, Mother, Uncle" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Mobile Number <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="parentMobile" 
                      type="tel" 
                      value={formData.parentMobile}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Parent's Mobile" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Email Address</label>
                    <input 
                      name="parentEmail" 
                      type="email" 
                      value={formData.parentEmail}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Parent's Email" 
                    />
                  </div>
                </div>
              </div>

              {/* 3. ACADEMIC INFORMATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <BookOpen size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">3. Academic Information</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">School Name <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="schoolName" 
                      type="text" 
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="Current or last attended school" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">City / Country <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="schoolCityCountry" 
                      type="text" 
                      value={formData.schoolCityCountry}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                      placeholder="e.g. Doha, Qatar" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {/* Current Grade */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Current Grade / Class <span className="text-red-500">*</span></span>
                    <div className="space-y-2">
                      {['Grade 10', 'Grade 11', 'Grade 12', 'Completed Grade 12'].map(g => (
                        <label key={g} className="flex items-center gap-2 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors select-none">
                          <input 
                            type="radio" 
                            name="currentGrade"
                            value={g}
                            checked={formData.currentGrade === g}
                            onChange={handleChange}
                            className="text-secondary focus:ring-secondary w-4 h-4"
                          />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Curriculum <span className="text-red-500">*</span></span>
                    <div className="space-y-2">
                      {['CBSE', 'CISCE (ISC/ICSE)', 'IB', 'Cambridge (IGCSE/A-Level)', 'Local Board', 'Other'].map(curr => (
                        <label key={curr} className="flex items-center gap-2 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors select-none">
                          <input 
                            type="radio" 
                            name="curriculum"
                            value={curr}
                            checked={formData.curriculum === curr}
                            onChange={handleChange}
                            className="text-secondary focus:ring-secondary w-4 h-4"
                          />
                          {curr}
                        </label>
                      ))}
                    </div>
                    {formData.curriculum === 'Other' && (
                      <input 
                        required
                        type="text" 
                        name="curriculumOther"
                        value={formData.curriculumOther}
                        onChange={handleChange}
                        placeholder="Please specify curriculum"
                        className="w-full mt-2 bg-slate-50 border-none rounded-xl p-2.5 focus:ring-1.5 focus:ring-secondary/50 text-xs font-semibold text-primary"
                      />
                    )}
                  </div>

                  {/* Expected Year of Graduation */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Expected Graduation <span className="text-red-500">*</span></span>
                    <div className="space-y-2">
                      {['2026', '2027', '2028', 'Other'].map(year => (
                        <label key={year} className="flex items-center gap-2 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors select-none">
                          <input 
                            type="radio" 
                            name="graduationYear"
                            value={year}
                            checked={formData.graduationYear === year}
                            onChange={handleChange}
                            className="text-secondary focus:ring-secondary w-4 h-4"
                          />
                          {year}
                        </label>
                      ))}
                    </div>
                    {formData.graduationYear === 'Other' && (
                      <input 
                        required
                        type="text" 
                        name="graduationYearOther"
                        value={formData.graduationYearOther}
                        onChange={handleChange}
                        placeholder="Specify year"
                        className="w-full mt-2 bg-slate-50 border-none rounded-xl p-2.5 focus:ring-1.5 focus:ring-secondary/50 text-xs font-semibold text-primary"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* 4. AREAS OF INTEREST */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <GraduationCap size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">4. Areas of Interest</h3>
                </div>
                <span className="text-[10px] text-gray-400 block -mt-1">Select all academic fields that interest you:</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {[
                    { label: 'Engineering & Technology', name: 'interestEngineering' },
                    { label: 'AI & Data Science', name: 'interestAI' },
                    { label: 'Computer Science & IT', name: 'interestCS' },
                    { label: 'Medicine & Health Sciences', name: 'interestMedicine' },
                    { label: 'Pharmacy', name: 'interestPharmacy' },
                    { label: 'Nursing & Allied Health', name: 'interestNursing' },
                    { label: 'Architecture & Design', name: 'interestDesign' },
                    { label: 'Management & Business', name: 'interestManagement' },
                    { label: 'Commerce & Finance', name: 'interestCommerce' },
                    { label: 'Law', name: 'interestLaw' },
                    { label: 'Liberal Arts & Humanities', name: 'interestLiberalArts' },
                    { label: 'Media & Communication', name: 'interestMedia' },
                    { label: 'Hospitality & Tourism', name: 'interestHospitality' },
                    { label: 'Aviation', name: 'interestAviation' },
                    { label: 'Agriculture & Allied Sciences', name: 'interestAgriculture' },
                  ].map((field) => (
                    <label key={field.name} className="flex items-start gap-2.5 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs py-1 select-none">
                      <input 
                        type="checkbox" 
                        name={field.name}
                        checked={formData[field.name]}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4 shrink-0"
                      />
                      <span className="leading-tight">{field.label}</span>
                    </label>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5 mb-1">Other Areas of Interest</label>
                  <input 
                    name="interestOtherText" 
                    type="text" 
                    value={formData.interestOtherText}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                    placeholder="Specify other interests here..." 
                  />
                </div>
              </div>

              {/* 5. EVENT LOCATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <MapPin size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">5. Event Location</h3>
                </div>
                <span className="text-[10px] text-gray-400 block -mt-1">Which IHECF event edition do you plan to attend? <span className="text-red-500">*</span></span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  
                  {/* GCC */}
                  <div className="border border-slate-150 rounded-xl p-3.5 space-y-2 bg-slate-50/50">
                    <span className="text-[9px] font-black uppercase tracking-wider text-secondary">GCC Edition 2026</span>
                    <label className="flex items-center gap-2.5 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs select-none">
                      <input 
                        type="checkbox" 
                        name="locQatar"
                        checked={formData.locQatar}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4"
                      />
                      Doha, Qatar
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs select-none">
                      <input 
                        type="checkbox" 
                        name="locKuwait"
                        checked={formData.locKuwait}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4"
                      />
                      Kuwait City, Kuwait
                    </label>
                  </div>

                  {/* KSA */}
                  <div className="border border-slate-150 rounded-xl p-3.5 space-y-2 bg-slate-50/50">
                    <span className="text-[9px] font-black uppercase tracking-wider text-secondary">KSA Edition 2026</span>
                    <div className="grid grid-cols-2 gap-2">
                      {['Jeddah', 'Riyadh', 'Dammam', 'Jubail'].map(city => {
                        const name = `loc${city}`;
                        return (
                          <label key={city} className="flex items-center gap-2 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs select-none">
                            <input 
                              type="checkbox" 
                              name={name}
                              checked={formData[name]}
                              onChange={handleChange}
                              className="rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4"
                            />
                            {city}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Future / Other */}
                  <div className="border border-slate-150 rounded-xl p-3.5 space-y-2 bg-slate-50/50 flex flex-col justify-center">
                    <span className="text-[9px] font-black uppercase tracking-wider text-secondary">Other Editions</span>
                    <label className="flex items-start gap-2.5 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs select-none">
                      <input 
                        type="checkbox" 
                        name="locFuture"
                        checked={formData.locFuture}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4 shrink-0"
                      />
                      <span>Interested in Africa, SAARC or future events</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* 6. SCHOLARSHIP & CAREER GUIDANCE */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Sparkles size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">6. Scholarship & Career Guidance</h3>
                </div>
                <span className="text-[10px] text-gray-400 block -mt-1">What information would you like to receive? (Select all that apply)</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {[
                    { label: 'Scholarships & Financial Aid', name: 'infoScholarships' },
                    { label: 'Admission Requirements', name: 'infoRequirements' },
                    { label: 'Entrance Examinations', name: 'infoExams' },
                    { label: 'Career Counseling', name: 'infoCounseling' },
                    { label: 'Study Abroad Opportunities', name: 'infoStudyAbroad' },
                    { label: 'Student Accommodation', name: 'infoAccommodation' },
                    { label: 'Internships & Placements', name: 'infoPlacements' },
                  ].map((field) => (
                    <label key={field.name} className="flex items-start gap-2.5 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs py-0.5 select-none">
                      <input 
                        type="checkbox" 
                        name={field.name}
                        checked={formData[field.name]}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4 h-4 shrink-0"
                      />
                      <span className="leading-tight">{field.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 7. HOW DID YOU HEAR ABOUT IHECF */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Info size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">7. How Did You Hear About IHECF?</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {['School', 'Social Media', 'Edunial Group Website', 'Teacher/Counsellor', 'Friend/Family', 'University Rep', 'Other'].map(src => (
                    <label key={src} className="flex items-center gap-2 cursor-pointer font-bold text-gray-700 hover:text-primary transition-colors text-xs select-none">
                      <input 
                        type="radio" 
                        name="referralSource"
                        value={src}
                        checked={formData.referralSource === src}
                        onChange={handleChange}
                        className="text-secondary focus:ring-secondary w-4 h-4"
                      />
                      {src}
                    </label>
                  ))}
                </div>
                {formData.referralSource === 'Other' && (
                  <input 
                    required
                    type="text" 
                    name="referralOther"
                    value={formData.referralOther}
                    onChange={handleChange}
                    placeholder="Please specify source"
                    className="w-full mt-2 bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium"
                  />
                )}
              </div>

              {/* 8. CONSENT & DECLARATION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <ShieldCheck size={14} className="text-secondary" />
                  <h3 className="font-black text-primary text-xs uppercase tracking-wider">8. Consent & Declaration</h3>
                </div>

                <div className="space-y-3.5 bg-slate-50 p-4 rounded-xl border border-slate-150 text-[11px] leading-relaxed">
                  <label className="flex items-start gap-2.5 cursor-pointer group">
                    <input 
                      required
                      type="checkbox" 
                      name="consentAccuracy"
                      checked={formData.consentAccuracy}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5 shrink-0"
                    />
                    <span className="font-bold text-gray-700 group-hover:text-primary transition-colors select-none">
                      I confirm that the information provided is accurate. <span className="text-red-500 font-extrabold">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer group">
                    <input 
                      required
                      type="checkbox" 
                      name="consentUpdates"
                      checked={formData.consentUpdates}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5 shrink-0"
                    />
                    <span className="font-bold text-gray-700 group-hover:text-primary transition-colors select-none">
                      I agree to receive event updates, university information, scholarship opportunities, and career guidance communications from Edunial Group and participating institutions. <span className="text-red-500 font-extrabold">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer group">
                    <input 
                      required
                      type="checkbox" 
                      name="consentDisclaimer"
                      checked={formData.consentDisclaimer}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5 shrink-0"
                    />
                    <span className="font-bold text-gray-700 group-hover:text-primary transition-colors select-none">
                      I understand that pre-registration does not guarantee admission to any institution and is solely for participation in the Indian Higher Education & Career Fair. <span className="text-red-500 font-extrabold">*</span>
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Student Signature (Optional)</label>
                    <input 
                      name="signatureStudent" 
                      type="text" 
                      value={formData.signatureStudent}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-secondary font-black italic tracking-widest" 
                      placeholder="Type name to sign" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Parent/Guardian Signature (Optional)</label>
                    <input 
                      name="signatureParent" 
                      type="text" 
                      value={formData.signatureParent}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-secondary font-black italic tracking-widest" 
                      placeholder="Type name to sign" 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block ml-0.5">Date</label>
                    <input 
                      required 
                      name="signatureDate" 
                      type="date" 
                      value={formData.signatureDate}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 focus:ring-1.5 focus:ring-secondary/50 text-xs text-primary font-medium" 
                    />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-6 border-t border-gray-100 flex flex-col items-center">
                <button 
                  disabled={isSubmitting}
                  className="btn-secondary w-full sm:w-auto px-12 py-3.5 text-sm shadow-xl group disabled:opacity-50 flex items-center justify-center gap-2 hover:scale-[1.03] transition-transform duration-300"
                >
                  {isSubmitting ? 'Reserving Your Entry Pass...' : (
                    <>
                      Confirm & Pre-Register Now <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest mt-3">Free Event Admission Priority checkin</p>
              </div>

            </form>

            {/* Coordinator contacts */}
            <div className="mt-12 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[10px] text-gray-500 leading-normal">
              <div className="space-y-1">
                <h4 className="font-extrabold text-primary uppercase text-xs tracking-wide">Contact Information</h4>
                <p className="font-extrabold text-secondary">Edunial Group</p>
                <p>Email: <a href="mailto:info@ihecf.info" className="text-primary hover:underline">info@ihecf.info</a></p>
                <p>Website: <a href="https://www.ihecf.info" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.ihecf.info</a></p>
                <p>WhatsApp: +91-9319473355</p>
              </div>
              <div className="flex flex-col justify-end sm:text-right">
                <p className="text-gray-400 font-black uppercase text-[8px] tracking-wider mb-1">Your Future Begins Here</p>
                <p className="font-bold text-primary">Meet Universities, Discover Opportunities, and Make Informed Career Choices.</p>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
};

export default StudentRegistration;
