
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 bg-white/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="font-serif text-2xl font-bold text-coffee-dark">Bean Bliss</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-coffee-medium hover:text-coffee-dark transition-colors">About</a>
          <a href="#menu" className="text-coffee-medium hover:text-coffee-dark transition-colors">Menu</a>
          <a href="#location" className="text-coffee-medium hover:text-coffee-dark transition-colors">Location</a>
          <a href="#contact" className="coffee-btn">Contact Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-coffee-dark"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-coffee-medium hover:text-coffee-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#menu" 
            className="text-coffee-medium hover:text-coffee-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a 
            href="#location" 
            className="text-coffee-medium hover:text-coffee-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Location
          </a>
          <a 
            href="#contact" 
            className="coffee-btn inline-block text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
