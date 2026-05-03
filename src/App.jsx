import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import CountryDetail from './pages/CountryDetail';
import ServiceDetail from './pages/ServiceDetail';
import Promotions from './pages/Promotions';
import Advertising from './pages/Advertising';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/country/:slug" element={<CountryDetail />} />
            <Route path="/how-ihecf-promoted" element={<Promotions />} />
            <Route path="/advertising-sponsorship" element={<Advertising />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
