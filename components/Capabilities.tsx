
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Box, PenTool, Globe, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Vertex BD",
      desc: "Specialized steel and timber framing solutions for complex architectural structures.",
      tag: "Framing Experts"
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "MiTek Sapphire",
      desc: "Advanced truss design and structural analysis ensuring maximum strength and stability.",
      tag: "Truss Design"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Endurocadd",
      desc: "High-precision structural detailing and shop drawings for fabrication ready output.",
      tag: "Shop Drawings"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "AS/NZS Codes",
      desc: "Full compliance with Australian and New Zealand building standards for every project.",
      tag: "Compliance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Projects",
      desc: "Supporting construction firms internationally with remote engineering expertise.",
      tag: "Worldwide"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 344; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-blueprint py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="font-roboto font-bold text-safety-orange tracking-[4px] uppercase text-xs mb-4 block">Our Arsenal</span>
          <h2 className="font-montserrat font-extrabold text-4xl text-obsidian">Core Capabilities</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="p-4 bg-white hover:bg-safety-orange text-steel-navy hover:text-white rounded-full shadow-md transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => scroll('right')} className="p-4 bg-white hover:bg-safety-orange text-steel-navy hover:text-white rounded-full shadow-md transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="container mx-auto px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
      >
        {capabilities.map((item, idx) => (
          <div key={idx} className="flex-none w-[320px] bg-white p-8 rounded-2xl shadow-md border border-transparent hover:border-safety-orange transition-all hover:-translate-y-2 snap-start group">
            <div className="mb-6 bg-architectural w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ease-out transform group-hover:bg-safety-orange/10 group-hover:scale-110 text-steel-navy group-hover:text-safety-orange">
              {item.icon}
            </div>
            <span className="font-roboto text-[10px] font-bold text-steel-grey tracking-widest uppercase block mb-2">{item.tag}</span>
            <h3 className="font-montserrat font-bold text-xl text-obsidian mb-4">{item.title}</h3>
            <p className="font-inter text-sm text-charcoal leading-relaxed mb-6">
              {item.desc}
            </p>
            <Link to="/contact" className="text-safety-orange font-roboto font-bold text-xs uppercase tracking-wider flex items-center gap-2 group/link">
              Learn More 
              <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
