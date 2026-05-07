import { Link } from 'react-router-dom';
import { countries } from '../utils/data';
import { Share2, Globe, Camera, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="IHECF Logo" className="h-12 md:h-14 w-auto object-contain" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting 30,000+ students with top Indian universities worldwide through education fairs, school visits, and recruitment events.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Share2 size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Globe size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Camera size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Briefcase size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Events', 'Promotions', 'Advertising', 'Gallery', 'Contact'].map((link) => (
              <li key={link}>
                <Link 
                  to={link === 'Home' ? '/' : link === 'Promotions' ? '/how-ihecf-promoted' : link === 'Advertising' ? '/advertising-sponsorship' : `/${link.toLowerCase()}`} 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-secondary rounded-full" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Countries</h3>
          <div className="grid grid-cols-2 gap-y-4">
            {countries.slice(0, 10).map((country) => (
              <Link key={country} to={`/country/${country.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-secondary transition-colors text-sm">
                {country}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <span className="text-gray-400 text-sm">B-2/A, East Vinod Nagar, Delhi-110091</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-secondary shrink-0" size={18} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Mr. Tribhuwan P. Singh</span>
                  <a href="tel:+919319473355" className="text-gray-400 hover:text-secondary transition-colors text-sm">+91-9319473355</a>
                  <a href="tel:+9660544548024" className="text-gray-400 hover:text-secondary transition-colors text-sm">+966-0544548024</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Ms. Kavita</span>
                  <a href="tel:+919654448283" className="text-gray-400 hover:text-secondary transition-colors text-sm">+91-9654448283</a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-secondary shrink-0" size={18} />
              <a href="mailto:info@ihecf.info" className="text-gray-400 hover:text-secondary transition-colors text-sm">info@ihecf.info</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} IHECF - Indian Higher Education & Career Fairs. All rights reserved. Developed By <a href="https://www.technoalig.com" target="_blank">Techno Alig</a></p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
