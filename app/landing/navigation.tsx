import { useEffect, useMemo, useState } from "react";
import AnkhLogo from "./ankh_logo";

const Navigation = ({
  scrollToSection
}: { scrollToSection: (sectionId: string) => void 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'services', 'founders', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ankhstudio = useMemo(() => (
   <AnkhLogo />
  ), []);


  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          { ankhstudio}
          <div className="flex items-center space-x-2">
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Services', 'Founders', 'Work', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium cursor-pointer transition-colors hover:text-purple-400 ${
                  activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Navigation;
