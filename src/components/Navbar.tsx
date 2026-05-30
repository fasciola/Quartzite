import { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../data';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on navigation
  const handleCategoryClick = (categoryId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(`/categories/${categoryId}`);
  };

  const menuItems = [
    { label: 'LABORATORY SUPPLIES', target: '/categories/laboratory-supplies' },
    { label: 'PPE', target: '/categories/ppe' },
    { label: 'FIELD CLOTHES', target: '/categories/field-clothes' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0f1d]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Icon */}
              <button
                  onClick={() => onNavigate('/')}
                  className="flex items-center cursor-pointer focus:outline-none bg-transparent border-none"
                  aria-label="Quartzite TS Home"
              >
                  <img
                      src="/images/logo.png"
                      alt="Quartzite Trading Services"
                      className="h-12 w-auto"
                  />
              </button>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Desktop Navigation">
          <button
            onClick={() => onNavigate('/')}
            className={`font-sans text-xs tracking-wider font-bold uppercase py-1 focus:outline-none cursor-pointer border-none bg-transparent ${
              currentPath === '/' ? 'text-[#B8A99A]' : 'text-white/75 hover:text-white transition-colors'
            }`}
          >
            HOME
          </button>

          {menuItems.map((item) => {
            const isActive = currentPath === item.target;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.target)}
                className={`font-sans text-xs tracking-wider font-bold uppercase transition-colors cursor-pointer focus:outline-none border-none bg-transparent ${
                  isActive ? 'text-[#B8A99A] border-b border-[#B8A99A]' : 'text-white/75 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => onNavigate('#contact')}
            className="bg-[#B8A99A] hover:bg-[#a69687] text-[#0a1424] font-sans font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-[#B8A99A]/50 border-none"
          >
            REQUEST QUOTE
          </button>
        </div>

        {/* Mobile Menu Toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-[#B8A99A] transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0a0a0f]/98 backdrop-blur-lg z-40 border-t border-white/10 animate-fade-in flex flex-col justify-between overflow-y-auto pb-10">
          <div className="px-6 py-6 space-y-7">
            {/* Nav links */}
            <div className="space-y-4">
              <span className="text-white/40 font-display font-medium text-xs tracking-widest block mb-4 uppercase">
                MAIN SECTION
              </span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('/');
                }}
                className="w-full text-left py-2 font-sans font-semibold text-lg text-white hover:text-[#B8A99A] border-b border-white/5"
              >
                Home
              </button>
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate(item.target);
                  }}
                  className="w-full text-left py-2 font-sans font-semibold text-lg text-white hover:text-[#B8A99A] border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Categories grid */}
            <div className="space-y-4 pt-4">
              <span className="text-white/40 font-display font-medium text-xs tracking-widest block mb-3 uppercase">
                EXPLORE EQUIPMENT
              </span>
              <div className="grid grid-cols-1 gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg group transition-colors"
                  >
                    <span className="font-sans font-medium text-sm text-white/90 group-hover:text-[#B8A99A] block">
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom mobile CTA */}
          <div className="px-6 pt-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('#contact');
              }}
              className="w-full bg-[#B8A99A] hover:bg-[#a69687] text-[#16243D] text-center font-display font-bold py-3.5 rounded tracking-widest uppercase transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
