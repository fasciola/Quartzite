import { useState, useEffect } from 'react';
import { Compass, ArrowLeft, ArrowRight, ShieldCheck, Search, Check, ShoppingBag, X } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';

interface CategoryDetailProps {
  categoryId: string;
  onNavigate: (path: string) => void;
  onRequestQuote: (categoryId: string) => void;
}

export default function CategoryDetail({ categoryId, onNavigate, onRequestQuote }: CategoryDetailProps) {
  // Find current active category
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  
  // Interactive Filter options
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [inStockOnly, setInStockOnly] = useState(true);
  
  // Basket & Notifications
  const [basket, setBasket] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top on category mount/change
  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset filters on category change
    setSearchQuery('');
    setSelectedBrand('All Brands');
  }, [categoryId]);

  // If no category found, fall back safely
  if (!category) {
    return (
      <div className="py-32 text-center text-white bg-[#0a0f1d] h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="font-display font-medium text-3xl">CATEGORY NOT FOUND</h2>
        <button
          onClick={() => onNavigate('/')}
          className="bg-[#B8A99A] px-6 py-2.5 rounded font-bold text-[#16243D] text-sm cursor-pointer border-none"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  // Filter products matching this category
  const categoryProducts = PRODUCTS.filter(prod => prod.category === categoryId);

  // Dynamically compile a list of unique brands for filters
  const uniqueBrands = ['All Brands', ...Array.from(new Set(categoryProducts.map(p => p.brand).filter(Boolean)))];

  // Perform filtration based on user input
  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
    const matchesInStock = !inStockOnly || product.inStock !== false;

    return matchesSearch && matchesBrand && matchesInStock;
  });

  // Handle adding an item to quotation enquiry
  const handleAddToEnquiry = (productName: string) => {
    if (!basket.includes(productName)) {
      setBasket(prev => [...prev, productName]);
    }
    
    // Broadcast message to user
    setToastMessage(`"${productName.toUpperCase()}" added to your quote enquiry request.`);
    
    // Auto-prefill the central form message when scrolling down
    const contactMessageInput = document.getElementById('message') as HTMLTextAreaElement | null;
    if (contactMessageInput) {
      const currentText = contactMessageInput.value;
      const additionText = `Hi Quartzite TS, I would like to request a commercial quote for: ${productName}.`;
      
      if (!currentText.includes(productName)) {
        contactMessageInput.value = currentText 
          ? `${currentText}\n- ${productName}`
          : `I am interested in: \n- ${productName}`;
        
        // Dispatch custom change event so React form state updates
        const event = new Event('input', { bubbles: true });
        contactMessageInput.dispatchEvent(event);
      }
    }

    // Dismiss toast after delay
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Triggers immediate scrolling down to contact form and passes selection
  const handleCheckoutEnquiry = () => {
    onRequestQuote(categoryId);
    
    // Highlight contact form section and focus message
    setTimeout(() => {
      const formTextarea = document.getElementById('message');
      if (formTextarea) {
        formTextarea.focus();
      }
    }, 300);
  };

  return (
    <div id={`category-page-${categoryId}`} className="bg-[#0a0f1d] min-h-screen pt-20 font-sans select-none relative">
      
      {/* Dynamic Header Frame section with beautiful dark navy banner behind */}
      <section className="relative bg-[#0a0f1d] text-white py-20 overflow-hidden border-b border-white/5">
        {/* low-opacity background image representing technician/lab settings */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 filter grayscale blur-[1px]" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/90 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-4">
          {/* Breadcrumbs: "HOME > [CATEGORY_NAME]" in beige uppercase */}
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-[#B8A99A]">
            <button 
              onClick={() => onNavigate('/')} 
              className="hover:underline hover:text-white cursor-pointer transition-colors bg-transparent border-none uppercase font-bold text-xs"
            >
              HOME
            </button>
            <span>&gt;</span>
            <span className="uppercase">{category.name}</span>
          </div>

          <div className="space-y-4 pt-4 max-w-4xl">
            <h1 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight leading-none text-white">
              {category.name}
            </h1>
            
            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
              {category.longDescription || "Professional-grade tools built for high-reliability in standard exploration campaigns. Trusted by exploration geologists operating in the most demanding MEA areas."}
            </p>

            {/* Counter: horizontal beige line with total shippable count */}
            <div className="flex items-center space-x-4 pt-6 text-xs font-mono tracking-widest text-white/50 uppercase">
              <span className="font-bold">{categoryProducts.length} PRODUCTS AVAILABLE</span>
              <div className="h-[2px] w-24 bg-[#B8A99A]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR - Light Cream / Off-white background */}
      <section className="bg-[#FAF9F5] border-b border-[#e6e2d8] py-6 sticky top-[68px] z-30 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-gray-800">
          
          {/* Search products wide input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border border-[#d6d1c4] focus:border-[#0a0f1d] text-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-400 outline-none transition-colors"
            />
          </div>

          {/* Filters cluster on the right */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-5 w-full md:w-auto">
            
            {/* Brands Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">BRAND:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-white border border-[#d6d1c4] text-gray-800 font-sans text-xs font-semibold rounded-lg px-3 py-2 outline-none focus:border-[#0a0f1d] transition-colors cursor-pointer"
              >
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* In Stock checkbox (default checked) */}
            <label className="flex items-center space-x-2.5 cursor-pointer select-none text-xs font-bold uppercase tracking-wider text-gray-600 font-sans">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4.5 h-4.5 accent-[#0a0f1d] cursor-pointer rounded border-[#d6d1c4]"
              />
              <span>In Stock Only</span>
            </label>

            {/* Indicator tally */}
            <div className="text-xs font-mono font-bold text-gray-400 border-l border-gray-200 pl-4 uppercase">
              {filteredProducts.length} PRODUCTS MATCHED
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT GRID - Set against light cream background */}
      <section className="bg-[#FAF9F5] py-16 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Empty search fallback */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#e6e2d8] rounded-2xl max-w-2xl mx-auto space-y-4">
              <p className="text-gray-500 text-sm font-semibold">
                No products found matching the criteria. Please clear your search queries or checkout alternate brands.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedBrand('All Brands');
                  setInStockOnly(false);
                }}
                className="bg-[#0a0f1d] text-white px-5 py-2.5 rounded font-display font-semibold text-xs tracking-wider uppercase cursor-pointer hover:bg-[#162a4a] transition-colors border-none"
              >
                RESET CATALOG FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-[#e6e2d8] hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image container box */}
                  <div>
                    <div className="h-60 bg-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Featured tag top-left in dark blue with white text */}
                      {(product.isFeatured || product.id === 'estwing-rock-hammer' || product.id === 'brunton-transit' || product.id === 'belomo-lens') && (
                        <div className="absolute top-4 left-4 bg-[#0a0f1d] text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1.5 rounded shadow-sm z-10">
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Metadata details block */}
                    <div className="p-6 space-y-3.5">
                      
                      {/* Brand Label */}
                      <div className="flex items-center space-x-1 uppercase text-[10px] font-mono font-bold text-[#B8A99A]">
                        <Compass className="w-3.5 h-3.5" />
                        <span>{product.brand}</span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-display font-semibold text-[#0a0f1d] text-lg lg:text-xl tracking-tight leading-snug">
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed min-h-[48px] line-clamp-3">
                        {product.description}
                      </p>

                      {/* Specifications Block - 2x2 technical grid layout */}
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-4 border-t border-b border-gray-100/75 my-4 text-xs font-sans">
                        {product.specifications.slice(0, 4).map((spec, sIdx) => {
                          const specString = String(spec);
                          const delimitPos = specString.indexOf(':');
                          const hasDelimit = delimitPos !== -1;
                          
                          const label = hasDelimit ? specString.substring(0, delimitPos).trim() : 'SPECIFICATION';
                          const value = hasDelimit ? specString.substring(delimitPos + 1).trim() : specString;
                          
                          return (
                            <div key={sIdx} className="space-y-0.5">
                              <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                                {label}
                              </span>
                              <span className="block font-medium text-gray-800 text-[11px] leading-tight line-clamp-1">
                                {value}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>

                  {/* Card bottom tray */}
                  <div className="px-6 pb-6 pt-2 select-none">
                    
                    {/* Price and Stock status row */}
                    <div className="flex items-center justify-between pb-4 font-sans border-b border-gray-50">
                      
                      {/* Stock status indicator */}
                      {product.inStock !== false ? (
                        <div className="flex items-center space-x-1.5 text-emerald-600 font-semibold text-xs uppercase tracking-wide">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>IN STOCK</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1.5 text-amber-600 font-semibold text-xs uppercase tracking-wide">
                          <span>DIRECT INQUIRY</span>
                        </div>
                      )}

                      {/* Price tag */}
                      <div className="text-[#0a0f1d] font-display font-black text-lg">
                        ${product.price || (product.id === 'estwing-rock-hammer' ? '89' : product.id === 'brunton-transit' ? '395' : '48')}
                      </div>

                    </div>

                    {/* Action Button: Navy blue full width */}
                    <button
                      onClick={() => handleAddToEnquiry(product.name)}
                      className="w-full mt-4 bg-[#0a0f1d] hover:bg-[#1f2d4e] active:bg-black text-white py-3.5 px-4 font-sans font-bold text-xs tracking-widest uppercase rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-sm border-none"
                    >
                      <span>ADD TO ENQUIRY</span>
                      <span className="opacity-60 text-xs tracking-normal font-sans ml-1 shrink-0">&gt;</span>
                    </button>

                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Verification Warranty Assurance Banner */}
          <div className="bg-white border border-[#e6e2d8] p-8 rounded-xl mt-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 border border-emerald-100/50">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-[#0a0f1d] uppercase tracking-wider">
                  AUTHENTIC DIRECT SUPPLIER WARRANTY
                </p>
                <p className="text-xs text-gray-500 mt-1 max-w-2xl font-sans leading-relaxed">
                  Quartzite Trading Services LLC secures genuine geological instruments and safety kits direct from authorized manufacturers. Full customized custom logistics and ports clearance across MEA guarantees uninterrupted stock support.
                </p>
              </div>
            </div>
            
            <button 
              onClick={handleCheckoutEnquiry}
              className="bg-[#0a0f1d] hover:bg-[#1a2d4b] text-white text-xs font-sans font-bold transition-all uppercase px-6 py-3.5 rounded-lg cursor-pointer whitespace-nowrap tracking-wider shadow border-none"
            >
              INQUIRE DIRECTLY
            </button>
          </div>

          {/* Quick return catalog anchor links */}
          <div className="pt-12 text-center">
            <button
              onClick={() => onNavigate('/')}
              className="border border-[#7c7569] hover:bg-black/5 text-[#7c7569] hover:text-black font-sans text-xs tracking-widest font-bold py-3.5 px-8 rounded-lg uppercase transition-all cursor-pointer bg-transparent"
            >
              &lt; BACK TO GLOBAL CATALOG DIRECTORY
            </button>
          </div>

        </div>
      </section>

      {/* FLOATING SUCCESS TOAST & ENQUIRY STATUS BAR */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0a0f1d] border border-[#B8A99A]/40 text-white rounded-xl shadow-2xl px-5 py-4 max-w-md animate-fade-in flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Check className="w-4 h-4" />
            </div>
            <p className="font-sans leading-relaxed">{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)} 
            className="text-white/40 hover:text-white bg-transparent border-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Inquiry Basket summary when 1 or more items are selected */}
      {basket.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0f1d] text-white border-t border-[#B8A99A]/30 py-4 px-6 shadow-2xl animate-slide-up flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#B8A99A]/15 text-[#B8A99A] rounded-lg relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#B8A99A] text-[#0a0f1d] text-[10px] rounded-full w-4.5 h-4.5 flex items-center justify-center font-bold">
                {basket.length}
              </span>
            </div>
            <div>
              <p className="font-display font-semibold text-xs uppercase tracking-wide">
                Enquiry Basket: {basket.length} item(s) selected
              </p>
              <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                {basket.join(', ')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setBasket([])}
              className="text-white/40 hover:text-white text-xs tracking-widest bg-transparent border-none cursor-pointer font-bold uppercase"
            >
              CLEAR ALL
            </button>
            <button
              onClick={handleCheckoutEnquiry}
              className="bg-[#B8A99A] hover:bg-[#a69687] text-[#0a1424] text-xs font-sans font-extrabold tracking-widest px-5 py-2.5 rounded-lg transition-all uppercase cursor-pointer flex items-center space-x-2 border-none"
            >
              <span>PROCEED TO ENQUIRY FORM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
