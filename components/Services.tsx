
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data';

export const Services: React.FC = () => {
  return (
    <section className="bg-blueprint py-32 overflow-hidden border-t border-blueprint">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-roboto font-bold text-safety-orange tracking-[0.4em] uppercase text-xs mb-4 block">Our Portfolio</span>
            <h2 className="font-montserrat font-black text-5xl text-obsidian tracking-tighter mb-6">Our Projects</h2>
            <p className="font-inter text-charcoal text-lg opacity-70">Explore our track record of engineering precision across residential and commercial sectors.</p>
          </div>
          <Link to="/contact" className="px-10 py-5 bg-obsidian text-white rounded-xl font-montserrat font-black text-[10px] uppercase tracking-widest hover:bg-safety-orange transition-all shadow-xl group">
            View All Work <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map((project, idx) => (
            <div key={idx} className="group bg-white rounded-[40px] overflow-hidden shadow-2xl transition-all border border-transparent hover:border-safety-orange/20 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img src={project.image} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"></div>
              </div>

              <div className="p-10">
                <span className="font-roboto font-bold text-safety-orange text-[9px] uppercase tracking-[0.3em] mb-2 block">{project.meta}</span>
                <h3 className="font-montserrat font-black text-2xl text-obsidian mb-4">{project.title}</h3>
                <p className="font-inter text-charcoal text-sm leading-relaxed mb-8 opacity-70">{project.desc}</p>
                <div className="space-y-3 mb-8">
                  {project.specs.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 text-steel-navy font-bold text-[10px] uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                      {s}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="w-full flex items-center justify-center gap-3 py-4 bg-architectural group-hover:bg-safety-orange text-obsidian group-hover:text-white font-montserrat font-black text-[10px] uppercase tracking-widest rounded-2xl transition-all">
                  Case Study Details <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
