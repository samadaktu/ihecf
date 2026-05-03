import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, BookOpen, Calendar, Image, Phone, Info } from 'lucide-react';
import { countries, services } from '../utils/data';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
    setMobileExpanded(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', mega: 'services' },
    { name: 'Countries', path: '#', mega: 'countries' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileExpanded = (item) => {
    setMobileExpanded(mobileExpanded === item ? null : item);
  };

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-md shadow-xl py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="IHECF Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.mega && setActiveMegaMenu(link.mega)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                to={link.path}
                className={`flex items-center gap-1 font-semibold text-sm uppercase tracking-wider transition-colors text-white hover:text-secondary ${location.pathname === link.path ? 'text-secondary font-bold' : ''}`}
              >
                {link.name}
                {link.mega && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === link.mega ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Mega Menu Dropdowns */}
              <AnimatePresence>
                {activeMegaMenu === link.mega && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8 grid grid-cols-2 gap-8"
                  >
                    {link.mega === 'services' && (
                      <>
                        <div className="col-span-2 mb-2 pb-2 border-b border-gray-100">
                          <h3 className="text-primary font-bold flex items-center gap-2"><BookOpen size={18} className="text-secondary" /> Our Core Services</h3>
                        </div>
                        {services.map((service) => (
                          <Link key={service.slug} to={`/service/${service.slug}`} className="group/item">
                            <h4 className="text-primary font-bold group-hover/item:text-secondary transition-colors">{service.title}</h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{service.description}</p>
                          </Link>
                        ))}
                      </>
                    )}
                    {link.mega === 'countries' && (
                      <>
                        <div className="col-span-2 mb-2 pb-2 border-b border-gray-100">
                          <h3 className="text-primary font-bold flex items-center gap-2"><Globe size={18} className="text-secondary" /> Global Presence</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-y-2 gap-x-4 col-span-2">
                          {countries.map((country) => (
                            <Link 
                              key={country} 
                              to={`/country/${country.toLowerCase().replace(/ /g, '-')}`}
                              className="text-sm text-gray-600 hover:text-secondary transition-colors flex items-center gap-2"
                            >
                              <div className="w-1 h-1 bg-secondary rounded-full" />
                              {country}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/events" className="btn-secondary py-2 text-sm">
            Register for Fair
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white fixed inset-0 top-[72px] z-40 overflow-y-auto"
          >
            <div className="p-6 space-y-2 pb-20">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 pb-2">
                  {link.mega ? (
                    <div className="w-full">
                      <button 
                        onClick={() => toggleMobileExpanded(link.mega)}
                        className="w-full flex justify-between items-center text-xl font-bold text-primary py-3"
                      >
                        {link.name}
                        <ChevronDown className={`transition-transform duration-300 ${mobileExpanded === link.mega ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.mega && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-3">
                              {link.mega === 'services' && services.map(s => (
                                <Link 
                                  key={s.slug} 
                                  to={`/service/${s.slug}`} 
                                  className="block text-gray-500 font-medium"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {s.title}
                                </Link>
                              ))}
                              {link.mega === 'countries' && (
                                <div className="grid grid-cols-2 gap-2">
                                  {countries.map(c => (
                                    <Link 
                                      key={c} 
                                      to={`/country/${c.toLowerCase().replace(/ /g, '-')}`}
                                      className="text-gray-500 font-medium py-1"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {c}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      className="block text-xl font-bold text-primary py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link 
                  to="/events" 
                  className="btn-secondary w-full py-4 text-lg justify-center shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Register for Fair
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
