
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/95 backdrop-blur-sm shadow-subtle' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bdf64f8c-a968-4456-971c-199ccbac3b36.png" 
              alt="Lyautey Social Club" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">
              Home
            </Link>
            <a href="#services" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">
              About Us
            </a>
            <Link to="/booking" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">
              Book a Court
            </Link>
            <Button 
              asChild 
              className="bg-brand-dark text-white hover:bg-brand-accent btn-hover-fx"
            >
              <Link to="/booking">
                Book Now
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden text-brand-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark animate-fade-in">
          <div className="px-4 py-8 space-y-6">
            <Link 
              to="/" 
              className="block text-lg font-medium text-white hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#services" 
              className="block text-lg font-medium text-white hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block text-lg font-medium text-white hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <Link 
              to="/booking" 
              className="block text-lg font-medium text-white hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Court
            </Link>
            <Button 
              asChild 
              className="w-full bg-white text-brand-dark hover:bg-brand-accent hover:text-white"
            >
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
