import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import About from './pages/About/About.jsx';
import OwnBrand from './pages/OwnBrand/OwnBrand.jsx';
import Contact from './pages/Contact/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produkty" element={<Products />} />
          <Route path="/produkty/:productId" element={<ProductDetail />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/wlasna-marka" element={<OwnBrand />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
