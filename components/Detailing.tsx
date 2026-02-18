
import React, { useEffect } from 'react';
import { Ruler, FileText, Frame, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Detailing: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".detailing-card", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".detailing-section",
        start: "top 80%",
      }
    });
  }, []);

  const features = [
    {
      title: "Vertex BD Expertise",
      desc: "Specialized 3D modeling for light-gauge steel and timber framing, delivering exact fabrication data.",
      icon: <Frame className="w-6 h-6" />
    },
    {
      title: "Shop Drawings",
      desc: "Detailed workshop drawings including GA plans, assembly sheets, and individual member details.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "CNC Data Export",
      desc: "Direct integration with roll-formers and fabrication machinery via automated data output.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Precision Tolerances",
      desc: "Engineering documentation maintained to +/- 0.5mm standards for perfect on-site fitment.",
      icon: <Ruler className="w-6 h-6" />
    }
  ];

  return (
    <section className="detailing-section py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-roboto font-bold text-safety-orange tracking-[4px] uppercase text-xs mb-4 block">Our Specialization</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-obsidian mb-8 leading-tight">
              High-Fidelity <br />
              <span className="text-safety-orange">Structural Detailing</span>
            </h2>
            <p className="font-inter text-charcoal text-lg mb-10 leading-relaxed opacity-80">
              We translate complex engineering designs into millimetric-precise fabrication packages. Our detailing team ensures that every component is optimized for manufacturing and installation speed.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, idx) => (
                <div key={idx} className="detailing-card group">
                  <div className="w-12 h-12 bg-architectural rounded-xl flex items-center justify-center text-steel-navy group-hover:bg-safety-orange group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-montserrat font-bold text-obsidian text-sm mb-2">{item.title}</h4>
                  <p className="font-inter text-charcoal text-xs leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blueprint rounded-[40px] rotate-1"></div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Detailing Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <p className="text-white font-montserrat font-bold text-sm">Automated Fabrication Ready</p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Vertex BD · Endurocadd · MiTek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
