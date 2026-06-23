import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const heroCountries = [
  "Bangladesh",
  "Cambodia",
  "Ethiopia",
  "Fiji",
  "Gambia",
  "Kazakhstan",
  "Kenya",
  "KSA",
  "Kuwait",
  "Mauritius",
  "Namibia",
  "Nepal",
  "Qatar",
  "Senegal",
  "Sri Lanka",
  "Tanzania",
  "Thailand",
  "Uganda",
  "Uzbekistan",
  "Zambia",
  "Zimbabwe"
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <a href="https://ihecf.info" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo-edunial-group.jpeg" alt="Edunial Group Logo" className="h-20 md:h-24 w-auto object-contain" />
          </a>
          <p className="text-gray-400 text-sm leading-relaxed">
            Edunial Group is a premier international education management organization. We specialize in globalizing higher education by connecting world-class Indian universities with aspiring international students through strategic fairs, partnerships, and global recruitment initiatives.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
          <ul className="space-y-4">
            {['Home', 'About', 'For Institutions', 'For Students', 'Events', 'Upcoming Events', 'Promotions', 'Advertising', 'Gallery', 'Contact'].map((link) => (
              <li key={link}>
                <Link 
                  to={link === 'Home' ? '/' : link === 'Upcoming Events' ? '/upcoming-events' : link === 'Promotions' ? '/how-ihecf-promoted' : link === 'Advertising' ? '/advertising-sponsorship' : `/${link.toLowerCase().replace(/ /g, '-')}`} 
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
            {heroCountries.map((country) => (
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
