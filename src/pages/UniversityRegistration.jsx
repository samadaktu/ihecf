import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Calendar, 
  CheckCircle, 
  Users, 
  FileText, 
  ShieldCheck,
  Send,
  ArrowRight,
  Printer,
  Sparkles,
  Info,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const UniversityRegistration = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formDataSummary, setFormDataSummary] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Default values
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionWebsite: '',
    repName: '',
    repDesignation: '',
    repDepartment: '',
    repMobile: '',
    repEmail: '',
    altName: '',
    altMobile: '',
    altEmail: '',
    // Participation details
    gccQatar: false,
    gccKuwait: false,
    ksaJeddah: false,
    ksaRiyadh: false,
    ksaDammam: false,
    ksaJubail: false,
    africaDetails: false,
    otherFutureOpp: false,
    // Delegation information
    delegationCount: '1 Representative',
    delegationNames: '',
    // Declaration
    declarationConfirmed: false,
    declarantName: '',
    declarantDesignation: '',
    declarantInstitution: '',
    declarantSignature: '',
    declarantDate: new Date().toISOString().split('T')[0],
  });

  // Pre-fill fields from query params if available
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subjectParam = searchParams.get('subject');
    
    if (subjectParam) {
      const lowerSubject = subjectParam.toLowerCase();
      // Auto check country depending on URL subject parameter
      if (lowerSubject.includes('qatar')) {
        setFormData(prev => ({ ...prev, gccQatar: true }));
      }
      if (lowerSubject.includes('kuwait')) {
        setFormData(prev => ({ ...prev, gccKuwait: true }));
      }
      if (lowerSubject.includes('ksa') || lowerSubject.includes('saudi')) {
        setFormData(prev => ({ ...prev, ksaJeddah: true, ksaRiyadh: true, ksaDammam: true, ksaJubail: true }));
      }
      if (lowerSubject.includes('jeddah')) {
        setFormData(prev => ({ ...prev, ksaJeddah: true }));
      }
      if (lowerSubject.includes('riyadh')) {
        setFormData(prev => ({ ...prev, ksaRiyadh: true }));
      }
      if (lowerSubject.includes('dammam')) {
        setFormData(prev => ({ ...prev, ksaDammam: true }));
      }
      if (lowerSubject.includes('jubail')) {
        setFormData(prev => ({ ...prev, ksaJubail: true }));
      }
      if (lowerSubject.includes('africa')) {
        setFormData(prev => ({ ...prev, africaDetails: true }));
      }
    }
  }, [location.search]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Sync declarant institution when institution name changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      declarantInstitution: prev.institutionName
    }));
  }, [formData.institutionName]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Custom validations
    if (!formData.declarationConfirmed) {
      setErrorMsg('Please confirm the declaration check-box before submitting.');
      return;
    }

    const selectedEventsCount = [
      formData.gccQatar, formData.gccKuwait,
      formData.ksaJeddah, formData.ksaRiyadh, formData.ksaDammam, formData.ksaJubail,
      formData.africaDetails, formData.otherFutureOpp
    ].filter(Boolean).length;

    if (selectedEventsCount === 0) {
      setErrorMsg('Please select at least one event or interest option under Participation Details.');
      return;
    }

    setIsSubmitting(true);

    // Format fields for email readability
    const formPostData = new FormData();
    formPostData.append('_subject', `IHECF University Registration - ${formData.institutionName}`);
    formPostData.append('_template', 'table');
    formPostData.append('_captcha', 'false');
    formPostData.append('_cc', 'info@ihecf.info');
    
    // Add variables in key-value format for FormSubmit table layout
    formPostData.append('1. Institution Name', formData.institutionName);
    formPostData.append('Institution Website', formData.institutionWebsite);
    
    formPostData.append('2. Representative Name', formData.repName);
    formPostData.append('Representative Designation', formData.repDesignation);
    formPostData.append('Representative Department', formData.repDepartment);
    formPostData.append('Representative Mobile', formData.repMobile);
    formPostData.append('Representative Email', formData.repEmail);
    
    if (formData.altName) {
      formPostData.append('Alternate Representative Name', formData.altName);
      formPostData.append('Alternate Mobile', formData.altMobile);
      formPostData.append('Alternate Email', formData.altEmail);
    }
    
    // Selected events
    const selectedEvents = [];
    if (formData.gccQatar) selectedEvents.push('GCC: Qatar (Doha) – 21–24 Sept 2026');
    if (formData.gccKuwait) selectedEvents.push('GCC: Kuwait (Kuwait City) – 27–30 Sept 2026');
    if (formData.ksaJeddah) selectedEvents.push('KSA: Jeddah – 25 Oct 2026');
    if (formData.ksaRiyadh) selectedEvents.push('KSA: Riyadh – 27 Oct 2026');
    if (formData.ksaDammam) selectedEvents.push('KSA: Dammam – 29 Oct 2026');
    if (formData.ksaJubail) selectedEvents.push('KSA: Jubail – 30 Oct 2026');
    if (formData.africaDetails) selectedEvents.push('Africa: Interested in receiving details');
    if (formData.otherFutureOpp) selectedEvents.push('Other Events: Interested in future opportunities');
    
    formPostData.append('3. Selected Events for Participation', selectedEvents.join(', '));
    
    formPostData.append('4. Delegation Count', formData.delegationCount);
    formPostData.append('Names of Representatives', formData.delegationNames || 'N/A');
    
    formPostData.append('5. Declaration Name', formData.declarantName);
    formPostData.append('Declaration Designation', formData.declarantDesignation);
    formPostData.append('Declaration Institution', formData.declarantInstitution);
    formPostData.append('Digital Signature', formData.declarantSignature);
    formPostData.append('Declaration Date', formData.declarantDate);

    try {
      const response = await fetch("https://formsubmit.co/ajax/reachedunial@gmail.com", {
        method: "POST",
        body: formPostData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormDataSummary({ ...formData, selectedEvents });
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Server responded with an error status.');
      }
    } catch (error) {
      console.error("Submission error", error);
      setErrorMsg('Failed to submit form. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to print receipt
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-32">
      <SEO 
        title="University Registration Form | IHECF 2026–27" 
        description="Official university and institution participation registration form for Indian Higher Education & Career Fairs (IHECF) 2026–27 organized by Edunial Group." 
        keywords="University Registration Form, IHECF Exhibitor Sign Up, Edunial Group Partner Registration, Higher Education Fair Booking"
      />

      {/* Hero section */}
      <section className="bg-primary text-white pt-28 md:pt-36 pb-16 md:pb-24 px-6 relative overflow-hidden print:hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/15 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/15 border border-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary mb-4"
          >
            <Sparkles size={14} /> Institution Portal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight"
          >
            University <span className="text-secondary italic">Registration</span> Form
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-gray-350 max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          >
            Edunial Group – Indian Higher Education & Career Fairs (IHECF) 2026–27
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-25 print:mt-0 print:px-0">
        
        {/* Success Screen */}
        {submitted && formDataSummary ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Header branding */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-150 pb-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-inner shrink-0">
                  <CheckCircle size={36} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-primary leading-tight">Registration Submitted!</h2>
                  <p className="text-xs text-gray-500 mt-1">Thank you for confirming your institution's participation.</p>
                </div>
              </div>
              <button 
                onClick={handlePrint}
                className="btn-primary py-3 px-6 text-xs flex items-center gap-2 rounded-xl shadow-lg border border-primary/10 print:hidden shrink-0 hover:scale-105 transition-all"
              >
                <Printer size={16} /> Print Confirmation
              </button>
            </div>

            {/* Email verification reminder warning box */}
            <div className="mb-8 p-5 bg-secondary/5 rounded-2xl border border-secondary/15 text-sm text-gray-700 leading-relaxed flex items-start gap-3.5 print:hidden">
              <Info className="text-secondary shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="text-primary font-bold block mb-1">Attention Email Recipient:</strong>
                FormSubmit.co requires email verification for first-time submissions. Please check the mailbox at <span className="font-extrabold text-secondary-dark">reachedunial@gmail.com</span> for an activation email from FormSubmit and click the "Activate Form" link to ensure future registrations flow automatically.
              </div>
            </div>

            {/* Summary Receipt Layout */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-150 relative">
              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-gray-400 font-extrabold border border-gray-300 rounded px-2.5 py-1 bg-white print:hidden">
                Official Receipt
              </div>
              
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-black text-primary text-lg mb-2">Edunial Group – IHECF 2026–27</h3>
                <p className="text-xs text-gray-550 leading-relaxed">Connecting Universities with Global Student Communities.</p>
              </div>

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-2">1. Institution Details</h4>
                  <p className="text-primary"><strong className="font-bold text-gray-600">Name:</strong> {formDataSummary.institutionName}</p>
                  <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Website:</strong> <a href={formDataSummary.institutionWebsite} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">{formDataSummary.institutionWebsite}</a></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-2">2. Primary Representative</h4>
                    <p className="text-primary"><strong className="font-bold text-gray-600">Name:</strong> {formDataSummary.repName}</p>
                    <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Designation:</strong> {formDataSummary.repDesignation}</p>
                    <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Department:</strong> {formDataSummary.repDepartment}</p>
                    <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Mobile:</strong> {formDataSummary.repMobile}</p>
                    <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Email:</strong> {formDataSummary.repEmail}</p>
                  </div>
                  
                  {formDataSummary.altName && (
                    <div>
                      <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-2">Alternate Contact</h4>
                      <p className="text-primary"><strong className="font-bold text-gray-600">Name:</strong> {formDataSummary.altName}</p>
                      <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Mobile:</strong> {formDataSummary.altMobile}</p>
                      <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Email:</strong> {formDataSummary.altEmail}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-2">3. Selected Event Editions</h4>
                  <ul className="list-disc pl-5 space-y-1 text-primary font-medium">
                    {formDataSummary.selectedEvents.map((evt, index) => (
                      <li key={index}>{evt}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-2">4. Delegation Info</h4>
                  <p className="text-primary"><strong className="font-bold text-gray-600">Representatives Attending:</strong> {formDataSummary.delegationCount}</p>
                  <p className="text-primary mt-1"><strong className="font-bold text-gray-600">Representatives Names:</strong> {formDataSummary.delegationNames || 'N/A'}</p>
                </div>

                <div className="pt-4 border-t border-gray-200 bg-white p-4 rounded-xl border border-gray-150">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-3">5. Digital Declaration & Authorization</h4>
                  <p className="text-xs text-gray-500 italic mb-4 leading-relaxed">"I hereby confirm that the information provided above is accurate and that our institution intends to participate in the selected Edunial Group Indian Higher Education & Career Fair(s) 2026–27..."</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-gray-400 font-bold uppercase">Authorized Name</p>
                      <p className="text-primary font-extrabold mt-0.5">{formDataSummary.declarantName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase">Designation</p>
                      <p className="text-primary font-extrabold mt-0.5">{formDataSummary.declarantDesignation}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase">Institution</p>
                      <p className="text-primary font-extrabold mt-0.5">{formDataSummary.declarantInstitution}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase">Date of Signature</p>
                      <p className="text-primary font-extrabold mt-0.5">{formDataSummary.declarantDate}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-gray-400 font-bold uppercase">Digital Signature</p>
                      <p className="text-secondary font-black text-base italic tracking-widest mt-0.5 border-b border-dashed border-secondary/55 inline-block">{formDataSummary.declarantSignature}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official registration support contact */}
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-500">
              <div>
                <h4 className="font-extrabold text-primary uppercase mb-1">Registration Inquiries</h4>
                <p>Edunial Group – IHECF Coordinator</p>
                <p>Email: <a href="mailto:info@ihecf.info" className="text-secondary font-bold hover:underline">info@ihecf.info</a></p>
                <p>Phone: 9319473355 / 9654448283</p>
              </div>
              <div className="md:text-right flex flex-col justify-end">
                <p className="font-bold text-secondary">Edunial Group</p>
                <p>Connecting Universities with Global Student Communities.</p>
                <a href="https://www.ihecf.info" target="_blank" rel="noreferrer" className="hover:underline">www.ihecf.info</a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-12 flex justify-center gap-4 print:hidden">
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-secondary py-3.5 px-8 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
              >
                Register Another Institution
              </button>
            </div>
          </motion.div>
        ) : (
          /* The Form Container */
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-14 shadow-2xl border border-gray-50"
          >
            <div className="mb-10 pb-6 border-b border-gray-100">
              <h2 className="text-xl md:text-2xl font-black text-primary mb-2">Submit Institution Registration</h2>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Please complete this form to confirm your institution's participation in the Indian Higher Education & Career Fairs (IHECF) 2026–27 organized by Edunial Group.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-8 p-4 bg-red-55 text-red-700 text-xs md:text-sm rounded-2xl border border-red-200 flex items-start gap-2.5 animate-shake">
                <span className="shrink-0 font-extrabold w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">!</span>
                <p className="font-bold">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* SECTION 1: Institution Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary">1. Institution Details</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Name of University/Institution <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="institutionName" 
                      type="text" 
                      value={formData.institutionName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="e.g. Techno Alig Global University" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Institution Website <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="institutionWebsite" 
                      type="url" 
                      value={formData.institutionWebsite}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="e.g. https://www.university.edu" 
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Authorized Representative */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary">2. Authorized Representative Details</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Representative Name <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="repName" 
                      type="text" 
                      value={formData.repName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Designation <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="repDesignation" 
                      type="text" 
                      value={formData.repDesignation}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="e.g. Director Admissions" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Department <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="repDepartment" 
                      type="text" 
                      value={formData.repDepartment}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="e.g. International Relations" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Mobile Number (WhatsApp preferred) <span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <input 
                        required 
                        name="repMobile" 
                        type="tel" 
                        value={formData.repMobile}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                        placeholder="e.g. +91 9876543210" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="repEmail" 
                      type="email" 
                      value={formData.repEmail}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="representative@university.edu" 
                    />
                  </div>
                </div>

                {/* Sub-section: Alternate Contact Person */}
                <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-150/70 space-y-4">
                  <h4 className="text-xs font-black uppercase text-primary/70 tracking-widest">Alternate Contact Person (Optional)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 ml-0.5">Contact Person Name</label>
                      <input 
                        name="altName" 
                        type="text" 
                        value={formData.altName}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-secondary/50 text-xs md:text-sm text-primary font-medium" 
                        placeholder="Alternate Name" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 ml-0.5">Mobile Number</label>
                      <input 
                        name="altMobile" 
                        type="tel" 
                        value={formData.altMobile}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-secondary/50 text-xs md:text-sm text-primary font-medium" 
                        placeholder="Alternate Mobile" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 ml-0.5">Email Address</label>
                      <input 
                        name="altEmail" 
                        type="email" 
                        value={formData.altEmail}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-secondary/50 text-xs md:text-sm text-primary font-medium" 
                        placeholder="alternate@university.edu" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Participation Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary">3. Participation Details</h3>
                </div>
                
                <p className="text-xs text-gray-500 -mt-2">Please select the event(s) you wish to participate in (Select all that apply) <span className="text-red-500">*</span></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* GCC Edition */}
                  <div className="border border-gray-150 rounded-2xl p-5 md:p-6 bg-white space-y-4 hover:shadow-md transition-shadow">
                    <div className="border-b border-gray-100 pb-2 flex items-center justify-between">
                      <h4 className="font-extrabold text-primary text-sm tracking-wide">GCC Edition 2026</h4>
                      <span className="text-[8px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-black uppercase tracking-wider">September 2026</span>
                    </div>
                    <div className="space-y-3.5">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="gccQatar"
                          checked={formData.gccQatar}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Qatar (Doha)</span>
                          <span className="block text-[10px] text-gray-400 font-medium">21–24 September 2026</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="gccKuwait"
                          checked={formData.gccKuwait}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Kuwait (Kuwait City)</span>
                          <span className="block text-[10px] text-gray-400 font-medium">27–30 September 2026</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* KSA Edition */}
                  <div className="border border-gray-150 rounded-2xl p-5 md:p-6 bg-white space-y-4 hover:shadow-md transition-shadow">
                    <div className="border-b border-gray-100 pb-2 flex items-center justify-between">
                      <h4 className="font-extrabold text-primary text-sm tracking-wide">Kingdom of Saudi Arabia (KSA) Edition 2026</h4>
                      <span className="text-[8px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-black uppercase tracking-wider">October 2026</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="ksaJeddah"
                          checked={formData.ksaJeddah}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Jeddah</span>
                          <span className="block text-[10px] text-gray-400 font-medium">25 October 2026</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="ksaRiyadh"
                          checked={formData.ksaRiyadh}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Riyadh</span>
                          <span className="block text-[10px] text-gray-400 font-medium">27 October 2026</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="ksaDammam"
                          checked={formData.ksaDammam}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Dammam</span>
                          <span className="block text-[10px] text-gray-400 font-medium">29 October 2026</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          name="ksaJubail"
                          checked={formData.ksaJubail}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">Jubail</span>
                          <span className="block text-[10px] text-gray-400 font-medium">30 October 2026</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Africa Edition & Other Recruitment Events */}
                  <div className="md:col-span-2 border border-gray-150 rounded-2xl p-5 md:p-6 bg-white space-y-4 hover:shadow-md transition-shadow">
                    <div className="border-b border-gray-100 pb-2">
                      <h4 className="font-extrabold text-primary text-sm tracking-wide">Africa & Other Global Editions</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <label className="flex items-start gap-3 cursor-pointer group p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary/25 transition-all">
                        <input 
                          type="checkbox" 
                          name="africaDetails"
                          checked={formData.africaDetails}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-extrabold text-primary block">Africa Edition 2026–27</span>
                          <span className="text-[11px] text-gray-550 block mt-0.5">I am interested in receiving details about recruitment fairs in Africa (Kenya, Uganda, Tanzania, Senegal, Gambia, etc.)</span>
                        </div>
                      </label>
                      
                      <label className="flex items-start gap-3 cursor-pointer group p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-secondary/25 transition-all">
                        <input 
                          type="checkbox" 
                          name="otherFutureOpp"
                          checked={formData.otherFutureOpp}
                          onChange={handleChange}
                          className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-4.5 h-4.5"
                        />
                        <div>
                          <span className="text-sm font-extrabold text-primary block">Future Global Fairs</span>
                          <span className="text-[11px] text-gray-550 block mt-0.5">Interested in receiving info about future student recruitment opportunities (Southeast Asia, Central Asia, SAARC editions)</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 5 (labeled 5 in doc): Delegation Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary">5. Delegation Information</h3>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1 block">Number of Representatives Attending <span className="text-red-500">*</span></label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2.5 cursor-pointer font-bold text-sm text-gray-700 group hover:text-primary transition-colors">
                      <input 
                        type="radio" 
                        name="delegationCount"
                        value="1 Representative"
                        checked={formData.delegationCount === '1 Representative'}
                        onChange={handleChange}
                        className="text-secondary focus:ring-secondary w-4.5 h-4.5"
                      />
                      1 Representative
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer font-bold text-sm text-gray-700 group hover:text-primary transition-colors">
                      <input 
                        type="radio" 
                        name="delegationCount"
                        value="2 Representatives"
                        checked={formData.delegationCount === '2 Representatives'}
                        onChange={handleChange}
                        className="text-secondary focus:ring-secondary w-4.5 h-4.5"
                      />
                      2 Representatives
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Names of Representatives (if available)</label>
                  <textarea 
                    name="delegationNames" 
                    rows={3} 
                    value={formData.delegationNames}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                    placeholder="Enter full names, designations and emails of the attending representatives if finalized (e.g. 1. Dr. John Doe, Director, 2. Ms. Jane Smith, Officer)"
                  />
                </div>
              </div>

              {/* SECTION 8 (labeled 8 in doc): Declaration */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-black text-primary">8. Declaration</h3>
                </div>

                <div className="bg-primary/5 p-5 md:p-6 rounded-2xl border border-secondary/15 space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      required
                      type="checkbox" 
                      name="declarationConfirmed"
                      checked={formData.declarationConfirmed}
                      onChange={handleChange}
                      className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary focus:ring-offset-0 w-5 h-5 shrink-0"
                    />
                    <span className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed group-hover:text-primary transition-colors select-none">
                      I hereby confirm that the information provided above is accurate and that our institution intends to participate in the selected Edunial Group Indian Higher Education & Career Fair(s) 2026–27, subject to registration confirmation and applicable participation terms. <span className="text-red-500 font-extrabold">*</span>
                    </span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Authorized Person Name <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="declarantName" 
                      type="text" 
                      value={formData.declarantName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="Authorized Name" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Designation <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="declarantDesignation" 
                      type="text" 
                      value={formData.declarantDesignation}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="Representative Title" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Institution/University <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="declarantInstitution" 
                      type="text" 
                      value={formData.declarantInstitution}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                      placeholder="University Name" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Authorized Digital Signature (Type Name) <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="declarantSignature" 
                      type="text" 
                      value={formData.declarantSignature}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-secondary font-black italic tracking-widest" 
                      placeholder="Type your name to digitally sign" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Date <span className="text-red-500">*</span></label>
                    <input 
                      required 
                      name="declarantDate" 
                      type="date" 
                      value={formData.declarantDate}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-primary font-medium" 
                    />
                  </div>
                </div>
              </div>

              {/* Submitting Actions */}
              <div className="pt-6 border-t border-gray-100 flex flex-col items-center">
                <button 
                  disabled={isSubmitting}
                  className="btn-secondary w-full sm:w-auto px-12 py-4 md:py-5 text-base md:text-lg shadow-xl group disabled:opacity-50 flex items-center justify-center gap-2 hover:scale-[1.03] transition-transform duration-300"
                >
                  {isSubmitting ? 'Submitting Registration...' : (
                    <>
                      Confirm & Submit Registration <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-[10px] md:text-xs text-gray-400 font-extrabold uppercase tracking-widest mt-4">Safe & Encrypted Form Submission</p>
              </div>

            </form>

            {/* Form footer coordinator contacts */}
            <div className="mt-14 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-gray-550 leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-extrabold text-primary uppercase text-sm tracking-wide">Contact for Registration</h4>
                <p className="font-extrabold text-secondary">Edunial Group</p>
                <p>Email: <a href="mailto:info@ihecf.info" className="text-primary hover:underline">info@ihecf.info</a></p>
                <p>Mobile: 9319473355 / 9654448283</p>
                <p>Website: <a href="https://www.ihecf.info" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.ihecf.info</a></p>
              </div>
              <div className="flex flex-col justify-end sm:text-right">
                <p className="text-gray-400 font-black uppercase text-[10px] tracking-wider mb-2">Edunial Group Core Value</p>
                <p className="font-bold text-primary">Connecting Universities with Global Student Communities Across India, GCC, Africa & Emerging Education Markets.</p>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
};

export default UniversityRegistration;
