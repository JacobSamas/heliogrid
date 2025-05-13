
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-solar-white">
              Helio<span className="text-solar-gold">Grid</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-solar-white hover:text-solar-gold transition-colors">
              Home
            </a>
            <a href="#why-solar" className="text-solar-white hover:text-solar-gold transition-colors">
              Why Solar?
            </a>
            <a href="#calculator" className="text-solar-white hover:text-solar-gold transition-colors">
              Savings Calculator
            </a>
            <a href="#projects" className="text-solar-white hover:text-solar-gold transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-solar-white hover:text-solar-gold transition-colors">
              Contact
            </a>
            <Button variant="default" className="bg-solar-gold hover:bg-solar-gold/90 text-[#05091c] font-medium">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-solar-white">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glassmorphism mt-4 p-4 rounded-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-solar-white hover:text-solar-gold transition-colors" onClick={toggleMenu}>
                Home
              </a>
              <a href="#why-solar" className="text-solar-white hover:text-solar-gold transition-colors" onClick={toggleMenu}>
                Why Solar?
              </a>
              <a href="#calculator" className="text-solar-white hover:text-solar-gold transition-colors" onClick={toggleMenu}>
                Savings Calculator
              </a>
              <a href="#projects" className="text-solar-white hover:text-solar-gold transition-colors" onClick={toggleMenu}>
                Projects
              </a>
              <a href="#contact" className="text-solar-white hover:text-solar-gold transition-colors" onClick={toggleMenu}>
                Contact
              </a>
              <Button variant="default" className="bg-solar-gold hover:bg-solar-gold/90 text-[#05091c] font-medium w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
