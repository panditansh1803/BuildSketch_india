
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { SERVICES, Service } from '../data';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [data, setData] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate slight delay for GSAP entry orchestration if needed
    const found = SERVICES.find(s => s.id === serviceId);
    setData(found || null);
    setLoading(false);


    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-architectural flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-safety-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-architectural flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-montserrat font-black text-4xl text-obsidian mb-4">Service Not Found</h1>
        <p className="text-steel-grey mb-8">The service you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="px-8 py-3 bg-safety-orange text-white font-bold rounded-lg shadow-orange-glow">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden bg-obsidian">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-12">
          <div className="container mx-auto px-6">
            <Link to="/services" className="inline-flex items-center gap-2 text-safety-orange font-roboto font-bold text-xs uppercase tracking-widest mb-6 group">
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
            <span className="block text-steel-grey font-roboto font-bold text-xs uppercase tracking-[4px] mb-2">
              {data.tag}
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-4">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr,350px] gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-obsidian mb-6">Service Overview</h2>
              <p className="font-inter text-charcoal text-lg leading-relaxed mb-8">
                {data.desc}
              </p>
              <div className="prose prose-lg max-w-none text-charcoal font-inter leading-relaxed">
                {data.longContent}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-architectural rounded-2xl border border-steel-navy/5">
                  <div className="w-10 h-10 bg-safety-orange/10 rounded-full flex items-center justify-center text-safety-orange">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-montserrat font-bold text-obsidian text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-blueprint p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield className="w-32 h-32" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-obsidian mb-4">Quality Assurance</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-6">
                Every detail in our {data.title.toLowerCase()} package undergoes a multi-stage review process to ensure absolute compliance with relevant building codes.
              </p>
              <div className="flex items-center gap-2 text-safety-orange font-bold text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" />
                AS/NZS Certified Workflow
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-obsidian text-white p-8 rounded-3xl shadow-2xl">
              <h4 className="font-montserrat font-bold text-lg mb-6 border-b border-white/10 pb-4 uppercase tracking-widest text-xs">Technical Specs</h4>
              <div className="space-y-6">
                {Object.entries(data.specs).map(([label, value]) => (
                  <div key={label}>
                    <p className="font-roboto text-[10px] text-steel-grey uppercase tracking-widest mb-1">{label}</p>
                    <p className="font-inter font-semibold text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-architectural p-8 rounded-3xl border border-steel-navy/10">
              <h4 className="font-montserrat font-bold text-obsidian text-sm mb-6 uppercase tracking-widest">Need a Quote?</h4>
              <p className="text-charcoal text-xs leading-relaxed mb-6">
                Contact our engineering team today for a free assessment of your requirements.
              </p>
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 py-4 bg-safety-orange text-white font-montserrat font-black text-xs uppercase tracking-widest rounded-xl hover:-translate-y-1 transition-transform shadow-orange-glow">
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
