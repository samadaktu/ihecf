import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ForInstitutions from './pages/ForInstitutions';
import ForStudents from './pages/ForStudents';
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
import UzbekistanEvent from './pages/UzbekistanEvent';
import KazakhstanEvent from './pages/KazakhstanEvent';
import ZanzibarEvent from './pages/ZanzibarEvent';
import KenyaEvent from './pages/KenyaEvent';
import KuwaitEvent from './pages/KuwaitEvent';
import QatarEvent from './pages/QatarEvent';
import KSAEvent from './pages/KSAEvent';
import UgandaEvent from './pages/UgandaEvent';
import OmanEvent from './pages/OmanEvent';
import MauritiusEvent from './pages/MauritiusEvent';
import ZimbabweEvent from './pages/ZimbabweEvent';
import NamibiaEvent from './pages/NamibiaEvent';
import QatarStudent from './pages/QatarStudent';
import KSAStudent from './pages/KSAStudent';
import UzbekistanStudent from './pages/UzbekistanStudent';
import SriLankaStudent from './pages/SriLankaStudent';
import KazakhstanStudent from './pages/KazakhstanStudent';
import BangladeshStudent from './pages/BangladeshStudent';
import KuwaitStudent from './pages/KuwaitStudent';
import KenyaStudent from './pages/KenyaStudent';
import EthiopiaStudent from './pages/EthiopiaStudent';
import TanzaniaStudent from './pages/TanzaniaStudent';
import UgandaStudent from './pages/UgandaStudent';
import ZambiaStudent from './pages/ZambiaStudent';
import MauritiusStudent from './pages/MauritiusStudent';
import GambiaStudent from './pages/GambiaStudent';
import StudentCountryDetail from './pages/StudentCountryDetail';
import Counselling from './pages/Counselling';
import EventCalendar from './pages/EventCalendar';
import ScrollToTop from './components/ScrollToTop';
import CambodiaEvent from './pages/CambodiaEvent';
import NepalEvent from './pages/NepalEvent';
import FijiEvent from './pages/FijiEvent';
import EthiopiaEvent from './pages/EthiopiaEvent';
import BangladeshEvent from './pages/BangladeshEvent';
import SriLankaEvent from './pages/SriLankaEvent';
import ThailandEvent from './pages/ThailandEvent';

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
            <Route path="/for-students" element={<ForStudents />} />
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
            <Route path="/country/kazakhstan" element={<KazakhstanEvent />} />
            <Route path="/country/uzbekistan" element={<UzbekistanEvent />} />
            <Route path="/country/zanzibar" element={<ZanzibarEvent />} />
            <Route path="/country/kenya" element={<KenyaEvent />} />
            <Route path="/country/kuwait" element={<KuwaitEvent />} />
            <Route path="/country/qatar" element={<QatarEvent />} />
            <Route path="/country/ksa" element={<KSAEvent />} />
            <Route path="/country/uganda" element={<UgandaEvent />} />
            <Route path="/country/oman" element={<OmanEvent />} />
            <Route path="/country/mauritius" element={<MauritiusEvent />} />
            <Route path="/country/zimbabwe" element={<ZimbabweEvent />} />
            <Route path="/country/namibia" element={<NamibiaEvent />} />
            <Route path="/country/cambodia" element={<CambodiaEvent />} />
            <Route path="/country/nepal" element={<NepalEvent />} />
            <Route path="/country/fiji" element={<FijiEvent />} />
            <Route path="/country/ethiopia" element={<EthiopiaEvent />} />
            <Route path="/country/bangladesh" element={<BangladeshEvent />} />
            <Route path="/country/sri-lanka" element={<SriLankaEvent />} />
            <Route path="/country/thailand" element={<ThailandEvent />} />
            <Route path="/student/qatar" element={<QatarStudent />} />
            <Route path="/student/ksa" element={<KSAStudent />} />
            <Route path="/student/uzbekistan" element={<UzbekistanStudent />} />
            <Route path="/student/sri-lanka" element={<SriLankaStudent />} />
            <Route path="/student/kazakhstan" element={<KazakhstanStudent />} />
            <Route path="/student/bangladesh" element={<BangladeshStudent />} />
            <Route path="/student/kuwait" element={<KuwaitStudent />} />
            <Route path="/student/kenya" element={<KenyaStudent />} />
            <Route path="/student/ethiopia" element={<EthiopiaStudent />} />
            <Route path="/student/tanzania" element={<TanzaniaStudent />} />
            <Route path="/student/uganda" element={<UgandaStudent />} />
            <Route path="/student/zambia" element={<ZambiaStudent />} />
            <Route path="/student/mauritius" element={<MauritiusStudent />} />
            <Route path="/student/gambia" element={<GambiaStudent />} />
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
