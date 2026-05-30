import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { CATEGORIES } from '../data';
import { Check, Mail, Phone, MapPin, Loader2 } from 'lucide-react';

interface ContactFormProps {
  preselectedCategoryId?: string;
}

export default function ContactForm({ preselectedCategoryId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (preselectedCategoryId) {
      setFormData(prev => ({ ...prev, category: preselectedCategoryId }));
    }
  }, [preselectedCategoryId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError('Please fill out all required fields: Name, Email, and Message.');
      return;
    }
    setValidationError('');

    setIsSubmitting(true);
    
    // Simulate API storage delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#16243D] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#B8A99A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-[#7E9CE3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#B8A99A] font-display font-medium text-xs tracking-widest block uppercase">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none text-white tracking-tight uppercase">
                REQUEST A QUOTE
              </h2>
              <div className="h-1 w-20 bg-[#B8A99A]" />
              <p className="text-white/80 text-base leading-relaxed max-w-lg">
                Need bulk pricing or specialized instrumentation? Our technical sales team is ready to assist.
              </p>
            </div>

            {/* Contact Details List (vertical with white icons and text) */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center space-x-4">
                <div id="contact-headquarters" className="p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider text-[#B8A99A] uppercase">
                    HEADQUARTERS
                  </h4>
                  <p className="text-white text-sm mt-0.5 font-medium">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div id="contact-phone" className="p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider text-[#B8A99A] uppercase">
                    PHONE
                  </h4>
                  <p className="text-white text-sm mt-0.5 font-medium">+971 XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div id="contact-email" className="p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs tracking-wider text-[#B8A99A] uppercase">
                    EMAIL
                  </h4>
                  <a href="mailto:info@quartzite-ts.com" className="text-white text-sm hover:text-[#B8A99A] transition-colors mt-0.5 font-medium block">
                    info@quartzite-ts.com
                  </a>
                </div>
              </div>
            </div>

            {/* Micro warning */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-xs text-white/50 leading-relaxed">
              * Official quotation packets will be issued in PDF format with transparent sea/air postage delivery charges. For emergency requests, label your message as <strong className="text-white/80">"CRITICAL SUPPLY"</strong>.
            </div>
          </div>

          {/* Right Column: Clean White Card with inputs */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#16243D] p-8 md:p-10 rounded-2xl shadow-2xl border border-black/5">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#16243D]">
                      Inquiry Received
                    </h3>
                    <p className="text-[#16243D]/70 text-sm max-w-md mx-auto font-sans">
                      Thank you! Your quotation request file has been logged into our Dubai procurement queue. A technical sales engineer will contact you at <span className="font-semibold text-[#16243D]">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  <div className="border-t border-black/5 pt-6 max-w-sm mx-auto text-xs text-black/40">
                    Confirmation Code: <span className="font-mono text-black/60">QZ-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        category: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#16243D] hover:bg-[#20314e] text-white font-sans text-xs font-bold tracking-wider rounded uppercase transition-colors pointer-events-auto cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Validation Error banner inside page context */}
                  {validationError && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-600 font-semibold animate-fade-in uppercase">
                      * {validationError}
                    </div>
                  )}

                  {/* Two column grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                        NAME <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all placeholder:text-black/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                        COMPANY
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Mining Corp Ltd"
                        className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all placeholder:text-black/30"
                      />
                    </div>
                  </div>

                  {/* Two column grid email + phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                        EMAIL <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all placeholder:text-black/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                        PHONE
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all placeholder:text-black/30"
                      />
                    </div>
                  </div>

                  {/* Dropdown Product Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="category" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                      PRODUCT INTEREST
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all"
                    >
                      <option value="" className="text-black/60">Select a category...</option>
                      {CATEGORIES.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Textarea Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold font-display uppercase tracking-widest text-[#16243D]/60">
                      MESSAGE <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-black/5 border border-black/10 focus:border-[#16243D] focus:ring-1 focus:ring-[#16243D] rounded-lg px-4 py-3 text-sm text-[#16243D] outline-none transition-all placeholder:text-black/30 resize-none"
                    />
                  </div>

                  {/* Submit Button - Dark Navy Background, White Text, full width */}
                  <button
                    id="quote-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#16243D] hover:bg-[#20314e] text-white font-display font-semibold py-4 px-6 tracking-widest uppercase rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <span>SUBMIT REQUEST</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
