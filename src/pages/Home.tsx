import { useState } from 'react';
import { motion } from 'motion/react';
import Balatro from '../components/Balatro';
import {
  Shield,
  Globe,
  Zap,
  MapPin,
  CheckCircle,
  HardHat,
  Award,
  BookOpen,
  Check,
  Play,
  Gem,
  Layers,
  Compass,
  Drill
} from 'lucide-react';
import SoftAurora from '../components/SoftAurora';
import { CATEGORIES, FEATURE_CARDS, TRUSTED_BRANDS } from '../data';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about');

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

  const tabContent = {
    about: 'Quartzite Trading Services is based in Dubai, specializing in the sourcing and distribution of high-end geological and mining instrumentation for remote desert exploration and deep underground mining environments.',
    mission: 'Our mission is to equip mining operators, geologists, and exploration professionals with certified, durable, and field-ready tools that perform reliably in extreme conditions.',
    vision: 'Our vision is to become the trusted regional bridge between global mining equipment manufacturers and the fast-growing exploration sectors across the Middle East and Africa.'
  };

  const serviceCards = [
    { title: 'Mining Expertise', description: 'Field-ready equipment for exploration, laboratories, PPE, and operational success.', icon: Gem },
    { title: 'Geological Solutions', description: 'Precision supplies for sampling, mapping, resource evaluation, and assay workflows.', icon: Compass },
    { title: 'Industrial Supply', description: 'Certified products sourced for harsh mining, drilling, and remote project conditions.', icon: Layers }
  ];

  return (
    <div id="homepage-container" className="overflow-x-hidden bg-[#0a0a0f] industrial-grid">
      
      {/* SECTION 1: HERO AREA */}
      <section
        id="hero"
        className="relative min-h-[760px] lg:min-h-[820px] flex items-center bg-[#0a0a0f] text-white pt-[96px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-55 pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0a0a0f]/45 z-10 pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <SoftAurora
            color1="#B8A99A"
            color2="#7E9CE3"
            brightness={0.9}
            speed={0.22}
            scale={1.25}
          />
        </div>

        {/* EXCO-inspired angular industrial overlays, using Quartzite colors */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[38%] bg-[#0a0a0f]/45 hero-left-slab" />
          <div className="absolute right-0 top-0 h-full w-[34%] bg-[#B8A99A]/18 hero-right-slab" />
          <div className="absolute bottom-0 left-0 w-full h-[118px] bg-[#F9F8F4] hero-bottom-cut hidden md:block" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-28 md:pb-40">
          <div className="lg:col-span-6" />

          <div className="lg:col-span-6 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#B8A99A]"
            >
              <span className="w-2 h-2 rounded-full bg-[#B8A99A] animate-pulse" />
              <span>Dubai, UAE HQ • Serving MEA Operations</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-white tracking-tight uppercase drop-shadow-2xl">
                Expert Mining
                <span className="block text-[#B8A99A]">Supply Solutions</span>
              </h1>
              <p className="text-white/82 text-base sm:text-lg md:text-xl font-sans max-w-2xl leading-relaxed">
                Premium geological tools, laboratory supplies, PPE, and field equipment for operations where precision and durability are non-negotiable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button
                onClick={() => onNavigate('#categories')}
                className="w-full sm:w-auto bg-[#B8A99A] hover:bg-[#a69687] text-[#16243D] text-sm font-display font-bold py-4 px-8 tracking-wider uppercase shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Catalog
              </button>
              <button
                onClick={() => onNavigate('#contact')}
                className="w-full sm:w-auto border border-white/30 hover:border-white text-white hover:bg-white/10 text-sm font-display font-bold py-4 px-8 tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>

        {/* EXCO-inspired stat strip */}
        <div className="absolute bottom-0 left-0 right-0 z-30 hidden md:block">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative bg-[#F9F8F4] text-[#16243D] shadow-2xl min-h-[132px] flex items-center overflow-visible">
              <div className="absolute -top-11 left-8 w-32 h-32 hero-hex-frame bg-white shadow-2xl p-2">
                <div className="w-full h-full hero-hex-frame overflow-hidden relative">
                  <img src="/images/ourstory.png" alt="Quartzite mining preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#16243D]/20" />
                  <Play className="absolute inset-0 m-auto w-12 h-12 text-white fill-white" />
                </div>
              </div>

              <div className="pl-52 pr-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
                <div className="flex items-end gap-3">
                  <span className="font-display text-7xl font-black text-[#B8A99A] leading-none">10</span>
                  <div className="pb-2">
                    <span className="block text-[#B8A99A] font-black text-3xl leading-none">+</span>
                    <span className="font-display font-black text-4xl uppercase leading-none">Experience</span>
                  </div>
                </div>
                {serviceCards.slice(0, 2).map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="flex items-center gap-4">
                      <Icon className="w-10 h-10 text-[#B8A99A] shrink-0" />
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase">{card.title}</h3>
                        <p className="text-sm text-[#16243D]/70 leading-snug">{card.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT / TABS */}
      <section
        id="about"
        className="py-24 lg:py-32 bg-white text-[#16243D] border-t border-black/5 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl relative border border-black/5">
                <img
                  src="/images/ourstory.png"
                  alt="Mining and geological operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243D]/35 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#16243D] text-white p-6 max-w-xs shadow-2xl border border-white/10 space-y-2 z-10 hidden sm:block">
                <div className="flex items-center space-x-3 text-[#B8A99A]">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="font-display font-bold text-xs tracking-wider uppercase">Certified Supply</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  Authentic, field-tested equipment sourced for mining and exploration teams across MEA.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="text-[#B8A99A] font-display font-bold text-sm tracking-widest uppercase mb-3">
                  Welcome to ..
                </div>
                <h2 className="font-display font-black text-5xl sm:text-6xl leading-none tracking-tight uppercase text-[#16243D]">
                  Quartzite Trading Services
                </h2>
              </div>

              <div className="grid grid-cols-3 bg-[#F9F8F4] overflow-hidden shadow-sm">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'mission', label: 'Mission' },
                  { id: 'vision', label: 'Vision' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'about' | 'mission' | 'vision')}
                    className={`relative py-5 px-3 font-display font-bold text-lg uppercase transition-all cursor-pointer ${
                      activeTab === tab.id ? 'bg-[#B8A99A] text-[#16243D]' : 'text-[#16243D] hover:bg-[#16243D]/5'
                    }`}
                  >
                    <span className="relative z-10">{tab.label}</span>
                    {activeTab === tab.id && <span className="absolute inset-y-0 -right-6 w-12 bg-[#B8A99A] skew-x-[-14deg] hidden md:block" />}
                  </button>
                ))}
              </div>

              <p className="text-[#16243D]/75 text-lg leading-relaxed max-w-3xl">
                {tabContent[activeTab]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {['Global OEM sourcing', 'Laboratory & PPE supply', 'Mining field readiness', 'Regional logistics support'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#16243D]">
                    <span className="bg-[#B8A99A]/20 text-[#B8A99A] p-1.5 rounded-full">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('#contact')}
                className="mt-3 border border-[#B8A99A] text-[#16243D] hover:bg-[#B8A99A] font-display font-bold text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-full transition-all cursor-pointer"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EQUIPMENT CATEGORIES / SERVICE CARDS */}
      <section
        id="categories"
        className="py-24 bg-[#F9F8F4] text-[#16243D] border-t border-black/5 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-[#16243D]">
              Equipment Categories
            </h2>
            <div className="h-1 w-20 bg-[#B8A99A] mx-auto" />
            <p className="text-[#16243D]/70 text-base leading-relaxed">
              A clean service-card layout inspired by the reference site, rebuilt with Quartzite’s existing palette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              const highlighted = index === 2;
              return (
                <div
                  key={card.title}
                  className={`min-h-[280px] rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-300 border-b-8 border-[#B8A99A] ${
                    highlighted ? 'bg-[#B8A99A] text-[#16243D]' : 'bg-white text-[#16243D] hover:-translate-y-1'
                  }`}
                >
                  <div className={`${highlighted ? 'bg-[#16243D]/10' : 'bg-[#B8A99A]'} w-16 h-16 rounded-full flex items-center justify-center mb-7`}>
                    <Icon className={`${highlighted ? 'text-[#16243D]' : 'text-white'} w-8 h-8`} />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase mb-3">{card.title}</h3>
                  <p className={`text-sm leading-relaxed max-w-xs ${highlighted ? 'text-[#16243D]/85' : 'text-[#16243D]/65'}`}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => onNavigate(`/categories/${category.id}`)}
                className="group relative h-80 overflow-hidden shadow-2xl border border-black/10 cursor-pointer transition-all duration-300 bg-white"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243D]/95 via-[#16243D]/55 to-transparent transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-full bg-[#B8A99A]/20 hero-right-slab" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
                  <span className="font-display font-bold text-2xl text-white tracking-wide uppercase">
                    {category.name}
                  </span>
                  <p className="text-white/70 text-sm mt-2 max-w-xs">{category.description}</p>
                  <div className="w-8 h-0.5 bg-[#B8A99A] mt-4 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUSTED BRANDS */}
      <section id="brands" className="py-16 bg-white border-y border-black/5">
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
      <section id="why-us" className="py-24 bg-[#16243D] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={1020}
            color1="#544f33"
            color2="#343a38"
            color3="#a39a93"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-white">
              Why Quartzite TS?
            </h2>
            <div className="h-1 w-20 bg-[#B8A99A] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURE_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-[#0a0a0f]/60 hover:bg-[#0a0a0f]/80 border border-white/10 hover:border-[#B8A99A] p-8 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl inline-block mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getFeatureIcon(card.iconName)}
                </div>
                <h3 className="font-display font-bold text-xl tracking-wide uppercase text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURE HIGHLIGHT – SAFETY */}
      <section id="safety" className="grid grid-cols-1 lg:grid-cols-2 text-[#16243D] border-t border-black/5">
        <div className="bg-[#B8A99A] p-12 sm:p-20 xl:py-32 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-none tracking-tight uppercase text-[#16243D]">
              Safety Above All
            </h2>
            <div className="h-1 w-16 bg-[#16243D]" />
          </div>

          <p className="text-[#16243D]/90 text-base leading-relaxed max-w-lg font-medium">
            In hazardous environments, PPE is your last line of defense. We supply industry-leading protective gear designed for the unique challenges of deep mining and extreme exploration.
          </p>

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

          <div className="pt-4">
            <button
              onClick={() => onNavigate('/categories/ppe')}
              className="bg-[#16243D] hover:bg-[#20314e] text-white font-display font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded transition-all cursor-pointer inline-flex items-center space-x-2 shadow-lg"
            >
              <span>View Safety Catalog</span>
            </button>
          </div>
        </div>

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
