import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Globe, 
  RefreshCw, 
  Layers, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Building, 
  CheckCircle, 
  X, 
  ChevronRight, 
  Info, 
  ExternalLink, 
  AlertCircle, 
  Phone, 
  Mail, 
  Award 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const EventCalendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScheduleFilter, setSelectedScheduleFilter] = useState('All'); // 'All' | 'Confirmed' | 'TBA'
  
  // Modal states
  const [selectedEventForInquiry, setSelectedEventForInquiry] = useState(null);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [showSuccessInquiry, setShowSuccessInquiry] = useState(false);

  const setSelectedRegion = (region) => {
    if (region === 'All') {
      searchParams.delete('region');
    } else {
      searchParams.set('region', region);
    }
    setSearchParams(searchParams);
  };

  const calendarData = [
    {
      region: "Middle East",
      events: [
        { sno: 1, country: "Qatar", flag: "https://flagcdn.com/w40/qa.png", slug: "qatar", city: "Doha", date: "21/22/23/24 Sept.", venue: "MES Indian School, Doha", cost: "₹ 4,00,000", remark: "" },
        { sno: 2, country: "Kuwait", flag: "https://flagcdn.com/w40/kw.png", slug: "kuwait", city: "Kuwait City", date: "27/28/29/30 Sept.", venue: "United Indian School / Birla School", cost: "₹ 4,00,000", remark: "" },
        { sno: 3, country: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png", slug: "ksa", city: "Riyadh / Dammam / Jubail / Jeddah", date: "25/27/28/29 Oct.", venue: "IIS Riyadh, Dammam, Jubail, Jeddah", cost: "₹ 10,65,000", remark: "" }
      ]
    },
    {
      region: "Africa",
      events: [
        { sno: 1, country: "Gambia", flag: "https://flagcdn.com/w40/gm.png", slug: "gambia", city: "Banjul", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 2, country: "Senegal", flag: "https://flagcdn.com/w40/sn.png", slug: "senegal", city: "Dakar", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 3, country: "Ethiopia", flag: "https://flagcdn.com/w40/et.png", slug: "ethiopia", city: "Addis Ababa", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 4, country: "Kenya", flag: "https://flagcdn.com/w40/ke.png", slug: "kenya", city: "Nairobi", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 5, country: "Uganda", flag: "https://flagcdn.com/w40/ug.png", slug: "uganda", city: "Kampala", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 6, country: "Tanzania", flag: "https://flagcdn.com/w40/tz.png", slug: "tanzania", city: "Zanzibar / Dar es Salaam", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 7, country: "Zambia", flag: "https://flagcdn.com/w40/zm.png", slug: "zambia", city: "Lusaka", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 8, country: "Zimbabwe", flag: "https://flagcdn.com/w40/zw.png", slug: "zimbabwe", city: "Harare", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 9, country: "Namibia", flag: "https://flagcdn.com/w40/na.png", slug: "namibia", city: "Windhoek", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 10, country: "Mauritius", flag: "https://flagcdn.com/w40/mu.png", slug: "mauritius", city: "Port Louis", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 11, country: "Fiji", flag: "https://flagcdn.com/w40/fj.png", slug: "fiji", city: "Suva", date: "TBA", venue: "TBA", cost: "TBA", remark: "" }
      ]
    },
    {
      region: "South East Asia",
      events: [
        { sno: 1, country: "Cambodia", flag: "https://flagcdn.com/w40/kh.png", slug: "cambodia", city: "Phnom Penh", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 2, country: "Thailand", flag: "https://flagcdn.com/w40/th.png", slug: "thailand", city: "Bangkok", date: "TBA", venue: "TBA", cost: "TBA", remark: "" }
      ]
    },
    {
      region: "Central Asia",
      events: [
        { sno: 1, country: "Uzbekistan", flag: "https://flagcdn.com/w40/uz.png", slug: "uzbekistan", city: "Tashkent", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 2, country: "Kazakhstan", flag: "https://flagcdn.com/w40/kz.png", slug: "kazakhstan", city: "Astana", date: "TBA", venue: "TBA", cost: "TBA", remark: "" }
      ]
    },
    {
      region: "SAARC",
      events: [
        { sno: 1, country: "Nepal", flag: "https://flagcdn.com/w40/np.png", slug: "nepal", city: "Kathmandu", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 2, country: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png", slug: "bangladesh", city: "Dhaka / Chittagong", date: "TBA", venue: "TBA", cost: "TBA", remark: "" },
        { sno: 3, country: "Sri Lanka", flag: "https://flagcdn.com/w40/lk.png", slug: "sri-lanka", city: "Colombo / Kandy", date: "TBA", venue: "TBA", cost: "TBA", remark: "" }
      ]
    }
  ];

  const regionsList = ['All', 'Middle East', 'Africa', 'South East Asia', 'Central Asia', 'SAARC'];

  // Calculate dynamic stats for status counters (based on region if a specific one is selected)
  const getCounts = () => {
    let baseEvents = [];
    if (selectedRegion === 'All') {
      baseEvents = calendarData.flatMap(r => r.events);
    } else {
      const block = calendarData.find(r => r.region === selectedRegion);
      baseEvents = block ? block.events : [];
    }

    const total = baseEvents.length;
    const confirmed = baseEvents.filter(e => e.date !== 'TBA').length;
    const tba = baseEvents.filter(e => e.date === 'TBA').length;

    return { total, confirmed, tba };
  };

  const { total: totalEventsCount, confirmed: confirmedCount, tba: tbaCount } = getCounts();

  // Filter logic
  const getFilteredData = () => {
    return calendarData
      .map(regionBlock => {
        const filteredEvents = regionBlock.events.filter(event => {
          const query = searchQuery.toLowerCase();
          const matchesQuery = (
            event.country.toLowerCase().includes(query) ||
            event.city.toLowerCase().includes(query) ||
            event.venue.toLowerCase().includes(query)
          );

          const isTBA = event.date === 'TBA';
          let matchesSchedule = true;
          if (selectedScheduleFilter === 'Confirmed') {
            matchesSchedule = !isTBA;
          } else if (selectedScheduleFilter === 'TBA') {
            matchesSchedule = isTBA;
          }

          return matchesQuery && matchesSchedule;
        });

        return {
          ...regionBlock,
          events: filteredEvents
        };
      })
      .filter(regionBlock => {
        const matchesRegion = selectedRegion === 'All' || regionBlock.region === selectedRegion;
        return matchesRegion && regionBlock.events.length > 0;
      });
  };

  const filteredData = getFilteredData();

  // Handle inquiry submissions
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingInquiry(true);
    
    const formData = new FormData(e.target);
    formData.append('inquiry_type', 'Institutional Exhibitor Inquiry');
    formData.append('target_event_country', selectedEventForInquiry.country);
    formData.append('target_event_city', selectedEventForInquiry.city);
    formData.append('_subject', `New Exhibitor Inquiry: ${selectedEventForInquiry.country} (${selectedEventForInquiry.city})`);
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
        setShowSuccessInquiry(true);
        setTimeout(() => {
          setShowSuccessInquiry(false);
          setSelectedEventForInquiry(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Exhibitor inquiry submission error", error);
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 260, damping: 25 } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <SEO 
        title="Annual Event Calendar 2026-27 | IHECF Recruitment Fairs" 
        description="View the comprehensive annual event schedule of Indian Higher Education & Career Fairs (IHECF) in the Middle East, Africa, and Asia. Plan your recruitment tours."
        keywords="IHECF Event Calendar, Education Fair Schedule 2026, Indian Universities Recruitment GCC Africa, Edunial Group Fairs"
      />

      {/* Hero Header - Split-Grid Premium Design */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-20 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/hero_background_students_map.png" alt="Global Event Map Background" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-transparent z-0" />
        
        {/* Decorative Light Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary-light/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Heading & Search */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-secondary/10 rounded-full text-xs font-black uppercase tracking-widest text-secondary border border-secondary/20">
                <Globe size={13} className="animate-spin" style={{ animationDuration: '12s' }} /> 
                Global Recruitment Network
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Edunial Group <br />
                <span className="text-secondary italic">Annual Event Calendar</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl font-medium leading-relaxed">
                Connect directly with international student hubs. Plan your university recruitment tours across the Middle East, Africa, Central Asia, and SAARC.
              </p>
              
              {/* Search & Reset Inputs */}
              <div className="flex flex-col sm:flex-row gap-3 bg-primary-light/85 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center px-3 py-2 flex-grow bg-white/5 rounded-xl border border-white/5 focus-within:border-secondary/40 transition-colors">
                  <Search size={18} className="text-secondary mr-2 shrink-0" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by country, city, or venue..." 
                    className="bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-400 text-sm w-full"
                  />
                </div>
                <button 
                  onClick={() => { setSelectedRegion('All'); setSearchQuery(''); setSelectedScheduleFilter('All'); }}
                  className="px-5 py-2.5 bg-secondary hover:bg-secondary/80 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-secondary/10"
                >
                  <RefreshCw size={13} /> Reset Filters
                </button>
              </div>
            </div>

            {/* Right side: Glass Dashboard Stats Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <h3 className="text-white text-lg font-black tracking-tight border-b border-white/10 pb-3 flex items-center gap-2">
                <Award size={18} className="text-secondary" /> Tour Coverage At a Glance
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-secondary text-2xl font-black mb-1">5+</div>
                  <div className="text-gray-400 text-xs font-semibold">Strategic Regions</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-secondary text-2xl font-black mb-1">20+</div>
                  <div className="text-gray-400 text-xs font-semibold">Key Countries</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-secondary text-2xl font-black mb-1">GCC</div>
                  <div className="text-gray-400 text-xs font-semibold">Confirmed Fairs</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="text-secondary text-2xl font-black mb-1">90%+</div>
                  <div className="text-gray-400 text-xs font-semibold">Mobile Visitors</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 p-3 rounded-xl text-xs font-bold leading-snug">
                <Info size={16} className="shrink-0" />
                <span>Pre-registration guarantees premium booth locations in upcoming events.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Filter Tabs (Sticky Navigation Bar) */}
      <section className="py-6 px-6 bg-white border-b border-gray-150/40 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:items-center justify-between">
          
          {/* Region Tabs (Scrollable on Mobile) */}
          <div className="w-full md:max-w-3xl overflow-hidden">
            <div className="flex items-center gap-1.5 text-gray-450 font-black uppercase text-[10px] tracking-widest mb-2.5">
              <Filter size={12} className="text-secondary" /> Region Filter
            </div>
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar snap-x pb-1 scroll-smooth">
              {regionsList.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border snap-start whitespace-nowrap cursor-pointer hover:scale-[1.02] ${
                    selectedRegion === region 
                    ? 'bg-secondary border-secondary text-white shadow-md font-black shadow-secondary/15' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Status Sub-Filter */}
          <div className="shrink-0">
            <div className="flex items-center gap-1.5 text-gray-450 font-black uppercase text-[10px] tracking-widest mb-2.5">
              <Calendar size={12} className="text-secondary" /> Schedule Status
            </div>
            <div className="flex bg-gray-100/80 border border-gray-200/50 p-1 rounded-xl">
              <button 
                onClick={() => setSelectedScheduleFilter('All')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedScheduleFilter === 'All' 
                  ? 'bg-white text-primary shadow-sm font-black' 
                  : 'text-gray-500 hover:text-primary'
                }`}
              >
                All ({totalEventsCount})
              </button>
              <button 
                onClick={() => setSelectedScheduleFilter('Confirmed')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedScheduleFilter === 'Confirmed' 
                  ? 'bg-white text-primary shadow-sm font-black' 
                  : 'text-gray-500 hover:text-primary'
                }`}
              >
                Confirmed ({confirmedCount})
              </button>
              <button 
                onClick={() => setSelectedScheduleFilter('TBA')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedScheduleFilter === 'TBA' 
                  ? 'bg-white text-primary shadow-sm font-black' 
                  : 'text-gray-500 hover:text-primary'
                }`}
              >
                Upcoming ({tbaCount})
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Calendar Main Grid / List */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((regionBlock) => (
              <div key={regionBlock.region} className="mb-14 last:mb-0">
                {/* Region Heading */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-200/60 pb-3">
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-primary flex items-center gap-2.5">
                    <Layers size={20} className="text-secondary" /> {regionBlock.region}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 px-3.5 py-1 rounded-full">
                    {regionBlock.events.length} {regionBlock.events.length === 1 ? 'Exposition' : 'Expositions'}
                  </span>
                </div>

                {/* DESKTOP VIEW: Premium Card-styled Table (Hidden on Mobile) */}
                <div className="hidden md:block w-full overflow-hidden">
                  <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        <th className="py-2 px-5 text-center w-14">S.No.</th>
                        <th className="py-2 px-5 text-left">Country</th>
                        <th className="py-2 px-5 text-left">Target City</th>
                        <th className="py-2 px-5 text-left">Event Date</th>
                        <th className="py-2 px-5 text-left">Exhibition Venue</th>
                        <th className="py-2 px-5 text-left">Participation Cost</th>
                        <th className="py-2 px-5 text-left">Booking Status</th>
                        <th className="py-2 px-5 text-center w-48">Actions</th>
                      </tr>
                    </thead>
                    <motion.tbody 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="text-sm font-semibold text-gray-700"
                    >
                      {regionBlock.events.map((event) => {
                        const isTBA = event.date === 'TBA';
                        return (
                          <motion.tr 
                            key={event.country + event.sno} 
                            variants={itemVariants}
                            className="group transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50"
                          >
                            {/* Number */}
                            <td className="py-4 px-5 bg-white text-center text-gray-400 font-bold first:rounded-l-2xl border-t border-b first:border-l border-gray-150/40">
                              {event.sno}.
                            </td>
                            {/* Country & Flag */}
                            <td className="py-4 px-5 bg-white border-t border-b border-gray-150/40">
                              <Link 
                                to={`/country/${event.slug}`} 
                                className="inline-flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                              >
                                <img 
                                  src={event.flag} 
                                  alt={`${event.country} flag`} 
                                  className="w-7 h-5 rounded object-cover border border-gray-200 shadow-sm shrink-0"
                                />
                                <span className="font-bold whitespace-nowrap">{event.country}</span>
                              </Link>
                            </td>
                            {/* City */}
                            <td className="py-4 px-5 bg-white text-gray-600 font-bold border-t border-b border-gray-150/40 whitespace-nowrap">
                              {event.city}
                            </td>
                            {/* Date */}
                            <td className="py-4 px-5 bg-white border-t border-b border-gray-150/40 whitespace-nowrap">
                              {isTBA ? (
                                <span className="text-gray-400 font-medium italic">Dates TBA</span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-primary/5 text-primary rounded-lg border border-primary/10 text-xs font-black">
                                  <Calendar size={12} className="text-secondary" />
                                  {event.date}
                                </span>
                              )}
                            </td>
                            {/* Venue */}
                            <td className="py-4 px-5 bg-white text-gray-500 font-medium text-xs leading-relaxed max-w-[220px] border-t border-b border-gray-150/40">
                              {isTBA ? (
                                <span className="text-gray-450 font-medium italic">Scheduling in progress</span>
                              ) : (
                                <span className="flex items-start gap-1">
                                  <Building size={12} className="text-gray-400 shrink-0 mt-0.5" />
                                  {event.venue}
                                </span>
                              )}
                            </td>
                            {/* Cost */}
                            <td className="py-4 px-5 bg-white border-t border-b border-gray-150/40 whitespace-nowrap font-black text-gray-800">
                              {isTBA ? (
                                <span className="text-gray-400 font-medium italic">TBA</span>
                              ) : (
                                <span>{event.cost}</span>
                              )}
                            </td>
                            {/* Status */}
                            <td className="py-4 px-5 bg-white border-t border-b border-gray-150/40 whitespace-nowrap">
                              {isTBA ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-amber-250/20">
                                  Planning Phase
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-250/20">
                                  Booking Open
                                </span>
                              )}
                            </td>
                            {/* Actions */}
                            <td className="py-4 px-5 bg-white text-center last:rounded-r-2xl border-t border-b last:border-r border-gray-150/40">
                              <div className="flex items-center justify-center gap-2.5">
                                <Link 
                                  to={`/country/${event.slug}`} 
                                  title="View Country Details"
                                  className="p-2 text-gray-400 hover:text-secondary transition-colors hover:bg-slate-100 rounded-lg"
                                >
                                  <ChevronRight size={18} />
                                </Link>
                                <button 
                                  onClick={() => setSelectedEventForInquiry(event)}
                                  className={`py-2 px-4 rounded-xl text-xs font-black transition-all duration-300 cursor-pointer ${
                                    isTBA 
                                    ? 'border border-primary text-primary hover:bg-primary hover:text-white shadow-sm' 
                                    : 'bg-secondary text-white hover:bg-secondary-light shadow-md shadow-secondary/15 hover:scale-[1.02]'
                                  }`}
                                >
                                  {isTBA ? 'Request Alert' : 'Book Booth'}
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </motion.tbody>
                  </table>
                </div>

                {/* MOBILE VIEW: Premium Responsive Cards (Visible on Mobile Only) */}
                <div className="block md:hidden">
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {regionBlock.events.map((event) => {
                      const isTBA = event.date === 'TBA';
                      return (
                        <motion.div 
                          key={event.country + event.sno}
                          variants={itemVariants}
                          className="bg-white rounded-3xl border border-gray-150/40 shadow-md p-5 relative overflow-hidden flex flex-col justify-between"
                        >
                          {!isTBA && (
                            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                          )}
                          
                          {/* Flag, Country & Status Badge */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                            <Link to={`/country/${event.slug}`} className="flex items-center gap-3">
                              <img 
                                src={event.flag} 
                                alt={`${event.country} flag`} 
                                className="w-8 h-6 rounded object-cover border border-gray-200 shadow-sm shrink-0" 
                              />
                              <div>
                                <h4 className="font-black text-base text-primary hover:text-secondary transition-colors line-clamp-1">{event.country}</h4>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{regionBlock.region}</span>
                              </div>
                            </Link>
                            
                            <div>
                              {isTBA ? (
                                <span className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-amber-250/20">
                                  Planning
                                </span>
                              ) : (
                                <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-250/20">
                                  Active
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs mb-5 font-semibold text-gray-600">
                            <div className="space-y-1">
                              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <MapPin size={10} className="text-secondary" /> City
                              </div>
                              <div className="text-gray-800 font-black truncate">{event.city}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <Calendar size={10} className="text-secondary" /> Date
                              </div>
                              <div className={`font-black truncate ${isTBA ? 'text-gray-400 italic font-medium' : 'text-primary'}`}>{event.date}</div>
                            </div>
                            <div className="col-span-2 space-y-1">
                              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <Building size={10} className="text-secondary" /> Venue
                              </div>
                              <div className={`text-xs leading-normal line-clamp-2 ${isTBA ? 'text-gray-400 italic font-medium' : 'text-gray-700 font-bold'}`}>
                                {isTBA ? 'TBA (Venue under negotiation)' : event.venue}
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <CreditCard size={10} className="text-secondary" /> Booth Cost
                              </div>
                              <div className={`font-black truncate ${isTBA ? 'text-gray-400 italic font-medium' : 'text-gray-800'}`}>{event.cost}</div>
                            </div>
                            {event.remark && (
                              <div className="space-y-1">
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                  <Info size={10} className="text-secondary" /> Remark
                                </div>
                                <div className="text-gray-700 text-[11px] truncate">{event.remark}</div>
                              </div>
                            )}
                          </div>

                          {/* Actions Footer */}
                          <div className="flex gap-2.5 mt-auto pt-3 border-t border-gray-50">
                            <Link 
                              to={`/country/${event.slug}`}
                              className="flex-1 py-2.5 px-3 border border-gray-200 text-gray-650 hover:border-secondary hover:text-secondary text-xs rounded-xl font-bold text-center transition-all flex items-center justify-center gap-1 bg-white"
                            >
                              Explore <ChevronRight size={14} />
                            </Link>
                            
                            <button 
                              onClick={() => setSelectedEventForInquiry(event)}
                              className={`flex-[1.5] py-2.5 px-3 text-xs rounded-xl font-black text-center transition-all cursor-pointer ${
                                isTBA 
                                ? 'bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/10' 
                                : 'bg-secondary text-white hover:bg-secondary-light shadow-md shadow-secondary/15'
                              }`}
                            >
                              {isTBA ? 'Request Alert' : 'Book Booth'}
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-[2rem] border border-gray-150 p-16 text-center max-w-xl mx-auto shadow-md">
              <Globe size={48} className="text-gray-300 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-primary mb-2">No Exhibitions Found</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">We couldn't find any events matching your search query or status filters. Try updating your keywords or changing the filters.</p>
              <button 
                onClick={() => { setSelectedRegion('All'); setSearchQuery(''); setSelectedScheduleFilter('All'); }}
                className="btn-secondary py-3 px-8 text-xs rounded-xl font-bold uppercase tracking-wider"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Inquiries Call-To-Action (Bottom Banner) */}
      <section className="bg-primary text-white py-16 md:py-24 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-block py-1 px-4 bg-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary border border-secondary/20">
            Participation Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Reserve Your Institution's Presence
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in exhibiting at our education fairs across the Middle East, Africa, South East Asia, Central Asia, or SAARC? Secure early slots to select premium booth spaces and maximize conversions.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="btn-secondary px-8 py-4 text-base font-bold flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Inquire / Register Now
              <ArrowRight size={18} />
            </Link>
            <a 
              href="mailto:info@ihecf.info" 
              className="text-gray-300 hover:text-white font-bold text-sm underline flex items-center gap-2 transition-colors"
            >
              <Mail size={16} className="text-secondary" /> Email us at info@ihecf.info
            </a>
          </div>
        </div>
      </section>

      {/* Institutional Booking Inquiry Modal */}
      <AnimatePresence>
        {selectedEventForInquiry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEventForInquiry(null)}
              className="fixed inset-0 bg-primary/90 backdrop-blur-md" 
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white w-full h-full md:h-auto md:max-w-xl md:rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col z-10 my-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEventForInquiry(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-gray-500 hover:text-primary rounded-full flex items-center justify-center transition-all shadow-sm z-20 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="p-8 sm:p-10 flex-grow overflow-y-auto max-h-[100vh] md:max-h-[85vh]">
                {showSuccessInquiry ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-5"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-primary">Inquiry Submitted!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      Thank you for your interest. An exhibition coordinator will review your request for the <strong>{selectedEventForInquiry.country}</strong> event and contact you within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSelectedEventForInquiry(null)}
                      className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="mb-6 space-y-2">
                      <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-secondary/15 text-secondary rounded-lg text-[10px] font-black uppercase tracking-wider">
                        Institutional Booking
                      </span>
                      <h3 className="text-2xl font-black tracking-tight text-primary">
                        Exhibitor Inquiry
                      </h3>
                      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/50 p-3.5 rounded-2xl text-xs font-bold text-gray-700">
                        <img 
                          src={selectedEventForInquiry.flag} 
                          alt={`${selectedEventForInquiry.country} flag`} 
                          className="w-7 h-5 rounded object-cover shadow-sm shrink-0 border border-slate-200"
                        />
                        <div>
                          <div>{selectedEventForInquiry.country} ({selectedEventForInquiry.city})</div>
                          <div className="text-[10px] text-gray-450 font-semibold mt-0.5">
                            {selectedEventForInquiry.date === 'TBA' ? 'Dates: TBA' : `Schedule: ${selectedEventForInquiry.date}`} | Est. Cost: {selectedEventForInquiry.cost}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Form */}
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">University / Institution Name</label>
                        <input 
                          required 
                          name="institution" 
                          type="text" 
                          className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold" 
                          placeholder="e.g. Amity University" 
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">Contact Name</label>
                          <input 
                            required 
                            name="name" 
                            type="text" 
                            className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold" 
                            placeholder="Full Name" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                          <input 
                            required 
                            name="phone" 
                            type="tel" 
                            className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold" 
                            placeholder="+91 99999 99999" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">Work Email Address</label>
                        <input 
                          required 
                          name="email" 
                          type="email" 
                          className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold" 
                          placeholder="admissions@institution.edu" 
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">Preferred Booth Space</label>
                        <select 
                          name="booth_preference" 
                          className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold text-gray-700"
                        >
                          <option value="standard">Standard Booth (Single)</option>
                          <option value="double">Double Booth Space</option>
                          <option value="premium">Premium Pavilion Space</option>
                          <option value="undecided">Undecided / Request Details</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">Special Requirements / Comments</label>
                        <textarea 
                          name="comments" 
                          rows="3" 
                          className="w-full bg-slate-50 border-none rounded-xl p-3.5 focus:ring-2 focus:ring-secondary/50 text-sm font-semibold text-gray-750" 
                          placeholder="Specify regional target, multi-region package interest, etc."
                        />
                      </div>

                      <button 
                        disabled={isSubmittingInquiry}
                        className="btn-secondary w-full py-4 text-sm mt-3 font-black uppercase tracking-wider shadow-lg shadow-secondary/10 disabled:opacity-50"
                      >
                        {isSubmittingInquiry ? 'Submitting Request...' : 'Send Inquiry Request'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventCalendar;
