import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-architectural py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <span className="font-roboto font-bold text-safety-orange tracking-[4px] uppercase text-xs mb-4 block">Who We Are</span>
            <h2 className="font-montserrat font-extrabold text-4xl text-obsidian mb-8 leading-tight">
              Leading the Industry in <br />Structural Detailing Services
            </h2>
            <p className="font-inter text-charcoal leading-relaxed mb-8 text-lg">
              At BuildSketch, we specialize in delivering high-quality steel and timber framing, trusses, and structural steel detailing solutions. Our mission is to bridge the gap between architectural vision and structural reality.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Industry-Leading Software', text: 'Vertex BD, Endurocadd, MiTek Sapphire' },
                { title: 'Designer-Led Collaboration', text: 'We work closely with your designers for seamless integration' },
                { title: 'Code Compliant Results', text: 'Rigorous checks against AS/NZS and international codes' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white rounded-xl border-l-4 border-safety-orange shadow-sm hover:translate-x-2 transition-transform cursor-default group">
                  <div className="w-6 h-6 rounded-full bg-safety-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-safety-orange group-hover:text-white transition-colors">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-obsidian text-sm mb-1">{item.title}</h4>
                    <p className="font-inter text-charcoal text-xs">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-safety-orange/10 via-steel-navy/10 to-safety-orange/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            {/* Accent border glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-safety-orange/30 via-transparent to-steel-navy/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-steel-navy/80 to-obsidian">
              <img
                src="/BluePrint.png"
                alt="Engineering Work"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Bottom label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-montserrat font-black text-white text-sm uppercase tracking-widest">Blueprint Engineering</p>
                <p className="font-inter text-white/60 text-xs mt-1">Precision structural detailing</p>
              </div>
            </div>
            {/* Corner engineering brackets */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-safety-orange/50 z-20 pointer-events-none" />
          </div>
        </div>

        {/* Block 2 - expertise focus */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-steel-navy/10 via-safety-orange/5 to-steel-navy/10 rounded-3xl rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            {/* Accent border glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-steel-navy/20 via-transparent to-safety-orange/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-steel-navy/80 to-obsidian">
              <img
                src="/BluePrint.png"
                alt="Precision Detailing"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center bottom' }}
                loading="eager"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Bottom label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-montserrat font-black text-white text-sm uppercase tracking-widest">Precision Detailing</p>
                <p className="font-inter text-white/60 text-xs mt-1">Every millimeter matters</p>
              </div>
            </div>
            {/* Corner engineering brackets */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-safety-orange/50 z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-safety-orange/50 z-20 pointer-events-none" />
            {/* Overlay Stat */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-steel-navy p-8 rounded-2xl shadow-2xl z-20 hidden lg:block">
              <p className="font-montserrat font-black text-5xl text-safety-orange mb-1">98%</p>
              <p className="font-roboto text-xs text-white uppercase tracking-widest">First-Pass Approval</p>
            </div>
          </div>
          <div className="md:pl-12">
            <span className="font-roboto font-bold text-safety-orange tracking-[4px] uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="font-montserrat font-extrabold text-4xl text-obsidian mb-8 leading-tight">
              Precision That Drives <br />Construction Speed
            </h2>
            <p className="font-inter text-charcoal leading-relaxed mb-8">
              Every millimeter matters in structural engineering. Our team utilizes advanced 3D modeling tools to ensure that what arrives on-site fits perfectly the first time, significantly reducing construction timelines and eliminating costly re-works.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "3D Steel Detailing",
                "Timber Frame Layouts",
                "Workshop Drawings",
                "Fabrication Packages",
                "Structural Analysis",
                "Consultation Services"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-obsidian font-bold text-sm">
                  <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};