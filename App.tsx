
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { ServicesPage } from './components/ServicesPage';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { ContactPage } from './components/ContactPage';
import { Preloader } from './components/Preloader';
import { Detailing } from './components/Detailing';

const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (!hash) {
      gsap?.to(window, { duration: 1.5, scrollTo: 0, ease: "power4.inOut" });
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          gsap?.to(window, {
            duration: 1.8,
            scrollTo: { y: element, offsetY: 80 },
            ease: "power3.inOut"
          });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      <div id="hero"><Hero loading={loading} /></div>
      <Capabilities />
      <div id="about"><About /></div>
      <Services />
      <div id="detailing"><Detailing /></div>
      <WhyUs />
      <div id="process"><Process /></div>
      <div id="contact-section"><CTA /></div>
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    gsap?.ticker.fps(60);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <ScrollHandler />
      <CustomCursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header scrolled={scrolled} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage loading={loading} />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
