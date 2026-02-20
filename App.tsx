
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
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { ContactPage } from './components/ContactPage';
import { Preloader } from './components/Preloader';
import { Detailing } from './components/Detailing';

// Lazy loaded routes
const LazyServicesPage = React.lazy(() => import('./components/ServicesPage').then(module => ({ default: module.ServicesPage })));
const LazyBlog = React.lazy(() => import('./components/Blog').then(module => ({ default: module.Blog })));
const LazyBlogPost = React.lazy(() => import('./components/BlogPost').then(module => ({ default: module.BlogPost })));
const LazyContactPage = React.lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));

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
          <React.Suspense fallback={<div className="min-h-screen bg-obsidian flex items-center justify-center"><div className="w-10 h-10 border-4 border-safety-orange border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<HomePage loading={loading} />} />
              <Route path="/service/:serviceId" element={<ServiceDetail />} />
              <Route path="/services" element={<LazyServicesPage />} />
              <Route path="/blog" element={<LazyBlog />} />
              <Route path="/blog/:postId" element={<LazyBlogPost />} />
              <Route path="/contact" element={<LazyContactPage />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
