import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Process: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".process-line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".process-section",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1
      }
    });

    gsap.to(".process-number", {
      scale: 1.15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const steps = [
    { title: "Consultation", desc: "Gathering deep architectural constraints and code requirements." },
    { title: "Strategic BIM", desc: "Laying the structural foundation in a 3D environment." },
    { title: "Precision Detailing", icon: "📐", desc: "Creating shop drawings with millimetric accuracy." },
    { title: "Expert Review", desc: "Multi-stage verification against global structural standards." },
    { title: "Handover", desc: "Delivering fabrication-ready CNC data and blueprints." }
  ];

  return (
    <section className="process-section bg-obsidian text-white py-40 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-overlay opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <span className="font-roboto font-bold text-safety-orange tracking-[0.5em] uppercase text-[10px] mb-4 block">Proven Methodology</span>
          <h2 className="font-montserrat font-black text-5xl mb-8 tracking-tighter">Liquid Engineering <span className="text-safety-orange italic">Workflow</span></h2>
          <p className="text-steel-grey text-lg opacity-70">A battle-tested approach to structural documentation that guarantees site accuracy.</p>
        </div>

        <div className="relative">
          {/* SVG Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
            <div className="process-line w-full h-full bg-safety-orange"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center group hover-trigger">
                {/* Number with Pulse Effect (9) */}
                <div className="process-number relative z-10 w-24 h-24 bg-safety-orange rounded-full flex items-center justify-center font-montserrat font-black text-4xl mx-auto mb-10 shadow-orange-glow transition-all group-hover:bg-white group-hover:text-safety-orange cursor-default">
                  {idx + 1}
                  <div className="absolute inset-0 border-2 border-safety-orange rounded-full animate-ping opacity-10"></div>
                </div>

                <h3 className="font-montserrat font-black text-xl mb-4 group-hover:text-safety-orange transition-colors">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-steel-grey leading-relaxed px-6 opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-px h-16 bg-safety-orange/20 mx-auto my-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};