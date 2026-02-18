
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    category: 'residential',
    title: 'Modern Family Home - Melbourne',
    meta: 'Steel & Timber Framing | 2024',
    desc: 'Complete structural steel and timber framing documentation for a 4-bedroom modern home in suburban Melbourne.',
    specs: ['Workshop drawings: 45 sheets', 'Truss layouts: 12 roof configurations', 'Software: Vertex BD, MiTek Sapphire', 'Timeline: 3 weeks'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Childcare Centre - Sydney',
    meta: 'Structural Steel Detailing | 2023',
    desc: 'Detailed structural steel documentation for a 2-story childcare facility including connection details and fabrication notes.',
    specs: ['Steel tonnage: 45 tonnes', 'Connection details: 120+ unique', 'Software: Endurocadd', 'Timeline: 5 weeks'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'residential',
    title: '6-Unit Townhouse Development - Brisbane',
    meta: 'Timber Framing | 2024',
    desc: 'Complete timber framing and truss documentation for a 6-unit townhouse development with identical layouts.',
    specs: ['Units: 6 identical 3-bedroom townhouses', 'Roof trusses: 240+ components', 'Software: Vertex BD', 'Timeline: 4 weeks'],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'steel',
    title: 'Industrial Warehouse - Adelaide',
    meta: 'Structural Steel | 2023',
    desc: 'Heavy industrial steel detailing for a 5,000 sqm logistics warehouse including gantry crane rails.',
    specs: ['Tonnage: 120 tonnes', 'Compliance: AS 4100', 'Software: Tekla/Enduro', 'Complexity: High'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'timber',
    title: 'Luxury Villa - Gold Coast',
    meta: 'Timber Framing & Trusses | 2024',
    desc: 'Architectural masterpiece featuring complex timber roof geometry and large spanning living areas.',
    specs: ['Software: MiTek Sapphire', 'Custom Trusses: 85', 'Approval: RPEQ Certified', 'Level: Premium'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    category: 'commercial',
    title: 'Boutique Office Hub - Perth',
    meta: 'Mixed Structure | 2023',
    desc: 'Detailing for a multi-material boutique office space utilizing both steel portal frames and timber infill.',
    specs: ['Connection Detailing', 'BIM Coordination', 'Assembly Sheets', 'CNC Ready Data'],
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    category: 'steel',
    title: 'Multi-Level Car Park - Hobart',
    meta: 'Structural Steel Detailing | 2024',
    desc: 'Precision detailing for a galvanized steel car park structure with intricate ramp geometry.',
    specs: ['Galvanized detailing', 'Fire protection docs', 'IFC Models', 'Material optimization'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    category: 'residential',
    title: 'Beachfront Residence - Byron Bay',
    meta: 'High-End Timber Framing | 2024',
    desc: 'Corrosion-resistant structural detailing for a premium coastal property with open-plan layouts.',
    specs: ['Specific fasteners', 'Cyclonic region code', '3D Layout models', 'On-site support'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    category: 'timber',
    title: 'Community Hall - Darwin',
    meta: 'Timber Truss Design | 2023',
    desc: 'Large-span timber truss detailing for a public facility, optimized for tropical wind regions.',
    specs: ['AS 1170.2 Compliance', 'NASH Standards', 'Shop drawings', 'Assembly guides'],
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="bg-architectural min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-overlay opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-safety-orange/20 border border-safety-orange rounded-full text-safety-orange font-roboto font-bold text-xs uppercase tracking-widest mb-6">
            Our Portfolio
          </span>
          <h1 className="font-montserrat font-black text-5xl md:text-7xl text-white mb-6">
            Projects That Define <span className="text-safety-orange">Excellence</span>
          </h1>
          <p className="text-steel-grey text-lg max-w-2xl mx-auto">
            Explore our portfolio of residential and commercial projects delivered with precision, quality, and full code compliance.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-10 border-b border-blueprint sticky top-[72px] md:top-[88px] z-50">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex justify-center gap-4 min-w-max">
            {['all', 'residential', 'commercial', 'steel', 'timber'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl font-roboto font-bold text-xs uppercase tracking-widest transition-all border-2 ${
                  filter === cat 
                  ? 'bg-safety-orange border-safety-orange text-white' 
                  : 'bg-white border-blueprint text-steel-navy hover:border-safety-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-blueprint">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-safety-orange text-white px-4 py-2 rounded-lg font-roboto font-bold text-[10px] uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="font-montserrat font-bold text-xl text-obsidian mb-2">{project.title}</h3>
                  <p className="font-roboto text-[10px] text-steel-galvanized uppercase tracking-widest mb-4">{project.meta}</p>
                  <p className="font-inter text-charcoal text-sm leading-relaxed mb-6">{project.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {project.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-steel-navy text-xs font-semibold">
                        <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <Link to="/contact" className="w-full flex items-center justify-center gap-2 py-4 border-2 border-blueprint hover:border-safety-orange hover:text-safety-orange font-roboto font-bold text-xs uppercase tracking-widest rounded-xl transition-all">
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="bg-blueprint py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '500+', label: 'Projects Delivered' },
              { num: '95%', label: 'On-Time Delivery' },
              { num: '100%', label: 'Code Compliant' },
              { num: '50+', label: 'Repeat Clients' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl text-center shadow-sm">
                <p className="font-montserrat font-black text-4xl text-safety-orange mb-2">{stat.num}</p>
                <p className="font-roboto text-[10px] text-charcoal uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-steel-navy py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-steel-grey mb-10 max-w-xl mx-auto">Let's discuss how we can deliver precision documentation for your next build.</p>
          <Link to="/contact" className="inline-flex px-12 py-5 bg-safety-orange text-white font-montserrat font-black text-sm uppercase tracking-widest rounded-xl shadow-orange-glow hover:-translate-y-1 transition-all">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};
