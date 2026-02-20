import React, { useState } from 'react';
import { Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram, Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Framing',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (Optional but must be valid if entered, or required for "robustness")
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide some project details';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Real API call using Web3Forms
      // The user needs to replace 'YOUR_WEB3FORMS_ACCESS_KEY' with their actual access key from web3forms.com
      const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry from ${formData.fullName}`,
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
          to: 'BSdrafting@outlook.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectType: 'Residential Framing',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Server-side validation failed.');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-architectural min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-dark pt-40 pb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 blueprint-overlay opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-montserrat font-black text-5xl md:text-7xl text-white mb-6">
            Let's Work <span className="text-safety-orange">Together</span>
          </h1>
          <p className="text-steel-grey text-lg max-w-2xl mx-auto">
            Get in touch to discuss your next structural project. Our design team is ready to deliver the precision you need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20">
            {/* Form */}
            <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-blueprint relative overflow-hidden">
              {submitStatus === 'success' && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-12 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-montserrat font-black text-3xl text-obsidian mb-4">Message Sent!</h3>
                  <p className="text-charcoal mb-8 max-w-xs">Thank you for reaching out. Our design team will contact you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-8 py-3 bg-safety-orange text-white font-bold rounded-xl shadow-orange-glow hover:scale-105 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <h2 className="font-montserrat font-black text-3xl text-obsidian mb-8">Send Us a Message</h2>

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 animate-shake">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Something went wrong. Please check your information or try again later.</p>
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-roboto font-bold text-[10px] text-steel-grey uppercase tracking-widest ml-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-architectural border ${errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-blueprint focus:border-safety-orange'} rounded-2xl px-6 py-4 focus:outline-none transition-colors font-inter`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="font-roboto font-bold text-[10px] text-steel-grey uppercase tracking-widest ml-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-architectural border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-blueprint focus:border-safety-orange'} rounded-2xl px-6 py-4 focus:outline-none transition-colors font-inter`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-roboto font-bold text-[10px] text-steel-grey uppercase tracking-widest ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 000 000 0000"
                      className={`w-full bg-architectural border ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-blueprint focus:border-safety-orange'} rounded-2xl px-6 py-4 focus:outline-none transition-colors font-inter`}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="font-roboto font-bold text-[10px] text-steel-grey uppercase tracking-widest ml-1">Project Type</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-architectural border border-blueprint rounded-2xl px-6 py-4 focus:outline-none focus:border-safety-orange transition-colors font-inter appearance-none cursor-pointer"
                      >
                        <option>Residential Framing</option>
                        <option>Commercial Detailing</option>
                        <option>Steel Detailing</option>
                        <option>Timber Trusses</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-steel-grey">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-roboto font-bold text-[10px] text-steel-grey uppercase tracking-widest ml-1">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project requirements..."
                    className={`w-full bg-architectural border ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-blueprint focus:border-safety-orange'} rounded-2xl px-6 py-4 focus:outline-none transition-colors font-inter`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-safety-orange hover:bg-safety-construction text-white font-montserrat font-black text-sm uppercase tracking-widest py-5 rounded-2xl shadow-orange-glow transition-all hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12 py-8">
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-blueprint flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-obsidian mb-1">Email Us</h4>
                    <p className="text-charcoal text-sm mb-1">General Inquiries:</p>
                    <a href="mailto:BSdrafting@outlook.com" className="text-safety-orange font-bold hover:underline">BSdrafting@outlook.com</a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-blueprint flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-obsidian mb-1">Call Us</h4>
                    <p className="text-charcoal text-sm mb-1">Monday - Friday:</p>
                    <a href="tel:+919696379407" className="text-safety-orange font-bold hover:underline">+91 96963 79407</a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-blueprint flex items-center justify-center text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-obsidian mb-1">Business Hours</h4>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-blueprint">
                <h4 className="font-montserrat font-bold text-obsidian text-xs uppercase tracking-widest mb-6">Follow Our Work</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => {
                    const names = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'];
                    return (
                      <a key={i} href="#" aria-label={names[i]} className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blueprint flex items-center justify-center text-steel-galvanized hover:bg-safety-orange hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-safety-orange focus-visible:outline-none">
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};