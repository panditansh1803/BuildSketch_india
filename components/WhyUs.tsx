import React from 'react';
import { Shield, FastForward, Users, Globe2, FileSearch, Zap } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const items = [
    {
      title: "Advanced Software Stack",
      desc: "Full mastery of Vertex BD, MiTek Sapphire, and Endurocadd for absolute structural precision.",
      icon: <Zap className="w-10 h-10 text-safety-orange" />,
      grid: "md:col-span-2 md:row-span-2",
      bg: "bg-obsidian text-white border-white/10"
    },
    {
      title: "AS/NZS Certified",
      desc: "Rigorous compliance with Australian and NZ structural codes.",
      icon: <Shield className="w-8 h-8 text-safety-orange" />,
      grid: "md:col-span-2 md:row-span-1",
      bg: "bg-white border-blueprint"
    },
    {
      title: "Seamless Collaboration",
      desc: "We integrate directly with your in-house engineering and fabrication teams.",
      icon: <Users className="w-8 h-8 text-safety-orange" />,
      grid: "md:col-span-1 md:row-span-1",
      bg: "bg-safety-orange text-white border-transparent"
    },
    {
      title: "Global Reach",
      desc: "Serving construction firms across 12 countries.",
      icon: <Globe2 className="w-8 h-8 text-safety-orange" />,
      grid: "md:col-span-1 md:row-span-1",
      bg: "bg-architectural border-blueprint"
    }
  ];

  return (
    <section className="bg-architectural py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-roboto font-bold text-safety-orange tracking-[0.4em] uppercase text-xs mb-4 block">Competitive Edge</span>
            <h2 className="font-montserrat font-black text-5xl text-obsidian leading-[0.9] tracking-tighter">
              The BuildSketch <br /><span className="text-safety-orange italic">Advantage.</span>
            </h2>
          </div>
          <p className="font-inter text-charcoal text-lg max-w-sm opacity-70">
            Our structural DNA is built on precision, automation, and deep engineering knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.grid} ${item.bg} p-12 rounded-[40px] hover-trigger hover-lift transition-all duration-500 flex flex-col justify-between border group relative overflow-hidden`}
            >
              {/* Highlight Sweep (8) */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-8 p-5 inline-block rounded-2xl bg-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-black text-2xl mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-inter text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest cursor-pointer group-hover:text-safety-orange transition-colors">
                Explore Tech Stack <FastForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};