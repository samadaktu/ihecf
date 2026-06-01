import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using formsubmit.co to handle submissions to info@ihecf.info
    const formData = new FormData(e.target);
    formData.append('_subject', 'New Contact Inquiry - IHECF Website');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@ihecf.info", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Phone />, label: 'T.P. Singh', value: '+91-9319473355', desc: 'KSA: +966-0544548024', isName: true },
    { icon: <Phone />, label: 'Ms. Kavita', value: '+91-9654448283', isName: true },
    { icon: <Mail />, label: 'Email Us', value: 'info@ihecf.info', desc: 'We reply within 24 hours' },
    { icon: <MapPin />, label: 'Visit Office', value: 'Delhi-110091', desc: 'B-2/A, East Vinod Nagar' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with IHECF for university partnerships, event registrations, or school collaborations. Our team is ready to assist you worldwide." 
        keywords="Contact IHECF, University Partnership, Event Registration, Global Inquiries"
      />
      {/* Hero - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-6xl mb-6 font-black tracking-tighter leading-tight">
              Forging <span className="text-secondary">Partnerships</span> | Unlocking Global Potential
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              We invite you to partner with us in creating meaningful connections between leading institutions and motivated students. This platform provides an excellent opportunity to showcase your programs, present scholarship offerings, and build direct relationships with high-potential students who are seeking world-class education in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content - Responsive Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Info Side */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 font-bold">Get in Touch</h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
                Have questions about our upcoming fairs? Our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {contactInfo.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 md:p-8 bg-gray-50 rounded-[2rem] border border-gray-100 group transition-all"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-secondary rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className={`text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 ${item.isName ? 'font-extrabold text-primary' : 'font-bold text-gray-400'}`}>
                    {item.label}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-primary mb-1">{item.value}</p>
                  {item.desc && <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>}
                </motion.div>
              ))}
            </div>

            <div className="bg-primary p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <MessageSquare className="text-secondary" /> Global Inquiries
              </h3>
              <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Operating across 20+ countries, we have representatives ready for local queries.
              </p>
              <div className="flex flex-wrap gap-3">
                 {['KSA', 'Oman', 'Vietnam', 'Kenya'].map(c => (
                   <span key={c} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest">{c}</span>
                 ))}
              </div>
            </div>
          </div>

          {/* Form Side - Adjusted Padding for Mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-gray-50"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We will get back to you at info@ihecf.info soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-secondary font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Name</label>
                    <input required name="name" type="text" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Name" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                    <input required name="email" type="email" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Organization</label>
                  <input required name="organization" type="text" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Institution" />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Help with?</label>
                  <select name="subject" className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base text-gray-500">
                    <option>University Partnership</option>
                    <option>Event Registration</option>
                    <option>School Collaboration</option>
                  </select>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea required name="message" rows={4} className="w-full bg-gray-50 border-none rounded-xl md:rounded-2xl p-4 focus:ring-2 focus:ring-secondary/50 text-sm md:text-base" placeholder="Message"></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="btn-secondary w-full py-4 md:py-5 text-base md:text-lg shadow-xl group disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center justify-center gap-2">
                      Send <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Real Google Map */}
      <section className="h-[400px] md:h-[500px] bg-gray-100 mx-4 md:mx-6 mb-16 md:mb-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-inner border border-gray-100">
        <iframe 
          src="https://maps.google.com/maps?q=B-2/A,East%20Vinod%20Nagar,Delhi-110091&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }} 
          allowFullScreen="" 
          loading="lazy" 
          className="hover:grayscale-0 transition-all duration-1000"
          title="IHECF Headquarters"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
