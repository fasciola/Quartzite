import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [preselectedCategory, setPreselectedCategory] = useState('');

  // Synchronize path state with the browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Standard lightweight router transition logic
  const navigate = (targetPath: string) => {
    if (targetPath.startsWith('#')) {
      const elementId = targetPath.substring(1);
      
      // If we are currently inside a category detail subpage, go home first, then scroll
      if (currentPath !== '/') {
        window.history.pushState(null, '', '/');
        setCurrentPath('/');
        
        // Wait briefly for homepage layout mounting before scrolling
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Direct clean path alignment (e.g., /categories/geological-instruments)
      window.history.pushState(null, '', targetPath);
      setCurrentPath(targetPath);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Triggers immediate scrolling down to contact form while pre-selecting the product category
  const handleRequestQuote = (categoryId: string) => {
    setPreselectedCategory(categoryId);
    navigate('#contact');
  };

  // Helper parser for category ID extraction from active paths
  const getActiveCategoryId = () => {
    const parts = currentPath.split('/');
    if (parts[1] === 'categories' && parts[2]) {
      return parts[2];
    }
    return null;
  };

  const activeCategoryId = getActiveCategoryId();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col justify-between selection:bg-[#B8A99A]/30 selection:text-white">
      
      {/* Absolute top custom nav bar */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page routing switch */}
      <main className="flex-grow">
        {activeCategoryId ? (
          <CategoryDetail 
            categoryId={activeCategoryId} 
            onNavigate={navigate} 
            onRequestQuote={handleRequestQuote} 
          />
        ) : (
          <Home onNavigate={navigate} />
        )}

        {/* Core Global Interactive contact form displayed globally at bottom of pages */}
        <ContactForm preselectedCategoryId={preselectedCategory} />
      </main>

      {/* Clean high-contrast dark footer */}
      <Footer onNavigate={navigate} />

    </div>
  );
}
