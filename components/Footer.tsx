import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Clock, ArrowUpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power4.inOut" });
  };

  return (
    <footer className="bg-obsidian pt-32 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-3 group hover-trigger hover:scale-105 transition-transform">
              <div className="w-10 h-10 bg-safety-orange rounded-lg flex items-center justify-center rotate-45 transition-transform group-hover:rotate-90">
                <div className="-rotate-45 font-montserrat font-black text-white text-xl">B</div>
              </div>
              <span className="font-montserrat font-black text-2xl text-white tracking-tighter">BUILDSKETCH</span>
            </Link>
            <p className="font-inter text-steel-grey text-sm leading-relaxed opacity-70">
              Leading the global structural landscape with fabrication-ready precision detailing.
            </p>

          </div>

          <div>
            <h4 className="font-montserrat font-black text-[10px] text-white mb-10 uppercase tracking-[0.4em]">Sitemap</h4>
            <ul className="space-y-6">
              {['Home', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover-trigger hover-underline font-inter text-steel-grey text-sm hover:text-safety-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-black text-[10px] text-white mb-10 uppercase tracking-[0.4em]">Expertise</h4>
            <ul className="space-y-6">
              {["Structural Steel", "Timber Framing", "Truss Detailing", "CNC Data Export", "Engineering Compliance"].map((item) => (
                <li key={item}>
                  <Link to="/#services" className="hover-trigger hover-underline font-inter text-steel-grey text-sm hover:text-safety-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-black text-[10px] text-white mb-10 uppercase tracking-[0.4em]">Contact</h4>
            <ul className="space-y-8">
              <li className="flex items-center gap-4 hover-trigger group">
                <Phone className="text-safety-orange w-5 h-5 group-hover:scale-125 transition-transform" />
                <a href="tel:+919696379407" className="font-inter text-steel-grey text-sm group-hover:text-white transition-colors">+91 96963 79407</a>
              </li>
              <li className="flex items-center gap-4 hover-trigger group">
                <Mail className="text-safety-orange w-5 h-5 group-hover:scale-125 transition-transform" />
                <a href="mailto:BSdrafting@outlook.com" className="font-inter text-steel-grey text-sm group-hover:text-white transition-colors">BSdrafting@outlook.com</a>
              </li>
              <li className="flex items-start gap-4 hover-trigger group">
                <Clock className="text-safety-orange w-5 h-5 flex-shrink-0 group-hover:scale-125 transition-transform mt-0.5" />
                <span className="font-inter text-steel-grey text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  Monday – Friday<br />9:00 AM – 6:00 PM IST
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="font-inter text-steel-grey text-[9px] uppercase tracking-[0.4em] opacity-40">
            © 2026 BUILDSKETCH INDIA. DESIGNED WITH PRECISION.
          </p>
          <div className="flex gap-10">
            <button onClick={scrollToTop} className="hover-trigger flex items-center gap-3 text-white font-montserrat font-black text-[9px] uppercase tracking-[0.3em] group">
              Back to top <ArrowUpCircle className="w-6 h-6 text-safety-orange group-hover:translate-y-[-5px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};