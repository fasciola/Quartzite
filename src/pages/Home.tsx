import React from 'react';
import { motion } from 'motion/react';
import Balatro from '../components/Balatro';
import { 
  Shield, 
  Globe, 
  Zap, 
  MapPin, 
  CheckCircle, 
  HardHat, 
  ArrowRight, 
  Award,
  BookOpen, 
  Check 
} from 'lucide-react';
import SoftAurora from '../components/SoftAurora';
import { CATEGORIES, FEATURE_CARDS, TRUSTED_BRANDS } from '../data';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Map our icon names string to actual Lucide components
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-8 h-8 text-[#B8A99A]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#B8A99A]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#B8A99A]" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-[#B8A99A]" />;
      case 'CheckCircle':
        return <CheckCircle className="w-8 h-8 text-[#B8A99A]" />;
      case 'HardHat':
        return <HardHat className="w-8 h-8 text-[#B8A99A]" />;
      default:
        return <Shield className="w-8 h-8 text-[#B8A99A]" />;
    }
  };

  return (
    <div id="homepage-container" className="overflow-x-hidden bg-[#0a0a0f] industrial-grid">
      
      {/* SECTION 1: HERO AREA */}
      <section 
        id="hero"
        className="relative h-screen min-h-[650px] flex items-center justify-center bg-[#0a0a0f] text-white pt-[80px] overflow-hidden"
      >
        {/* Background Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dynamic contrast guard overlay */}
        <div className="absolute inset-0 bg-[#0a0a0f]/0 z-10 pointer-events-none" />

        {/* Soft aurora element rendered behind with brand-approved color tones */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
          <SoftAurora 
            color1="#B8A99A" 
            color2="#7E9CE3" 
            brightness={1.0} 
            speed={0.25} 
            scale={1.3} 
          />
        </div>

        {/* Content container */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20 space-y-8 select-none">
          
          {/* Tagline / Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#B8A99A]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dubai, UAE HQ • Serving MEA Operations</span>
          </motion.div>

          {/* Heading lines stacked */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-none text-white tracking-tight uppercase"
            >
              PREMIUM TOOLS FOR
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tight uppercase text-transparent"
              style={{ WebkitTextStroke: '1px #B8A99A', opacity: 0.85 }}
            >
              EXTREME CONDITIONS
            </motion.h1>
          </div>

          {/* Core description text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Equipping mining operations, geologists, and exploration professionals across the Middle East & Africa with gear trusted where the Earth gets hard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('#categories')}
              className="w-full sm:w-auto bg-[#B8A99A] hover:bg-[#a69687] text-[#16243D] text-sm font-display font-bold py-4 px-8 tracking-wider uppercase rounded shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Catalog
            </button>
            <button
              onClick={() => onNavigate('#contact')}
              className="w-full sm:w-auto border border-white/20 hover:border-white text-white hover:bg-white/5 text-sm font-display font-bold py-4 px-8 tracking-wider uppercase rounded transition-all duration-200 cursor-pointer"
            >
              Contact Sales
            </button>
          </motion.div>
          
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-white/40 text-xs tracking-widest uppercase">
          <span className="animate-bounce">↓</span>
          <span>Scroll</span>
        </div>
      </section>

      {/* SECTION 2: ABOUT / OUR STORY */}
      <section 
        id="about" 
        className="py-24 bg-[#F9F8F4] text-[#16243D] border-t border-black/5 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3 text-[#B8A99A]">
                <div className="h-0.5 w-10 bg-[#B8A99A]" />
                <span className="font-display font-bold text-xs tracking-widest uppercase">
                  OUR STORY
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-[#16243D]">
                FORGED IN DUBAI, TRUSTED IN THE DEEP.
              </h2>
              
              <div className="space-y-4 text-[#16243D]/80 text-base leading-relaxed">
                <p>
                  Quartzite Trading Services is based in Dubai, specializing in the sourcing and distribution of high-end geological and mining instrumentation. Our operations are specifically engineered to supply remote desert exploration and deep underground mining environments where precision and durability are non‑negotiable.
                </p>
                <p>
                  We bridge the gap between the world’s top industrial instrumentation manufacturers and the demanding mining sectors of the Middle East and Africa. Partnering directly with certified global OEMs ensures that operations across the region receive authentic, certified equipment equipped with full operational support.
                </p>
              </div>

            </div>

            {/* Right Graphic Frame */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-none overflow-hidden shadow-2xl relative border border-black/5">
                <img 
                  src=" /images/ourstory.png" 
                  alt="Industrial setting worker using angle grinder with sparks flying" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Overlay Info badging (Dark Blue Box floating over bottom-left of the image) */}
              <div className="absolute -bottom-6 -left-6 bg-[#16243D] text-white p-6 max-w-xs rounded-none shadow-2xl border border-white/10 space-y-2 z-10 animate-fade-in">
                <div className="flex items-center space-x-3 text-[#B8A99A]">
                  <Globe className="w-5 h-5 shrink-0" />
                  <span className="font-display font-bold text-xs tracking-wider uppercase">GLOBAL LOGISTICS</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  Rapid deployment of critical gear from our Dubai facilities to anywhere in MEA.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: EQUIPMENT CATEGORIES */}
      <section 
        id="categories" 
        className="py-24 bg-[#F9F8F4] text-[#16243D] border-t border-black/5 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-[#16243D]">
              EQUIPMENT CATEGORIES
            </h2>
            <div className="h-1 w-20 bg-[#B8A99A] mx-auto" />
            <p className="text-[#16243D]/70 text-base leading-relaxed">
              Precision-engineered tools for every stage of the mining and exploration lifecycle.
            </p>
          </div>

          {/* Grid Layout 2-row x 3-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <div 
                key={category.id}
                onClick={() => onNavigate(`/categories/${category.id}`)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10 cursor-pointer transition-all duration-300"
              >
                {/* Background image base */}
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243D]/95 via-[#16243D]/50 to-transparent transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                  <span className="font-display font-bold text-2xl text-white tracking-wide uppercase">
                    {category.name}
                  </span>
                  
                  {/* Small white line that expands on hover */}
                  <div className="w-8 h-0.5 bg-white mt-2 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: TRUSTED BRANDS */}
      <section 
        id="brands" 
        className="py-16 bg-white border-y border-black/5"
      >
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <span className="text-[#16243D]/40 font-display font-semibold text-xs tracking-widest uppercase block">
            TRUSTED BRANDS WE CARRY
          </span>
          
          <div className="flex flex-wrap items-center justify-around gap-x-12 gap-y-6">
            {TRUSTED_BRANDS.map((brand) => (
              <span 
                key={brand}
                className="font-display font-bold text-2xl text-black/30 tracking-tight hover:text-[#B8A99A] transition-colors whitespace-nowrap cursor-default uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY QUARTZITE TS? */}
      <section 
        id="why-us" 
        className="py-24 bg-[#16243D] text-white relative overflow-hidden"
      >
        {/* Soft background textures */}
              {/* Animated shader background – absolutely positioned */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                  <Balatro
                      isRotate={false}
                      mouseInteraction={false}
                      pixelFilter={1020}
                      color1="#544f33"    // deep olive/sand
                      color2="#343a38"    // dark slate
                      color3="#a39a93"    // warm sand/stone
                  />
              </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-white">
              WHY QUARTZITE TS?
            </h2>
            <div className="h-1 w-20 bg-[#B8A99A] mx-auto" />
          </div>

          {/* Grid details 2-row x 3-column features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURE_CARDS.map((card, index) => (
              <div 
                key={index}
                className="bg-[#0a0a0f]/60 hover:bg-[#0a0a0f]/80 border border-white/10 hover:border-[#B8A99A] p-8 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                {/* Icon wrapper */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl inline-block mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getFeatureIcon(card.iconName)}
                </div>
                
                <h3 className="font-display font-bold text-xl tracking-wide uppercase text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FEATURE HIGHLIGHT – SAFETY */}
      <section 
        id="safety" 
        className="grid grid-cols-1 lg:grid-cols-2 text-[#16243D] border-t border-black/5"
      >
        {/* Left container - Beige/Tan Background */}
        <div className="bg-[#B8A99A] p-12 sm:p-20 xl:py-32 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-[#16243D]">
              SAFETY ABOVE ALL
            </h2>
            <div className="h-1 w-16 bg-[#16243D]" />
          </div>

          <p className="text-[#16243D]/90 text-base leading-relaxed max-w-lg font-medium">
            In hazardous environments, PPE is your last line of defense. We supply industry-leading protective gear designed for the unique challenges of deep mining and extreme exploration.
          </p>

          {/* Checklist bullets - Dark Navy icons & text */}
          <div className="space-y-4 text-sm font-bold text-[#16243D]">
            {[
              'Gas detection & respiratory protection',
              'High-impact head & face gear',
              'Technical workwear & extreme weather gear',
              'Fall protection systems'
            ].map((text) => (
              <div key={text} className="flex items-center space-x-3">
                <div className="bg-[#16243D]/10 p-1.5 rounded-full text-[#16243D]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Link to safety category */}
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/categories/ppe-safety-gear')}
              className="bg-[#16243D] hover:bg-[#20314e] text-white font-display font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg"
            >
              <span>VIEW SAFETY CATALOG</span>
            </button>
          </div>
        </div>

        {/* Right full-height image containing engineers inspecting machinery and laptop */}
        <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px]">
          <img 
            src="/images/safety.jpg"
            alt="Engineers and technicians inspecting machinery and looking at a laptop screen" 
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#16243D]/10 pointer-events-none" />
        </div>
      </section>

    </div>
  );
}
