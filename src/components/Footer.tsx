import { useState } from 'react';
import { Compass, Mail, Phone, MapPin, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleQuickLink = (target: string) => {
    onNavigate(target);
  };

  const getModalTitle = () => {
    if (activeModal === 'terms') return 'Terms & Conditions';
    if (activeModal === 'privacy') return 'Privacy Policy';
    if (activeModal === 'shipping') return 'Shipping & Logistics; Policy';
    return '';
  };

  const getModalContent = () => {
    if (activeModal === 'terms') {
      return (
        <div className="space-y-4">
          <p>Welcome to Quartzite Trading Services LLC. By requesting quotation metrics or purchasing instrumentation systems through our Dubai facilities, you consent to our business terms and conditions as stipulated below:</p>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li><strong>Official Quotes:</strong> All requested pricing is provided in PDF format valid for up to 30 calendar days from the date of issue.</li>
            <li><strong>Warranty Protection:</strong> All supplies are genuine authorized OEM imports covered under manufacturer global warranties.</li>
            <li><strong>Jurisdiction:</strong> Disputes involving procurement contracts are governed under the active legal jurisdiction of Dubai, United Arab Emirates (UAE).</li>
          </ul>
        </div>
      );
    }
    if (activeModal === 'privacy') {
      return (
        <div className="space-y-4">
          <p>Your institutional privacy is a core operational priority at Quartzite Trading Services LLC:</p>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li><strong>Data Retention:</strong> Information submitted via our Quote form is logged locally solely for high-clearance customs dispatch and internal quote drafting.</li>
            <li><strong>No Commercial Transfer:</strong> Quartzite TS never sells, leases or distributes procurement logs to third-party marketing entities.</li>
            <li><strong>Encrypted Communications:</strong> Standard quote queries are kept safe with full enterprise grade communication encryption.</li>
          </ul>
        </div>
      );
    }
    if (activeModal === 'shipping') {
      return (
        <div className="space-y-4">
          <p>Through our central hub coordinates in the United Arab Emirates, Quartzite Trading Services LLC operates rapid-deployment heavy marine and air logistics paths across the Middle East and Africa (MEA):</p>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li><strong>Port Authorities:</strong> Active direct shipments dispatched from Dubai Ports (Jebel Ali Free Zone and Port Rashid) to core MEA logistics keys.</li>
            <li><strong>Custom Clearance Docs:</strong> Complete certificates of origin, certified weight clearances, and dangerous goods declarations are managed in-house.</li>
            <li><strong>Hazmat Guarding:</strong> Delicate tools, high-capacity batteries, and explosive-safe exploration gear are fully secured for shipping compliance.</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <footer className="bg-[#0a0f1d] text-white border-t border-white/10 font-sans relative">
      {/* Upper Footer Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Column 1: Brand Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#B8A99A]/10 rounded">
              <Compass className="w-5 h-5 text-[#B8A99A]" />
            </div>
            <span className="font-display font-bold tracking-wider text-lg">QUARTZITE TS</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Premium geological instruments, mining tools, and PPE for extreme conditions. Based in Dubai, serving the Middle East and Africa.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-semibold text-[#B8A99A] tracking-wider text-xs uppercase">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => handleQuickLink('#about')}
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('#categories')}
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('#brands')}
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Brands
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('#contact')}
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display font-semibold text-[#B8A99A] tracking-wider text-xs uppercase">
            LEGAL
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button 
                onClick={() => setActiveModal('terms')} 
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveModal('privacy')} 
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveModal('shipping')} 
                className="text-white/60 hover:text-[#B8A99A] transition-colors cursor-pointer text-left focus:outline-none"
              >
                Shipping Policy
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 space-y-3 sm:space-y-0">
          <span>
            © 2024 Quartzite Trading Services LLC. All rights reserved.
          </span>
        </div>
      </div>

      {/* Modern High-End Dark Modal Overlay for Legal Info inside iFrame */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in px-4">
          <div className="bg-[#16243D] border border-white/15 max-w-lg w-full rounded-2xl p-6 md:p-8 relative shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wide">
                {getModalTitle()}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-white/50 hover:text-white p-1 rounded-full hover:bg-white/5 transition-all cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-white/70 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {getModalContent()}
            </div>
            <div className="pt-4 border-t border-white/10 text-right">
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-[#B8A99A] hover:bg-[#a69687] text-[#16243D] text-xs font-display font-medium py-2.5 px-6 rounded uppercase cursor-pointer transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
