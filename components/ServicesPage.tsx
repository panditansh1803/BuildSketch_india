import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, CheckCircle, Layers, ChevronLeft, ChevronRight, Zap, Shield, Users
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [activeProject, setActiveProject] = useState<0 | 1>(0);



  return (
    <div className="bg-architectural min-h-screen">

      {/* ══════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════ */}
      <section className="bg-gradient-dark pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none" />
        {/* decorative geometry */}
        <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-safety-orange/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] border border-white/[0.04] rounded-full pointer-events-none" />
        <div className="absolute -right-20 top-20 w-[300px] h-[300px] border border-safety-orange/10 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-[1fr,auto] gap-12 items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-safety-orange/15 border border-safety-orange/30 rounded-full text-safety-orange font-roboto font-bold text-[10px] uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 bg-safety-orange rounded-full animate-pulse" />
                What We Offer
              </span>
              <h1 className="font-montserrat font-black text-5xl md:text-7xl text-white mb-6 leading-[0.92] tracking-tighter">
                World-Class<br />
                <span className="relative">
                  <span className="relative z-10 text-safety-orange italic">Structural Services</span>
                </span>
              </h1>
              <p className="text-steel-grey text-lg max-w-2xl leading-relaxed">
                From residential framing to large-scale commercial steel — we deliver fabrication-ready documentation with precision and speed, every time.
              </p>
            </div>

            {/* Hero side CTAs */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <Link to="/contact" className="group relative px-8 py-5 bg-safety-orange rounded-xl overflow-hidden text-center shadow-[0_0_30px_rgba(243,156,18,0.3)] hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-montserrat font-black text-[11px] uppercase tracking-widest">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a href="#featured-projects" className="px-8 py-5 border border-white/15 rounded-xl hover:border-safety-orange/40 hover:bg-white/[0.03] transition-all text-white font-montserrat font-bold text-[11px] uppercase tracking-widest text-center">
                View Projects
              </a>
            </div>
          </div>

          {/* Stats strip inside hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mt-16 border border-white/[0.06]">
            {[
              { num: '15+', label: 'Projects Delivered' },
              { num: '99%', label: 'Design Accuracy' },
              { num: '3', label: 'Service Areas' },
              { num: '24h', label: 'Response Time' },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors px-8 py-6 text-center group">
                <p className="font-montserrat font-black text-3xl text-safety-orange mb-1 group-hover:scale-105 transition-transform inline-block">{s.num}</p>
                <p className="font-roboto font-bold text-[9px] text-white/40 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOFTWARE STRIP
      ══════════════════════════════════════════════ */}
      <section className="bg-obsidian py-10 border-y border-white/[0.05] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-roboto font-bold text-white/30 text-[10px] uppercase tracking-[0.35em] whitespace-nowrap">Powered By</p>
            <div className="flex flex-wrap items-center gap-8">
              {['Vertex BD', 'MiTek Sapphire', 'Endurocadd', 'BIM Coordination'].map((tool, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />
                  <span className="font-montserrat font-black text-white/50 text-sm uppercase tracking-widest hover:text-white transition-colors cursor-default">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════════ */}
      <section id="featured-projects" className="py-24 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none" />
        <div className="absolute -right-40 top-0 w-[600px] h-[600px] bg-safety-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-roboto font-bold text-safety-orange tracking-[0.4em] uppercase text-xs mb-4 block">Our Projects</span>
              <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white tracking-tighter leading-tight">
                Real Work. <span className="text-safety-orange italic">Real Results.</span>
              </h2>
            </div>
            <p className="font-inter text-white/40 text-sm max-w-xs text-right hidden md:block">
              Every project is a testament to precision detailing and seamless fabrication coordination.
            </p>
          </div>

          {/* Project Switcher */}
          <div className="flex items-center gap-3 mb-12 flex-wrap">
            {[
              { num: '01', label: 'Single Storey Home', sub: 'Brisbane, QLD' },
              { num: '02', label: 'Double Storey Home', sub: 'Australia' },
            ].map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i as 0 | 1)}
                className={`group flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 text-left ${activeProject === i
                  ? 'bg-safety-orange border-safety-orange shadow-[0_0_25px_rgba(243,156,18,0.3)]'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/30'
                  }`}
              >
                <span className={`font-montserrat font-black text-2xl leading-none ${activeProject === i ? 'text-white' : 'text-white/20'}`}>{p.num}</span>
                <div>
                  <p className={`font-montserrat font-black text-xs uppercase tracking-widest leading-tight ${activeProject === i ? 'text-white' : 'text-white/50'}`}>{p.label}</p>
                  <p className={`font-roboto text-[9px] uppercase tracking-widest mt-0.5 ${activeProject === i ? 'text-white/80' : 'text-white/30'}`}>{p.sub}</p>
                </div>
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <button onClick={() => setActiveProject(0)} className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${activeProject === 0 ? 'border-safety-orange bg-safety-orange text-white' : 'border-white/10 text-white/30 hover:border-white/30'}`}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setActiveProject(1)} className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${activeProject === 1 ? 'border-safety-orange bg-safety-orange text-white' : 'border-white/10 text-white/30 hover:border-white/30'}`}>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── PROJECT 1 — Single Storey ── */}
          {activeProject === 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8 px-5 py-2.5 border border-white/10 rounded-full w-fit">
                <MapPin className="w-4 h-4 text-safety-orange flex-shrink-0" />
                <span className="font-roboto font-bold text-white/50 text-xs uppercase tracking-widest">Brisbane City Council, QLD — Australia</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 rounded-3xl overflow-hidden">
                <div className="col-span-2 row-span-2 relative group overflow-hidden min-h-[280px] md:min-h-[420px]">
                  <img loading="lazy" src="/Structural photo front-2.png" alt="Structural Front" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6"><span className="bg-safety-orange text-white font-roboto font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full">Structural — Front</span></div>
                </div>
                <div className="relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Architectural front photo.png" alt="Architectural Front" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-white/10 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">Arch — Front</span></div>
                </div>
                <div className="relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Architectural side photo.png" alt="Architectural Side" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-white/10 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">Arch — Side</span></div>
                </div>
                <div className="col-span-2 relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Structural photo side-3.png" alt="Structural Side" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-safety-orange/80 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full">Structural — Side</span></div>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 xl:gap-20 items-start">
                <div className="space-y-6">
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h3 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Project Details</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Project Type', value: 'Residential — Single-Storey House' },
                        { label: 'Client', value: 'Steel Frame Manufacturer' },
                        { label: 'Location', value: 'Brisbane City Council, QLD' },
                        { label: 'Software', value: 'Vertex BD' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <span className="font-roboto font-bold text-[9px] uppercase tracking-widest text-white/30 w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                          <span className="font-inter text-white/80 text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h3 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Services Provided</h3>
                    <div className="space-y-3">
                      {['Steel Framing and Truss Detailing', 'Framing Layouts', 'Workshop Drawings for Fabrication', 'Final CNC Production Files', 'Engineering Coordination', 'Design Coordination with Client'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                          <span className="font-inter text-white/70 text-sm">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-montserrat font-black text-white text-2xl md:text-3xl mb-2 leading-tight">Single Storey Home</h3>
                  <p className="font-roboto font-bold text-safety-orange text-xs uppercase tracking-widest mb-6">Brisbane, QLD — Australia</p>
                  <p className="font-inter text-white/60 text-base leading-relaxed mb-5">This single-storey residential project in QLD was developed using a complete steel frame system, designed for strength, precision, and buildability. BuildSketch was engaged to provide full documentation services — detailed framing layouts, truss shop drawings, and CNC-ready production files.</p>
                  <p className="font-inter text-white/60 text-base leading-relaxed mb-8">Using Vertex BD, every component was accurately modelled, dimensioned, and compliant with both engineering and client standards.</p>
                  <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Layers className="w-5 h-5 text-safety-orange flex-shrink-0" />
                      <h4 className="font-montserrat font-black text-white text-sm uppercase tracking-widest">Collaboration &amp; Engineering</h4>
                    </div>
                    <p className="font-inter text-white/60 text-sm leading-relaxed">The project required careful design coordination due to challenges with racked ceiling geometry in the roof trusses. Working closely with the structural engineer, our team performed a value design review to achieve an efficient yet robust framing solution.</p>
                  </div>
                  <div className="bg-safety-orange/10 border border-safety-orange/20 rounded-3xl p-8 mb-8">
                    <h4 className="font-montserrat font-black text-safety-orange text-sm uppercase tracking-widest mb-3">Site Outcome</h4>
                    <p className="font-inter text-white/70 text-sm leading-relaxed">Documentation certified on schedule. Installation proceeded without issues — demonstrating the accuracy of the detailing and the effectiveness of coordination between all project partners.</p>
                  </div>
                  <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-4">Project Highlights</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '⚙️', text: 'Value design of structural steel to optimise cost and performance' },
                      { icon: '🏗️', text: 'Racked roof trusses coordinated with engineering design' },
                      { icon: '📐', text: 'Fully CNC-ready documentation for precise fabrication' },
                      { icon: '✅', text: 'Zero rework reported on site' },
                    ].map((h, i) => (
                      <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-safety-orange/30 hover:bg-white/[0.07] transition-all group">
                        <span className="text-xl mb-3 block">{h.icon}</span>
                        <p className="font-inter text-white/60 text-xs leading-relaxed group-hover:text-white/80 transition-colors">{h.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── PROJECT 2 — Double Storey ── */}
          {activeProject === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-8 px-5 py-2.5 border border-white/10 rounded-full w-fit">
                <MapPin className="w-4 h-4 text-safety-orange flex-shrink-0" />
                <span className="font-roboto font-bold text-white/50 text-xs uppercase tracking-widest">Australia</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 rounded-3xl overflow-hidden">
                <div className="col-span-2 row-span-2 relative group overflow-hidden min-h-[280px] md:min-h-[420px]">
                  <img loading="lazy" src="/Structural framing photo-1.png" alt="Structural Isometric" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6"><span className="bg-safety-orange text-white font-roboto font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full">Structural — Isometric</span></div>
                </div>
                <div className="relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Architectural side photo 2.png" alt="Architectural Side" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-white/10 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">Arch — Side</span></div>
                </div>
                <div className="relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Architectural top photo.png" alt="Architectural Isometric" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-white/10 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">Arch — Isometric</span></div>
                </div>
                <div className="col-span-2 relative group overflow-hidden min-h-[140px] md:min-h-[205px]">
                  <img loading="lazy" src="/Structural framing side photo-3.png" alt="Structural Side" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="bg-safety-orange/80 backdrop-blur-sm text-white font-roboto font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-full">Structural — Side</span></div>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 xl:gap-20 items-start">
                <div className="space-y-6">
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h3 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Project Details</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Project Type', value: 'Residential — Double-Storey House' },
                        { label: 'Client', value: 'Steel Frame Manufacturer' },
                        { label: 'Location', value: 'Australia' },
                        { label: 'Software', value: 'Vertex BD' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <span className="font-roboto font-bold text-[9px] uppercase tracking-widest text-white/30 w-24 flex-shrink-0 pt-0.5">{item.label}</span>
                          <span className="font-inter text-white/80 text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h3 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Services Provided</h3>
                    <div className="space-y-3">
                      {['Steel Framing Detailing', 'Roof & Floor Trusses Detailing', 'Framing Layouts', 'Workshop Drawings for Fabrication', 'Final CNC Production Files', 'Engineering Coordination', 'Design Coordination with Client'].map((s, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-safety-orange flex-shrink-0" />
                          <span className="font-inter text-white/70 text-sm">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-montserrat font-black text-white text-2xl md:text-3xl mb-2 leading-tight">Double Storey Home</h3>
                  <p className="font-roboto font-bold text-safety-orange text-xs uppercase tracking-widest mb-6">Australia</p>
                  <p className="font-inter text-white/60 text-base leading-relaxed mb-5">This double-storey residential project was developed using a complete steel frame system, designed for strength, precision, and buildability. BuildSketch Drafting was engaged by the steel frame manufacturer to provide full documentation services — framing layouts, truss shop drawings, and CNC-ready production files.</p>
                  <p className="font-inter text-white/60 text-base leading-relaxed mb-8">Using Vertex BD, every component was accurately modelled, dimensioned, and compliant with both engineering and manufacturer standards.</p>
                  <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Layers className="w-5 h-5 text-safety-orange flex-shrink-0" />
                      <h4 className="font-montserrat font-black text-white text-sm uppercase tracking-widest">Collaboration &amp; Engineering</h4>
                    </div>
                    <p className="font-inter text-white/60 text-sm leading-relaxed">The project required careful coordination due to larger-than-standard floor joist spans. Our team performed a value design review — reducing project cost by replacing heavy steel members with LGS alternatives while maintaining full structural strength and quality.</p>
                  </div>
                  <div className="bg-safety-orange/10 border border-safety-orange/20 rounded-3xl p-8 mb-8">
                    <h4 className="font-montserrat font-black text-safety-orange text-sm uppercase tracking-widest mb-3">Site Outcome</h4>
                    <p className="font-inter text-white/70 text-sm leading-relaxed">Documentation certified on schedule. Quality detailing directly reduced site costs by eliminating the need for heavy structural beams — demonstrating the value of precision design coordination from the outset.</p>
                  </div>
                  <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-4">Project Highlights</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '⚙️', text: 'Value design reduced structural steel cost while maintaining strength' },
                      { icon: '🏗️', text: 'Larger floor joist spans coordinated with engineering design' },
                      { icon: '📐', text: 'Fully CNC-ready documentation for precise fabrication' },
                      { icon: '✅', text: 'Zero rework reported on site' },
                    ].map((h, i) => (
                      <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-safety-orange/30 hover:bg-white/[0.07] transition-all group">
                        <span className="text-xl mb-3 block">{h.icon}</span>
                        <p className="font-inter text-white/60 text-xs leading-relaxed group-hover:text-white/80 transition-colors">{h.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-roboto font-bold text-safety-orange tracking-[0.4em] uppercase text-xs mb-4 block">Why BuildSketch</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-obsidian tracking-tighter">The BuildSketch Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-safety-orange" />,
                title: 'Industry-Leading Software',
                desc: 'We use Vertex BD, MiTek Sapphire, and Endurocadd — the gold standard in structural detailing tools. Every file is CNC-ready and fabrication-tested.',
              },
              {
                icon: <Users className="w-6 h-6 text-safety-orange" />,
                title: 'Designer-Led Collaboration',
                desc: 'Our designers work directly with your team — engineers, fabricators, and site managers — ensuring seamless integration from concept to construction.',
              },
              {
                icon: <Shield className="w-6 h-6 text-safety-orange" />,
                title: 'Code-Compliant Outputs',
                desc: 'Every package is rigorously checked against AS/NZS and international building codes before delivery. Zero rework. First-pass approval every time.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-architectural p-10 rounded-3xl border border-blueprint hover:border-safety-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-safety-orange/10 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-safety-orange/20 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-montserrat font-black text-white/10 text-4xl leading-none select-none">0{i + 1}</span>
                  <h3 className="font-montserrat font-black text-xl text-obsidian group-hover:text-safety-orange transition-colors">{item.title}</h3>
                </div>
                <p className="font-inter text-charcoal text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-obsidian py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-safety-orange/[0.03] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="font-roboto font-bold text-safety-orange tracking-[4px] uppercase text-xs mb-6 block">Ready to Begin?</span>
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-6 tracking-tighter leading-tight">
            Let's Build Something<br /><span className="text-safety-orange italic">Exceptional</span>
          </h2>
          <p className="text-steel-grey mb-12 max-w-lg mx-auto text-lg leading-relaxed">
            Tell us about your project and our team will provide a tailored detailing solution within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-safety-orange text-white font-montserrat font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_0_40px_rgba(243,156,18,0.3)] overflow-hidden hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3">Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <a
              href="mailto:BSdrafting@outlook.com"
              className="inline-flex items-center gap-3 px-12 py-5 border border-white/15 text-white font-montserrat font-bold text-sm uppercase tracking-widest rounded-xl hover:border-safety-orange/40 hover:bg-white/[0.03] transition-all"
            >
              BSdrafting@outlook.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};