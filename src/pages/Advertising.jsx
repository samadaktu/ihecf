import { motion } from 'framer-motion';
import { BadgeCheck, BarChart3, Target, Users, ShoppingBag, Mail, Shirt, Presentation, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Advertising = () => {
  const whySponsor = [
    { 
      title: "Brand Awareness", 
      icon: <Target />, 
      desc: "Create a wide network among your target audience and increase brand awareness significantly."
    },
    { 
      title: "Positive Image", 
      icon: <BadgeCheck />, 
      desc: "Contribute to a strong and prestigious appearance in the minds of fair visitors."
    },
    { 
      title: "High ROI", 
      icon: <BarChart3 />, 
      desc: "Get a great return on investment by standing out in future purchasing decisions."
    },
    { 
      title: "Direct Access", 
      icon: <Users />, 
      desc: "Reach over 30,000 students and 50+ prestigious institutions directly every year."
    }
  ];

  const options = [
    { title: "Fair Bag Insert", icon: <ShoppingBag />, desc: "Place your brochure in bags distributed to every registered student." },
    { title: "Post Fair Email", icon: <Mail />, desc: "Targeted electronic flyers sent to our exclusive post-fair database." },
    { title: "Staff Uniforms", icon: <Shirt />, desc: "Your logo featured on the uniforms of all event staff and volunteers." },
    { title: "Seminar Room", icon: <Presentation />, desc: "Exclusive branding within high-traffic seminar and presentation halls." },
    { title: "Site Signage", icon: <MapPin />, desc: "Logo placement on all directional and informative signage throughout the venue." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Advertising & Sponsorship" 
        description="Explore advertising and sponsorship opportunities with IHECF. Increase your brand awareness, trust, and loyalty in the international recruitment sector." 
        keywords="Education Sponsorship, Academic Advertising, Student Recruitment Branding, IHECF Sponsor"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "IHECF Advertising & Sponsorship Packages",
          "description": "Premium sponsorship options including Fair Bag Inserts, Post Fair Emails, Site Signage, and Seminar Room branding to expand university visibility in student fairs.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "IHECF"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('/hero_background_students_map.png')] bg-cover opacity-10 grayscale scale-110" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary mb-4 md:mb-6 border border-white/10">
              <BadgeCheck size={12} /> Partner Opportunities
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">
              Elevate Your <span className="text-secondary italic">Brand</span> Presence
            </h1>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              IHECF leads the international student recruitment industry. Our sponsorship packages help your brand build awareness, trust, and long-term loyalty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-primary mb-4">Why Partner With <span className="text-secondary">Us?</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">Gain face-to-face access to thousands of students and parents through India's most prestigious recruitment events.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whySponsor.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 group transition-all"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sponsorship Options - Bento Layout */}
      <section className="bg-primary py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">Solutions</span>
              <h2 className="text-3xl md:text-6xl text-white font-black tracking-tighter">Advertising <span className="text-secondary italic">Packages</span></h2>
            </div>
            <p className="text-gray-400 text-sm md:text-lg max-w-sm">Select the perfect solution to reach your target market directly and effectively.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {options.map((opt, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`${i % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'} bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group hover:border-secondary transition-all`}
              >
                <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {opt.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{opt.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{opt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-accent-light rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 border border-secondary/10 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-4 shadow-inner">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black text-primary mb-2">30k+</div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Student Impressions</div>
          </div>
          <div className="h-px w-20 md:h-20 md:w-px bg-secondary/20" />
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black text-primary mb-2">50+</div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Partner Institutions</div>
          </div>
          <div className="h-px w-20 md:h-20 md:w-px bg-secondary/20" />
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black text-primary mb-2">200+</div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Partner Schools</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl text-white font-black tracking-tighter mb-6">Ready to <span className="text-secondary">Sponsor?</span></h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">Contact us to receive our comprehensive sponsorship catalog and pricing guide.</p>
            <Link to="/contact" className="btn-secondary px-10 md:px-12 py-4 md:py-5 text-base md:text-lg rounded-full shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3">
              Request Catalog <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertising;
