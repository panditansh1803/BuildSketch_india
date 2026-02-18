import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle, ShieldCheck, Zap, Clock, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC<{ loading?: boolean }> = ({ loading = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Don't animate while preloader is still showing
    if (loading || hasAnimated.current) return;
    hasAnimated.current = true;

    // Small delay to ensure DOM elements are painted
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.h-tag', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo('.h-eyebrow', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.h-title-1', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.3')
        .fromTo('.h-title-2', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.85')
        .fromTo('.h-title-3', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 }, '-=0.85')
        .fromTo('.h-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
        .fromTo('.h-service-pill', { x: -10, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.07, duration: 0.6 }, '-=0.6')
        .fromTo('.h-cta', { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.7 }, '-=0.4')
        .fromTo('.h-stat', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.h-img-wrap', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.4 }, '-=1.1')
        .fromTo('.h-info-card', { y: 16, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6 }, '-=0.6');

      /* Magnetic buttons */
      document.querySelectorAll('.btn-magnetic').forEach((btn: any) => {
        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
          gsap.to(btn, { x, y, duration: 0.3 });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
        });
      });

      /* Ticker */
      const tickerEl = document.querySelector('.ticker-track') as HTMLElement | null;
      if (tickerEl) {
        const totalWidth = tickerEl.scrollWidth / 2;
        gsap.fromTo(tickerEl,
          { x: 0 },
          { x: -totalWidth, duration: 28, ease: 'none', repeat: -1 }
        );
      }

      /* Subtle parallax on image */
      gsap.to('.h-img-inner', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [loading]);

  const tickerItems = [
    'Steel Framing', 'Timber Detailing', 'Vertex BD', 'MiTek Sapphire',
    'Structural Steel', 'Prefabrication', 'CNC Data', 'Shop Drawings',
    'Endurocadd', 'BIM Coordination', 'Residential', 'Commercial',
  ];

  const services = [
    'Steel & Timber Framing',
    'Structural Steel Detailing',
    'CNC-Ready Documentation',
    'Truss & Roof Design',
  ];

  const infoCards = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-safety-orange" />,
      label: 'Accuracy',
      value: '±0.5mm',
      sub: 'First-pass certified',
    },
    {
      icon: <Clock className="w-4 h-4 text-safety-orange" />,
      label: 'Turnaround',
      value: '24h',
      sub: 'First drawings delivered',
    },
    {
      icon: <Zap className="w-4 h-4 text-safety-orange" />,
      label: 'Software',
      value: 'Vertex BD',
      sub: 'MiTek · Endurocadd',
    },

  ];

  return (
    <section className="hero-section relative bg-obsidian min-h-screen flex flex-col overflow-hidden">

      {/* ══ LOGO AS IMMERSIVE BACKGROUND ══ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[65%] h-[85%]">
          <img
            src="/hero-logo.png"
            className="w-full h-full object-contain opacity-[0.35]"
            alt=""
            aria-hidden="true"
            loading="eager"
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
          />
          {/* Gradient overlays for seamless blend on the left edge only */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-obsidian/40" />
        </div>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        {[12.5, 25, 37.5, 50, 62.5, 75, 87.5].map((pct, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px bg-white/[0.025]" style={{ left: `${pct}%` }} />
        ))}
      </div>

      {/* Ambient glows */}
      <div className="absolute top-[-10%] right-[15%] w-[550px] h-[550px] bg-safety-orange/[0.05] rounded-full blur-[150px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[5%] left-[0%] w-[280px] h-[280px] bg-steel-navy/[0.8] rounded-full blur-[90px] pointer-events-none z-[1]" />
      <div className="absolute top-[30%] right-[5%] w-[200px] h-[200px] bg-safety-orange/[0.04] rounded-full blur-[80px] pointer-events-none z-[1]" />

      {/* ══ MAIN CONTENT ══ */}
      <div className="flex-1 flex items-center relative z-10 pt-28 pb-6 md:pt-24 md:pb-4">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">

            {/* Live tag + divider */}
            <div className="flex items-center gap-4 mb-7">
              <div className="h-tag inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-orange" />
                </span>
                <span className="text-white/60 font-roboto font-bold text-[9px] tracking-[0.3em] uppercase">Live · India</span>
              </div>
              <div className="h-px flex-1 bg-white/[0.05] max-w-[120px]" />
              <span className="h-eyebrow text-white/20 font-roboto font-bold text-[9px] uppercase tracking-[0.35em]">Est. 2022</span>
            </div>

            {/* Stacked title */}
            <div className="mb-8">
              <div className="overflow-hidden mb-1">
                <h1 className="h-title-1 font-montserrat font-black text-[clamp(3rem,6vw,5.8rem)] text-white leading-[0.88] tracking-[-0.03em]">
                  Structural
                </h1>
              </div>
              <div className="overflow-hidden mb-1">
                <h1 className="h-title-2 font-montserrat font-black text-[clamp(3rem,6vw,5.8rem)] leading-[0.88] tracking-[-0.03em] flex items-center gap-3">
                  <span className="w-1.5 h-[0.9em] bg-safety-orange rounded-sm flex-shrink-0" />
                  <span className="text-safety-orange">Precision</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="h-title-3 font-montserrat font-black text-[clamp(3rem,6vw,5.8rem)] text-white/15 leading-[0.88] tracking-[-0.03em]">
                  Drafting
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="h-desc font-inter text-white/50 text-base md:text-lg max-w-[480px] mb-8 leading-relaxed">
              Delivering <span className="text-white/90 font-semibold">fabrication-ready</span> steel &amp; timber framing, trusses, and structural detailing — built for builders who demand zero tolerance.
            </p>

            {/* Service checklist */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
              {services.map((s, i) => (
                <div key={i} className="h-service-pill flex items-center gap-3">
                  <CheckCircle className="w-3.5 h-3.5 text-safety-orange flex-shrink-0" />
                  <span className="font-roboto font-bold text-[10px] text-white/40 uppercase tracking-widest">{s}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-magnetic h-cta group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-5 bg-safety-orange rounded-xl font-montserrat font-black text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(243,156,18,0.3)] hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-[-15deg]" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="btn-magnetic h-cta group inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/[0.12] rounded-xl font-montserrat font-bold text-[11px] uppercase tracking-[0.2em] text-white/55 hover:text-white hover:border-white/25 hover:bg-white/[0.04] transition-all backdrop-blur-sm"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="h-stat flex items-stretch border border-white/[0.07] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/[0.02] max-w-lg">
              {[
                { num: '15+', label: 'Projects', sub: 'Delivered' },
                { num: '99%', label: 'Accuracy', sub: 'First-Pass' },
                { num: '24h', label: 'Response', sub: 'Turnaround' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-center py-5 px-2 group hover:bg-white/[0.04] transition-colors border-r border-white/[0.07] last:border-r-0 cursor-default"
                >
                  <span className="font-montserrat font-black text-xl md:text-2xl text-safety-orange group-hover:scale-110 transition-transform inline-block leading-none mb-1">{s.num}</span>
                  <span className="font-roboto font-bold text-[8px] text-white/45 uppercase tracking-widest leading-none">{s.label}</span>
                  <span className="font-roboto text-[7px] text-white/20 uppercase tracking-wider leading-none mt-0.5">{s.sub}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM INFO BAR ── */}
      <div className="relative z-10 border-t border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="h-info-card grid grid-cols-2 md:grid-cols-4 gap-px">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 py-5 px-5 hover:bg-white/[0.03] transition-all cursor-default"
              >
                <div className="w-9 h-9 bg-safety-orange/[0.1] rounded-lg flex items-center justify-center group-hover:bg-safety-orange/20 transition-colors flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="font-roboto font-bold text-[7px] text-white/25 uppercase tracking-widest leading-none mb-1">{card.label}</p>
                  <p className="font-montserrat font-black text-white text-sm leading-none">{card.value}</p>
                  <p className="font-roboto text-[8px] text-white/25 leading-tight mt-0.5">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── TICKER STRIP ── */}
      <div className="relative z-10 border-t border-white/[0.05] overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="ticker-track flex items-center w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-6 flex-shrink-0">
              <span className="font-roboto font-bold text-[9px] uppercase tracking-[0.28em] text-white/25 hover:text-safety-orange transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="w-1 h-1 bg-safety-orange/25 rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};