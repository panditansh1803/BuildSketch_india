
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import gsap from 'gsap';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    document.querySelectorAll('.form-field').forEach((field: any) => {
      field.addEventListener('focus', () => {
        gsap.to(field.parentElement, { scale: 1.02, duration: 0.3 });
      });
      field.addEventListener('blur', () => {
        gsap.to(field.parentElement, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setSubmitStatus('success');


  };

  return (
    <section className="bg-gradient-dark py-40 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-overlay opacity-5"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-24 items-center relative z-10">
        <div>
          <h2 className="font-montserrat font-black text-6xl md:text-8xl text-white mb-10 leading-[0.9] tracking-tighter">
            Architect the<br />
            <span className="text-safety-orange italic">Standard.</span>
          </h2>
          <p className="font-inter text-steel-grey text-xl mb-12 max-w-lg leading-relaxed opacity-80">
            Secure a fabrication-ready documentation package within your timeline. Our <span className="text-white font-bold underline decoration-safety-orange">Designers</span> provide a zero-obligation structural assessment.
          </p>

          <div className="space-y-12">
            {[
              { val: '15+', label: 'PROJECTS DELIVERED' },
              { val: '99.5%', label: 'FIRST-PASS ACCURACY' },
              { val: '5+', label: 'TRUSTED REPEAT CLIENTS' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-10 group hover-trigger">
                <div className="text-safety-orange font-montserrat font-black text-5xl md:text-6xl group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="h-px flex-grow bg-white/10 group-hover:bg-safety-orange transition-colors"></div>
                <div className="text-steel-grey font-roboto font-bold text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-white/5 rounded-[48px] blur-3xl opacity-50"></div>

          {submitStatus === 'success' ? (
            <div className="bg-white/5 backdrop-blur-2xl p-20 rounded-[40px] border border-white/10 text-center animate-[fadeIn_0.5s_ease_forwards] relative">
              <div className="w-24 h-24 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-8 shadow-orange-glow"><CheckCircle2 size={48} className="text-white" /></div>
              <h3 className="text-white font-montserrat font-black text-3xl mb-4">Request Received</h3>
              <p className="text-steel-grey">Our detailing lead will contact you in <span className="text-white font-bold">24h</span>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl p-10 md:p-16 rounded-[40px] border border-white/10 shadow-2xl space-y-12 relative overflow-hidden">
              {/* Gradient Border Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>

              <div className="space-y-12">
                <div className="relative group transition-all duration-300">
                  <input required type="text" placeholder=" "
                    className="form-field peer w-full bg-transparent border-b border-white/20 px-0 py-5 text-white focus:outline-none focus:border-safety-orange transition-all font-inter" />
                  <label className="absolute left-0 top-5 text-steel-grey font-roboto font-bold text-[10px] uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-safety-orange peer-[:not(:placeholder-shown)]:-top-4">
                    FULL NAME
                  </label>
                </div>

                <div className="relative group transition-all duration-300">
                  <input required type="email" placeholder=" "
                    className="form-field peer w-full bg-transparent border-b border-white/20 px-0 py-5 text-white focus:outline-none focus:border-safety-orange transition-all font-inter" />
                  <label className="absolute left-0 top-5 text-steel-grey font-roboto font-bold text-[10px] uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-safety-orange peer-[:not(:placeholder-shown)]:-top-4">
                    EMAIL ADDRESS
                  </label>
                </div>

                <div className="relative group transition-all duration-300">
                  <textarea required rows={4} placeholder=" "
                    className="form-field peer w-full bg-transparent border-b border-white/20 px-0 py-5 text-white focus:outline-none focus:border-safety-orange transition-all font-inter resize-none"></textarea>
                  <label className="absolute left-0 top-5 text-steel-grey font-roboto font-bold text-[10px] uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-safety-orange peer-[:not(:placeholder-shown)]:-top-4">
                    PROJECT BRIEF
                  </label>
                </div>
              </div>

              <button disabled={isSubmitting} className="btn-magnetic hover-trigger w-full bg-safety-orange hover:bg-safety-construction py-6 rounded-2xl flex items-center justify-center gap-4 text-white font-montserrat font-black text-[11px] uppercase tracking-[0.35em] shadow-orange-glow transition-all active:scale-95 disabled:opacity-50 group">
                {isSubmitting ? <Loader2 className="animate-spin" /> : <>REQUEST FREE AUDIT <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};
