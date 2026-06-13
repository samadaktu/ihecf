import { motion } from 'framer-motion';
import { Target, Eye, Clock, Award, ShieldCheck, Zap, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    { title: "Excellence", icon: <Award />, desc: "Delivering premium educational opportunities and unparalleled event execution across every global market we touch." },
    { title: "Integrity", icon: <ShieldCheck />, desc: "We serve as a transparent, dependable bridge for families and university partners alike." },
    { title: "Innovation", icon: <Zap />, desc: "The global education landscape is constantly evolving, and so are we. We pioneer new recruitment strategies, leverage modern digital tools, and build strategic diplomatic collaborations to stay ahead of the curve." }
  ];

  const timeline = [
    { year: "2012", title: "Inception", desc: "Started as a small consultancy focused on Indian student mobility." },
    { year: "2015", title: "Middle East Expansion", desc: "Launched our first major fairs across key Middle Eastern hubs." },
    { year: "2018", title: "African Footprint", desc: "Established strong ties with schools across the African continent." },
    { year: "2023", title: "Global Network", desc: "Connecting 30,000+ students across 20+ countries annually." }
  ];

  const globalPresence = [
    {
      region: "African Footprint",
      desc: "Established strong ties with schools in:",
      countries: [
        { name: "Ethiopia", code: "et" },
        { name: "Uganda", code: "ug" },
        { name: "Kenya", code: "ke" },
        { name: "Tanzania", code: "tz" },
        { name: "Zambia", code: "zm" },
        { name: "Zimbabwe", code: "zw" },
        { name: "Gambia", code: "gm" },
        { name: "Senegal", code: "sn" },
        { name: "Namibia", code: "na" },
        { name: "Mauritius", code: "mu" },
        { name: "Fiji", code: "fj" }
      ]
    },
    {
      region: "Middle East Expansion",
      desc: "Launched our first major fairs in:",
      countries: [
        { name: "Saudi Arabia", code: "sa" },
        { name: "Qatar", code: "qa" },
        { name: "Kuwait", code: "kw" },
        { name: "Oman", code: "om" }
      ]
    },
    {
      region: "Southeast Asia",
      desc: "Connecting with institutions and schools in:",
      countries: [
        { name: "Cambodia", code: "kh" },
        { name: "Thailand", code: "th" }
      ]
    },
    {
      region: "SAARC",
      desc: "Building academic partnerships in:",
      countries: [
        { name: "Nepal", code: "np" },
        { name: "Bangladesh", code: "bd" },
        { name: "Sri Lanka", code: "lk" }
      ]
    },
    {
      region: "Central Asia",
      desc: "Expanding student recruitment networks in:",
      countries: [
        { name: "Uzbekistan", code: "uz" },
        { name: "Kazakhstan", code: "kz" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn more about IHECF, a part of the Edunial Group, dedicated to creating meaningful connections between world-class Indian institutions and ambitious international students." 
        keywords="About IHECF, Edunial Group, Student Recruitment Mission, Global Education Vision"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About IHECF & Edunial Group",
          "description": "Learn about the Indian Higher Education & Career Fair (IHECF), powered by Edunial Group, dedicated to recruitment mobility and partner networks globally.",
          "publisher": {
            "@type": "EducationalOrganization",
            "name": "IHECF"
          }
        }}
      />
      {/* Hero - Optimized for Mobile */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl mb-6 font-black tracking-tighter leading-tight"
          >
            The Premier Gateway Connecting Global Talent with <span className="text-secondary">World-Class Education</span>
          </motion.h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Driven by Edunial, the Indian Higher Education & Career Fair (IHECF) is the definitive bridge between ambitious international students and India’s leading universities. We simplify the global student recruitment ecosystem, empowering future leaders with world-class academic pathways while helping premier institutions expand their global footprint.<br /><br />
            At Edunial Group, we don’t just advise — we partner in your success.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Responsive Padding and Rounded Corners */}
      <section className="py-16 md:py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <Target size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 font-bold">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-base md:text-lg">
            To create a seamless, trusted ecosystem where premier Indian institutions and international talent meet. Through strategic global recruitment fairs, diplomatic collaborations, and dedicated student support, we turn academic aspirations into tangible global opportunities.
          </p>
        </div>
        <div className="bg-primary text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
            <Eye size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl mb-4 font-bold">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            To reshape the global education landscape by making India the destination of choice for future leaders seeking academic excellence, cultural diversity, and future-ready career pathways.
          </p>
        </div>
      </section>

      {/* Timeline - Adjusted Spacing for Mobile */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-20 font-bold">Our Journey Since 2012</h2>
          <div className="relative border-l-2 border-secondary/30 pl-8 md:pl-12 ml-2 md:ml-4 space-y-12 md:space-y-16">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 md:w-6 md:h-6 bg-secondary rounded-full border-4 border-white shadow-lg" />
                <div className="text-secondary font-black text-2xl md:text-3xl mb-1">{item.year}</div>
                <h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm md:text-lg max-w-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Footprint</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Expanding our reach and creating meaningful connections across the globe.</p>
          </div>
          <div className="space-y-8 md:space-y-12">
            {globalPresence.map((region, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{region.region}</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg">{region.desc}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                  {region.countries.map((country, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2.5 md:py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src={`https://flagcdn.com/w40/${country.code}.png`} 
                        alt={`${country.name} flag`} 
                        className="w-6 md:w-8 h-auto rounded-sm shadow-sm object-cover shrink-0" 
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-gray-800 text-sm md:text-base leading-tight truncate">{country.name}</span>
                        {country.sub && <span className="text-[10px] md:text-xs text-gray-500 mt-0.5 leading-tight line-clamp-2">{country.sub}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Responsive Grid */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 md:mb-16 font-bold">The Values That Drive Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="text-center p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-light text-primary rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-inner">
                  {v.icon}
                </div>
                <h3 className="text-xl md:text-2xl mb-3 md:mb-4 font-bold">{v.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
