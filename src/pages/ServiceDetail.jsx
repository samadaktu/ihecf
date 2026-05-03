import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  Users, 
  Zap, 
  Globe, 
  Target, 
  BarChart, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { services } from '../utils/data';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
  }

  const getExtraData = (slug) => {
    switch(slug) {
      case 'education-fairs':
        return {
          features: ['Premium Venue Locations', 'Massive Student Outreach', 'Digital Lead Management', 'Spot Admission Support'],
          stats: [{ label: 'Avg. Visitors', value: '2k+' }, { label: 'Cities', value: '15+' }, { label: 'Conversion', value: '15%' }],
          image: '/ksa_education_event.png'
        };
      case 'counsellor-meet':
        return {
          features: ['One-on-One Networking', 'Presentation Opportunities', 'Counsellor Directory Access', 'High-Tea & Lunch Meets'],
          stats: [{ label: 'Counsellors', value: '500+' }, { label: 'Schools', value: '300+' }, { label: 'Satisfaction', value: '99%' }],
          image: '/student_interaction_fair.png'
        };
      case 'school-visits':
        return {
          features: ['Direct Classroom Access', 'Parent Interaction', 'Document Distribution', 'Feedback Reports'],
          stats: [{ label: 'Schools', value: '100+' }, { label: 'Presentations', value: '450+' }, { label: 'Engagement', value: 'High' }],
          image: '/kenya_education_event.png'
        };
      case 'market-research':
        return {
          features: ['Competitor Intelligence', 'Pricing Analysis', 'Legal Compliance Guides', 'Marketing Strategy'],
          stats: [{ label: 'Data Points', value: '1M+', icon: <BarChart /> }, { label: 'Reports', value: '50+' }, { label: 'Accuracy', value: '98%' }],
          image: '/vietnam_education_event.png'
        };
      default:
        return { features: [], stats: [], image: '/hero_background_students_map.png' };
    }
  };

  const extra = getExtraData(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img src={extra.image} alt={service.title} className="w-full h-full object-cover opacity-20 scale-105 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/services" className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-8 md:mb-12 hover:gap-6 transition-all">
            <ArrowLeft size={16} /> All Services
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary mb-4 md:mb-6 border border-white/10">
                <Sparkles size={12} /> Premium Solution
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">{service.title}</h1>
              <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl">{service.description}</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full lg:w-auto">
              {extra.stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col items-center text-center">
                  <div className="text-xl md:text-3xl font-black text-secondary mb-1">{stat.value}</div>
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-primary">Strategic <span className="text-secondary italic">Core Benefits</span></h2>
            <p className="text-gray-500 text-base md:text-xl leading-relaxed mb-12">
               Our approach to {service.title} is built on over a decade of local market expertise. We ensure your university gets maximum visibility and high-quality lead generation through a meticulously planned execution.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {extra.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white text-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary group-hover:text-white transition-colors uppercase tracking-widest mb-1">{feature}</h4>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">Industry standard excellence.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-gray-100 relative group shadow-2xl">
              <img src={extra.image} alt="Process" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/20">
                 <h4 className="text-xl font-bold mb-2">Our Execution Process</h4>
                 <p className="text-gray-500 text-sm">Every detail is handled by our on-ground experts to guarantee a seamless experience for your admission team.</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">Ready to activate your <span className="text-secondary">{service.title}</span> strategy?</h2>
              <p className="text-gray-400 text-base md:text-lg">Contact our team today to get a customized proposal for your university.</p>
            </div>
            <Link to="/contact" className="btn-secondary px-10 md:px-12 py-5 text-base md:text-lg shadow-2xl w-full md:w-auto text-center flex justify-center">
              Start Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="pb-24 px-6 max-w-7xl mx-auto border-t border-gray-50 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
             <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
             <span>/</span>
             <span className="text-primary">{service.title}</span>
           </div>
           <div className="flex gap-8">
             {services.filter(s => s.slug !== slug).slice(0, 2).map(s => (
               <Link key={s.slug} to={`/service/${s.slug}`} className="text-sm font-black text-primary hover:text-secondary transition-colors border-b-2 border-secondary/30 hover:border-secondary pb-1">{s.title}</Link>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
