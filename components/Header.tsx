import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Detailing', href: '/#detailing' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    const cleanPath = path.split('#')[0];
    if (cleanPath === '/' && location.pathname === '/') return true;
    if (cleanPath !== '/' && location.pathname.startsWith(cleanPath)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
      scrolled || isMenuOpen ? 'bg-steel-navy/90 py-3 shadow-2xl backdrop-blur-xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Scale Hover (2) */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer hover-trigger transition-transform hover:scale-105">
          <div className="w-10 h-10 bg-safety-orange rounded-lg flex items-center justify-center rotate-45 transition-transform group-hover:rotate-90 shadow-orange-glow">
            <div className="-rotate-45 font-montserrat font-black text-white text-xl">B</div>
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat font-black text-2xl text-white tracking-tight leading-none">BUILDSKETCH</span>
            <span className="font-roboto text-[9px] text-steel-grey uppercase tracking-[4px] mt-1 group-hover:text-safety-orange transition-colors">Precision Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav with Center Underline (5) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-roboto font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover-trigger hover-underline ${
                isActive(link.href) ? 'text-safety-orange' : 'text-steel-grey hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.href) && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-safety-orange"></span>}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA with Magnetic Lift (4, 9) */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-magnetic hover-trigger bg-safety-orange hover:bg-safety-construction text-white px-8 py-3 rounded-xl font-montserrat font-black text-[10px] uppercase tracking-[0.2em] shadow-orange-glow transition-all hover:scale-105 inline-flex items-center gap-2">
            Get Quote
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <button className="md:hidden text-white hover-trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-obsidian transition-all duration-700 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            to={link.href}
            className={`font-montserrat font-black text-4xl uppercase tracking-tighter transition-all ${
              isActive(link.href) ? 'text-safety-orange' : 'text-white/40 hover:text-white'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-white"><X className="w-10 h-10"/></button>
      </div>
    </header>
  );
};