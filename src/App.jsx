import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ForInstitutions from './pages/ForInstitutions';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import CountryDetail from './pages/CountryDetail';
import ServiceDetail from './pages/ServiceDetail';
import Promotions from './pages/Promotions';
import Advertising from './pages/Advertising';
import SenegalEvent from './pages/SenegalEvent';
import GambiaEvent from './pages/GambiaEvent';
import ZambiaEvent from './pages/ZambiaEvent';
import TanzaniaEvent from './pages/TanzaniaEvent';
import ZanzibarEvent from './pages/ZanzibarEvent';
import KenyaEvent from './pages/KenyaEvent';
import KuwaitEvent from './pages/KuwaitEvent';
import QatarEvent from './pages/QatarEvent';
import KSAEvent from './pages/KSAEvent';
import UgandaEvent from './pages/UgandaEvent';
import QatarStudent from './pages/QatarStudent';
import KSAStudent from './pages/KSAStudent';
import StudentCountryDetail from './pages/StudentCountryDetail';
import Counselling from './pages/Counselling';
import EventCalendar from './pages/EventCalendar';
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
            <Route path="/for-institutions" element={<ForInstitutions />} />
            <Route path="/service/counselling" element={<Counselling />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/upcoming-events" element={<EventCalendar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/country/senegal" element={<SenegalEvent />} />
            <Route path="/country/gambia" element={<GambiaEvent />} />
            <Route path="/country/zambia" element={<ZambiaEvent />} />
            <Route path="/country/tanzania" element={<TanzaniaEvent />} />
            <Route path="/country/zanzibar" element={<ZanzibarEvent />} />
            <Route path="/country/kenya" element={<KenyaEvent />} />
            <Route path="/country/kuwait" element={<KuwaitEvent />} />
            <Route path="/country/qatar" element={<QatarEvent />} />
            <Route path="/country/ksa" element={<KSAEvent />} />
            <Route path="/country/uganda" element={<UgandaEvent />} />
            <Route path="/student/qatar" element={<QatarStudent />} />
            <Route path="/student/ksa" element={<KSAStudent />} />
            <Route path="/student/:slug" element={<StudentCountryDetail />} />
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
