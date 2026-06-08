import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Globe, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const EventCalendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || 'All';
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter logic
  const getFilteredData = () => {
    return calendarData
      .map(regionBlock => {
        const filteredEvents = regionBlock.events.filter(event => {
          const query = searchQuery.toLowerCase();
          return (
            event.country.toLowerCase().includes(query) ||
            event.city.toLowerCase().includes(query) ||
            event.venue.toLowerCase().includes(query)
          );
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

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SEO 
        title="Annual Event Calendar 2026-27 | IHECF Recruitment Fairs" 
        description="View the comprehensive annual event schedule of Indian Higher Education & Career Fairs (IHECF) in the Middle East, Africa, and Asia. Plan your recruitment tours."
        keywords="IHECF Event Calendar, Education Fair Schedule 2026, Indian Universities Recruitment GCC Africa, Edunial Group Fairs"
      />

      {/* Hero Header */}
      <section className="bg-primary text-white pt-24 md:pt-32 pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/hero_background_students_map.png" alt="Global Event Map Background" className="w-full h-full object-cover scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <span className="inline-block py-1 px-4 bg-secondary/20 rounded-full text-xs font-black uppercase tracking-widest text-secondary mb-4 border border-secondary/20">
              International Recruitment Schedule
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-4">
              Edunial Group <span className="text-secondary italic">Annual Event Calendar</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-semibold">
              Indian Higher Education & Career Fair-2026-27 — Expanding recruitment presence, brand outreach, and sustainable pipelines across the GCC, Africa, and Asia.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex bg-white/10 rounded-2xl border border-white/5 items-center px-4 py-2 flex-grow sm:flex-initial">
              <Search size={18} className="text-secondary mr-2 shrink-0" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or city..." 
                className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-400 text-sm w-full sm:w-48"
              />
            </div>
            <button 
              onClick={() => { setSelectedRegion('All'); setSearchQuery(''); }}
              className="px-6 py-2 bg-secondary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={14} /> Reset
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
            <Filter size={14} /> Filter Regions:
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-start">
            {regionsList.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 border whitespace-nowrap shrink-0 hover:scale-[1.02] cursor-pointer ${
                  selectedRegion === region 
                  ? 'bg-secondary border-secondary text-white shadow-lg font-black' 
                  : 'bg-white border-gray-200 text-gray-650 hover:border-secondary hover:text-secondary hover:shadow-sm'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Tables */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((regionBlock) => (
              <div key={regionBlock.region} className="bg-white rounded-3xl border border-gray-150/40 shadow-xl overflow-hidden mb-12 last:mb-0">
                {/* Region Heading */}
                <div className="bg-primary/95 text-white py-6 px-8 flex justify-between items-center border-b border-primary/20">
                  <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
                    <Layers size={22} className="text-secondary" /> {regionBlock.region}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-secondary/20 text-secondary px-3 py-1 rounded-full border border-secondary/25">
                    {regionBlock.events.length} {regionBlock.events.length === 1 ? 'Event' : 'Events'}
                  </span>
                </div>

                {/* Table View - Responsive Scrollable layout */}
                <div className="overflow-x-auto w-full">
                  <table className="min-w-[850px] w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 text-[10px] uppercase tracking-widest border-b border-gray-100 font-black">
                        <th className="py-4 px-6 text-center w-16">S.No.</th>
                        <th className="py-4 px-6">Country</th>
                        <th className="py-4 px-6">City</th>
                        <th className="py-4 px-6">Date</th>
                        <th className="py-4 px-6">Venue</th>
                        <th className="py-4 px-6">Participation Cost</th>
                        <th className="py-4 px-6">Remark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-semibold text-sm text-gray-700">
                      {regionBlock.events.map((event) => (
                        <tr key={event.country + event.sno} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-5 px-6 text-center text-gray-400 font-bold">{event.sno}.</td>
                          <td className="py-5 px-6">
                            <Link 
                              to={`/country/${event.slug}`} 
                              className="inline-flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                            >
                              <img 
                                src={event.flag} 
                                alt={`${event.country} flag`} 
                                className="w-7 h-auto rounded border border-gray-100 shadow-sm shrink-0"
                              />
                              <span className="font-bold border-b border-transparent hover:border-secondary whitespace-nowrap">{event.country}</span>
                            </Link>
                          </td>
                          <td className="py-5 px-6 text-gray-600 font-bold whitespace-nowrap">{event.city}</td>
                          <td className="py-5 px-6 text-primary font-black whitespace-nowrap">{event.date}</td>
                          <td className="py-5 px-6 text-gray-500 font-medium text-xs leading-relaxed max-w-[220px]">{event.venue}</td>
                          <td className="py-5 px-6 whitespace-nowrap">
                            {event.cost !== 'TBA' ? (
                              <span className="font-bold text-gray-800">{event.cost}</span>
                            ) : (
                              <span className="text-gray-400 font-medium italic">TBA</span>
                            )}
                          </td>
                          <td className="py-5 px-6 text-gray-400 font-medium text-xs max-w-[120px]">{event.remark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-3xl border border-gray-150 p-16 text-center max-w-xl mx-auto shadow-md">
              <Globe size={48} className="text-gray-300 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-primary mb-2">No Events Found</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">We couldn't find any events matching your search terms. Try searching for another city, country, or change the region filter.</p>
              <button 
                onClick={() => { setSelectedRegion('All'); setSearchQuery(''); }}
                className="btn-secondary py-3 px-8 text-xs rounded-xl font-bold uppercase tracking-wider"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Inquiries Section */}
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
              className="text-gray-300 hover:text-white font-bold text-sm underline flex items-center gap-2"
            >
              Email us at info@ihecf.info
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventCalendar;
